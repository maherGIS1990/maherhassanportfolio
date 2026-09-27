/* =========================================================
   MAHER HASSAN GIS PORTFOLIO
   JavaScript
   ========================================================= */


/* ================= MOBILE NAVIGATION ================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    const setMenuState = (isOpen) => {

        navMenu.classList.toggle("active", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");

        const icon = menuToggle.querySelector("i");
        icon.classList.toggle("fa-bars", !isOpen);
        icon.classList.toggle("fa-xmark", isOpen);

    };

    menuToggle.addEventListener("click", () => {
        setMenuState(!navMenu.classList.contains("active"));
    });

    /* Close menu after clicking a navigation link */
    navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => setMenuState(false));
    });

    /* Close menu on Escape, and return focus to the toggle button */
    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && navMenu.classList.contains("active")) {
            setMenuState(false);
            menuToggle.focus();
        }
    });

}


/* ================= CURRENT YEAR ================= */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".about-card, .skill-card, .project-card, .map-placeholder, .afif-map-item"
);

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if (revealElements.length && !prefersReducedMotion) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );

    revealElements.forEach(element => {
        element.classList.add("reveal");
        revealObserver.observe(element);
    });

}
/* When reduced motion is preferred, elements are left unstyled by
   "reveal" entirely, so they're simply visible with no animation. */


/* ================= PROJECT LINKS ================= */

/*
   Project links currently use "#".

   Replace the href in index.html when you create
   individual project pages.

   Example:

   href="projects/afif-control-network.html"
*/


/* ================= AFIF MAP LIGHTBOX ================= */

const afifMapItems = document.querySelectorAll(".afif-map-item");

if (afifMapItems.length) {
    const modal = document.createElement("div");
    modal.className = "lightbox-modal";
    modal.setAttribute("aria-hidden", "true");

    const modalContent = document.createElement("div");
    modalContent.className = "lightbox-content";

    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className = "lightbox-close";
    closeButton.setAttribute("aria-label", "Close image preview");
    closeButton.innerHTML = "&times;";

    const lightboxImage = document.createElement("img");
    lightboxImage.className = "lightbox-image";
    lightboxImage.alt = "Expanded Afif project map";

    const caption = document.createElement("p");
    caption.className = "lightbox-caption";

    modalContent.append(closeButton, lightboxImage, caption);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    const openLightbox = (item) => {
        const image = item.querySelector("img");
        const figCaption = item.querySelector("figcaption");

        if (!image || !figCaption) return;

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        caption.textContent = figCaption.textContent.trim();

        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        closeButton.focus();
    };

    const closeLightbox = () => {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    };

    afifMapItems.forEach((item) => {
        item.addEventListener("click", () => openLightbox(item));
        item.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openLightbox(item);
            }
        });
    });

    closeButton.addEventListener("click", closeLightbox);
    modal.addEventListener("click", (event) => {
        if (event.target === modal) closeLightbox();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && modal.classList.contains("active")) {
            closeLightbox();
        }
    });
}


/* ================= CONSOLE MESSAGE ================= */

console.log(
    "Maher Hassan GIS Portfolio — GIS • GeoAI • Spatial Data Science"
);
