```javascript
/* =========================================================
   MAHER HASSAN GIS PORTFOLIO
   JavaScript
   ========================================================= */


/* ================= MOBILE NAVIGATION ================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navMenu.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });


    /* Close menu after clicking a navigation link */

    navMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

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

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


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
```
```css
/* ================= SCROLL REVEAL ================= */

.reveal {
    opacity: 0;
    transform: translateY(25px);
    transition:
        opacity 0.7s ease,
        transform 0.7s ease;
}

.reveal.visible {
    opacity: 1;
    transform: translateY(0);
}
```
