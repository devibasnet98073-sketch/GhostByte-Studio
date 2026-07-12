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
/* ===========================
   SECTION TITLE
=========================== */

.section-title{
    text-align:center;
    margin-bottom:50px;
}

.section-title h2{
    font-size:2.5rem;
    color:#00e5ff;
    font-family:'Orbitron',sans-serif;
    letter-spacing:2px;
}

/* ===========================
   ABOUT SECTION
=========================== */

#about{
    padding:100px 8%;
}

.about-container{
    display:flex;
    justify-content:center;
    align-items:center;
}

.about-card{
    max-width:850px;
    width:100%;
    padding:40px;
    background:rgba(255,255,255,.06);
    backdrop-filter:blur(15px);
    border:1px solid rgba(255,255,255,.1);
    border-radius:20px;
    transition:.4s;
    box-shadow:0 0 30px rgba(0,229,255,.08);
}

.about-card:hover{
    transform:translateY(-10px);
    box-shadow:0 0 35px rgba(0,229,255,.35);
}

.about-card h3{
    color:#00e5ff;
    margin-bottom:20px;
    font-size:2rem;
}

.about-card p{
    color:#d5d5d5;
    line-height:1.8;
}

.info{
    margin-top:30px;
}

.info p{
    margin:12px 0;
}

.info a{
    color:#00e5ff;
    text-decoration:none;
}

.info a:hover{
    color:#8b5cf6;
}

/* ===========================
   SKILLS
=========================== */

#projects{
    padding:100px 8%;
}

.cards{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:25px;
}

.card{
    background:rgba(255,255,255,.06);
    backdrop-filter:blur(15px);
    padding:35px;
    border-radius:18px;
    border:1px solid rgba(255,255,255,.08);
    transition:.4s;
    cursor:pointer;
}

.card:hover{
    transform:translateY(-10px) scale(1.03);
    box-shadow:0 0 35px rgba(0,229,255,.35);
}

.card h3{
    color:#00e5ff;
    margin-bottom:15px;
}

.card p{
    color:#d5d5d5;
    line-height:1.7;
}

/* ===========================
   RESPONSIVE
=========================== */

@media(max-width:768px){

.about-card{
    padding:25px;
}

.about-card h3{
    font-size:1.6rem;
}

.section-title h2{
    font-size:2rem;
}

.cards{
    grid-template-columns:1fr;
}

        }
/* ===========================
Back To Top
=========================== */

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>250){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

}

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

/* ===========================
Dark / Light Mode
=========================== */

const themeBtn=document.getElementById("themeBtn");

themeBtn.onclick=function(){

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

themeBtn.innerHTML="☀";

}else{

themeBtn.innerHTML="🌙";

}

    }
