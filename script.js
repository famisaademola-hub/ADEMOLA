// ===============================
// ADEMOLA CYBER CAFE
// script.js
// ===============================

// Welcome message
window.addEventListener("load", function () {
    setTimeout(() => {
        alert("Welcome to Ademola Cyber Cafe!\nYour One-Stop Digital Solution.");
    }, 800);
});

// Smooth scrolling for navigation
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Contact button
const btn = document.querySelector("button");

if (btn) {
    btn.addEventListener("click", function () {
        console.log("WhatsApp button clicked");
    });
}

// Fade-in animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";

    observer.observe(section);
});

// Back to Top Button
const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.background = "#003366";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "20px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 4px 10px rgba(0,0,0,.3)";

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Current year in footer
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML = `© ${new Date().getFullYear()} Ademola Cyber Cafe. All Rights Reserved.`;
}function toggleMenu(){

const menu = document.getElementById("nav-menu");

menu.classList.toggle("active");

}