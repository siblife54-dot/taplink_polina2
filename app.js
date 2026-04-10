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
