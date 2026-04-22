const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const navPanel = document.querySelector("[data-nav-panel]");
const faqItems = document.querySelectorAll(".faq-item");
const heroScene = document.querySelector(".hero");

setupHeader();
setupMenu();
setupFaq();
setupRevealAnimations();
setupCarousel();
setupHeroParallax();

function setupHeader() {
  if (!header) return;

  const updateHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

function setupMenu() {
  if (!menuToggle || !navPanel) return;

  const setMenuState = (isOpen) => {
    navPanel.classList.toggle("is-open", isOpen);
    menuToggle.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Затвори менюто" : "Отвори менюто");
    document.body.classList.toggle("menu-open", isOpen);
  };

  menuToggle.addEventListener("click", () => {
    setMenuState(!navPanel.classList.contains("is-open"));
  });

  navPanel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  document.addEventListener("click", (event) => {
    const clickedInside = navPanel.contains(event.target) || menuToggle.contains(event.target);
    if (!clickedInside) setMenuState(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuState(false);
  });
}

function setupFaq() {
  faqItems.forEach((item) => {
    const button = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    if (!button || !answer) return;

    button.addEventListener("click", () => {
      const shouldOpen = !item.classList.contains("is-open");

      faqItems.forEach((faqItem) => {
        const faqButton = faqItem.querySelector(".faq-question");
        const faqAnswer = faqItem.querySelector(".faq-answer");
        if (!faqButton || !faqAnswer) return;

        faqItem.classList.toggle("is-open", faqItem === item && shouldOpen);
        faqButton.setAttribute("aria-expanded", String(faqItem === item && shouldOpen));
        faqAnswer.style.maxHeight =
          faqItem === item && shouldOpen ? `${faqAnswer.scrollHeight}px` : "0px";
      });
    });
  });

  window.addEventListener("resize", () => {
    faqItems.forEach((item) => {
      const answer = item.querySelector(".faq-answer");
      if (!answer || !item.classList.contains("is-open")) return;
      answer.style.maxHeight = `${answer.scrollHeight}px`;
    });
  });
}

function setupRevealAnimations() {
  const revealElements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -48px 0px"
    }
  );

  revealElements.forEach((element) => observer.observe(element));
}

function setupCarousel() {
  const track = document.querySelector("[data-carousel-track]");
  const previousButton = document.querySelector("[data-carousel-prev]");
  const nextButton = document.querySelector("[data-carousel-next]");
  const currentIndex = document.querySelector("[data-carousel-index]");
  const progressBar = document.querySelector("[data-carousel-progress]");

  if (!track || !currentIndex || !progressBar) return;

  const slides = Array.from(track.querySelectorAll("[data-slide]"));
  if (!slides.length) return;

  const getClosestIndex = () => {
    return slides.reduce(
      (closest, slide, index) => {
        const distance = Math.abs(track.scrollLeft - slide.offsetLeft);
        return distance < closest.distance ? { index, distance } : closest;
      },
      { index: 0, distance: Number.POSITIVE_INFINITY }
    ).index;
  };

  const updateCarousel = () => {
    const activeIndex = getClosestIndex();
    currentIndex.textContent = String(activeIndex + 1).padStart(2, "0");
    progressBar.style.transform = `scaleX(${(activeIndex + 1) / slides.length})`;

    if (previousButton) previousButton.disabled = activeIndex === 0;
    if (nextButton) nextButton.disabled = activeIndex === slides.length - 1;
  };

  const goToSlide = (index) => {
    const boundedIndex = Math.max(0, Math.min(index, slides.length - 1));
    track.scrollTo({
      left: slides[boundedIndex].offsetLeft,
      behavior: "smooth"
    });
  };

  previousButton?.addEventListener("click", () => goToSlide(getClosestIndex() - 1));
  nextButton?.addEventListener("click", () => goToSlide(getClosestIndex() + 1));

  let frameId = 0;
  track.addEventListener(
    "scroll",
    () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(() => {
        updateCarousel();
        frameId = 0;
      });
    },
    { passive: true }
  );

  window.addEventListener("resize", updateCarousel);
  updateCarousel();
}

function setupHeroParallax() {
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!heroScene || !finePointer || reducedMotion) return;

  let frameId = 0;
  let queuedEvent = null;

  const applySceneState = (event) => {
    const rect = heroScene.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width;
    const relativeY = (event.clientY - rect.top) / rect.height;
    const normalizedX = (relativeX - 0.5) * 2;
    const normalizedY = (relativeY - 0.5) * 2;

    const shiftX = normalizedX * 18;
    const shiftY = normalizedY * 14;
    const tiltX = normalizedY * -4;
    const tiltY = normalizedX * 6;

    heroScene.style.setProperty("--scene-shift-x", `${shiftX}px`);
    heroScene.style.setProperty("--scene-shift-y", `${shiftY}px`);
    heroScene.style.setProperty("--scene-shift-x-inverse", `${shiftX * -1}px`);
    heroScene.style.setProperty("--scene-shift-y-inverse", `${shiftY * -1}px`);
    heroScene.style.setProperty("--scene-tilt-x", `${tiltX}deg`);
    heroScene.style.setProperty("--scene-tilt-y", `${tiltY}deg`);
  };

  const resetSceneState = () => {
    heroScene.style.setProperty("--scene-shift-x", "0px");
    heroScene.style.setProperty("--scene-shift-y", "0px");
    heroScene.style.setProperty("--scene-shift-x-inverse", "0px");
    heroScene.style.setProperty("--scene-shift-y-inverse", "0px");
    heroScene.style.setProperty("--scene-tilt-x", "0deg");
    heroScene.style.setProperty("--scene-tilt-y", "0deg");
  };

  heroScene.addEventListener("pointermove", (event) => {
    queuedEvent = event;
    if (frameId) return;

    frameId = window.requestAnimationFrame(() => {
      if (queuedEvent) applySceneState(queuedEvent);
      frameId = 0;
    });
  });

  heroScene.addEventListener("pointerleave", () => {
    queuedEvent = null;
    resetSceneState();
  });
}
