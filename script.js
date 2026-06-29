/*==========================================
        PORTFOLIO V2 - SCRIPT.JS
==========================================*/

// ==========================================
// MOBILE MENU
// ==========================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {

            menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

        } else {

            menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

        }

    });

}

// ==========================================
// CLOSE MENU AFTER CLICK
// ==========================================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        if (menuBtn) {

            menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

        }

    });

});

// ==========================================
// SMOOTH SCROLL
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ==========================================
// ACTIVE NAVIGATION
// ==========================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==========================================
// HEADER EFFECT
// ==========================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

// ==========================================
// SCROLL PROGRESS BAR
// ==========================================

const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {

    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

    const progress = (window.scrollY / totalHeight) * 100;

    if (progressBar) {
    progressBar.style.width = progress + "%";
}

});

// ==========================================
// REVEAL ANIMATION
// ==========================================

const reveals = document.querySelectorAll(".reveal");

function revealElements() {

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

// ==========================================
// CURSOR GLOW
// ==========================================

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", e => {

    if (glow) {

        glow.style.left = e.clientX + "px";

        glow.style.top = e.clientY + "px";

    }

});

// ==========================================
// PARALLAX IMAGE
// ==========================================

const imageCard = document.querySelector(".image-card");

if (imageCard) {

    imageCard.addEventListener("mousemove", e => {

        const rect = imageCard.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateX = (rect.height / 2 - y) / 18;

        const rotateY = (x - rect.width / 2) / 18;

        imageCard.style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    imageCard.addEventListener("mouseleave", () => {

        imageCard.style.transform = "rotateX(0deg) rotateY(0deg)";

    });

}

// ==========================================
// BUTTON RIPPLE
// ==========================================

document.querySelectorAll(".btn-primary,.btn-secondary").forEach(btn => {

    btn.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        const rect = this.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);

        ripple.style.width = size + "px";

        ripple.style.height = size + "px";

        ripple.style.left = e.clientX - rect.left - size / 2 + "px";

        ripple.style.top = e.clientY - rect.top - size / 2 + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

// ==========================================
// BACK TO TOP BUTTON
// ==========================================

const topBtn = document.createElement("a");

topBtn.href = "#home";

topBtn.className = "top-btn";

topBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});
// ==========================================
// CONSOLE MESSAGE
// ==========================================

console.log(

"%c🚀 Portfolio V2 Loaded Successfully",

"color:#C89B63;font-size:18px;font-weight:bold;"

);
/*==========================================
        EMAILJS CONTACT FORM
==========================================*/
emailjs.init({
    publicKey: "9tyfx81h9Vd5J_LVU"
});

const contactForm = document.getElementById("contact-form");
const sendBtn = document.getElementById("send-btn");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    sendBtn.innerHTML = "Sending...";
    sendBtn.disabled = true;

    emailjs.sendForm(
        "service_mzzuv8s",
        "template_r98f86w",
        this
    )
    .then(function(response) {

        console.log("SUCCESS!", response);

        alert("✅ Message sent successfully!");

        contactForm.reset();

    })
    .catch(function(error) {

        console.error("EMAILJS ERROR:", error);

        alert(
            "Error: " +
            (error.text || error.message || JSON.stringify(error))
        );

    })
    .finally(function() {

        sendBtn.innerHTML = "Send Message";
        sendBtn.disabled = false;

    });

});
/*==========================================
        SPOTLIGHT FOLLOW
==========================================*/

const spotlight = document.querySelector(".spotlight");

if (spotlight) {

    document.addEventListener("mousemove", (e) => {

        spotlight.style.left = e.clientX + "px";
        spotlight.style.top = e.clientY + "px";

    });

}
// ==========================================
// TYPING ANIMATION
// ==========================================

const typingText = document.getElementById("typing");

const words = [

    "Computer Science Student",

    "AI & ML Enthusiast",

    "Aspiring Full Stack Developer",

    "UI/UX Enthusiast"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent = currentWord.substring(0, charIndex++);
        
        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;

        }

    } else {

        typingText.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex = (wordIndex + 1) % words.length;

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 90);

}

typeEffect();
/*==========================================
            PRELOADER
==========================================*/
window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 1800);

});