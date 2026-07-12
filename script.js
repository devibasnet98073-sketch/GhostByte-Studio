// ===============================
// GhostByte Studio
// Developed by Shambhu Khatri
// Part 1
// ===============================

// Loading Screen
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1800);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
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

// Navbar Background on Scroll
window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 60) {
        nav.classList.add("active-nav");
    } else {
        nav.classList.remove("active-nav");
    }

});

// Hero Text Animation
const heroTitle = document.querySelector(".hero-content h1");

heroTitle.animate(
    [
        {
            opacity: 0,
            transform: "translateY(40px)"
        },
        {
            opacity: 1,
            transform: "translateY(0px)"
        }
    ],
    {
        duration: 1500,
        easing: "ease",
        fill: "forwards"
    }
);

// Explore Button Animation
const btn = document.querySelector(".btn");

btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.08)";
});

btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
});

// Console Message
console.log("%cWelcome to GhostByte Studio", "color:#00e5ff;font-size:22px;font-weight:bold;");
console.log("%cDeveloped by Shambhu Khatri", "color:#9b5cff;font-size:16px;");
