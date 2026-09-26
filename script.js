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
    ".about-card, .skill-card, .project-card, .map-placeholder"
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


/* ================= MAP PLACEHOLDERS ================= */

/*
   Your eight real maps can later replace the
   map-placeholder elements.

   Example:

   <img src="assets/maps/map01.jpg"
        alt="GIS map showing ...">

*/


/* ================= CONSOLE MESSAGE ================= */

console.log(
    "Maher Hassan GIS Portfolio — GIS • GeoAI • Spatial Data Science"
);
