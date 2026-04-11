const audienceGrid = document.querySelector(".audience-grid");

if (audienceGrid) {
  const revealAudience = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25 },
  );

  revealAudience.observe(audienceGrid);
}

const transformationCards = document.querySelectorAll(".transformation-card img");
const lightbox = document.getElementById("transformation-lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxClose = document.getElementById("transformation-lightbox-close");

if (transformationCards.length && lightbox && lightboxImage && lightboxClose) {
  const openLightbox = (imageElement) => {
    lightboxImage.src = imageElement.currentSrc || imageElement.src;
    lightboxImage.alt = imageElement.alt;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImage.src = "";
    lightboxImage.alt = "";
    document.body.style.overflow = "";
  };

  transformationCards.forEach((imageElement) => {
    imageElement.addEventListener("click", () => openLightbox(imageElement));
  });

  lightboxClose.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });
}
