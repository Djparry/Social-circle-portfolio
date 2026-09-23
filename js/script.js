/* =========================================
   SOCIAL CIRCLE JAVASCRIPT
========================================= */


/* ---------- MOBILE MENU ---------- */

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


/* Close menu when a link is clicked */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* ---------- HEADER SCROLL ---------- */

const header = document.getElementById("header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* ---------- FOOTER YEAR ---------- */

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


/* ---------- GALLERY LIGHTBOX ---------- */

const galleryImages =
    document.querySelectorAll(".gallery-item img");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightbox-image");

const lightboxClose =
    document.getElementById("lightbox-close");


galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightboxImage.src = image.src;

        lightboxImage.alt = image.alt;

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


/* Close lightbox */

lightboxClose.addEventListener("click", closeLightbox);


lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

        closeLightbox();

    }

});


function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

}


/* ---------- ESC KEY ---------- */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeLightbox();

        navMenu.classList.remove("active");

    }

});