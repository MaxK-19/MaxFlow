const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const mobileLinks = document.querySelectorAll(".mobile-nav a");
const revealElements = document.querySelectorAll("[data-reveal]");
const heroMedia = document.querySelector(".hero-media");
const heroStage = document.querySelector("[data-stage]");
const langButtons = document.querySelectorAll("[data-lang-option]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const metaDescription = document.querySelector('meta[name="description"]');

const translations = {
  bg: {
    metaTitle: "Виж уебсайта си преди да платиш",
    metaDescription: "Създавам модерни лендинг и бизнес сайтове. Получаваш безплатна демо версия и плащаш само ако ти хареса.",
    "nav.services": "Услуги",
    "nav.process": "Как работя",
    "nav.pricing": "Цена",
    "nav.about": "За мен",
    "nav.contact": "Контакт",
    "cta.demo": "Заяви безплатно демо",
    "hero.title": "Виж уебсайта си преди да платиш",
    "hero.subtitle": "Създавам модерни лендинг и бизнес сайтове. Получаваш безплатна демо версия и плащаш само ако ти хареса.",
    "services.title": "Услуги",
    "services.item1.title": "Лендинг страници",
    "services.item1.body": "Създадени с фокус върху конверсии и ясно послание",
    "services.item2.title": "Уебсайтове за малък бизнес",
    "services.item2.body": "Представяне на услуги по ясен и професионален начин",
    "services.item3.title": "Редизайн на съществуващи сайтове",
    "services.item3.body": "Подобряване на визията и потребителското изживяване",
    "process.title": "Как работя",
    "process.step1.title": "Стъпка 1:",
    "process.step1.body": "Споделяш какъв сайт ти трябва<br>Кратко описание или пример е напълно достатъчно",
    "process.step2.title": "Стъпка 2:",
    "process.step2.body": "Получаваш безплатно демо<br>Създавам начална версия на сайта ти без никакъв риск",
    "process.step3.title": "Стъпка 3:",
    "process.step3.body": "Редакции и финална версия<br>Правим нужните промени и плащаш само ако решиш да го използваш",
    "pricing.title": "Цена",
    "pricing.label": "Цени от",
    "pricing.amount": "200€",
    "pricing.note": "Промоционална цена за първи клиенти",
    "pricing.includes": "Включва:",
    "pricing.item1": "Безплатно демо",
    "pricing.item2": "Редакции според нуждите ти",
    "pricing.item3": "Плащане само при одобрение",
    "about.title": "За мен",
    "about.body1": "Занимавам се със създаване на уебсайтове с фокус върху изчистен дизайн и ясно представяне на информацията.",
    "about.body2": "Работя по лични и концептуални проекти и постоянно развивам уменията си.",
    "about.body3": "Целта ми е да създавам сайтове, които изглеждат добре и работят ефективно.",
    "contact.title": "Искаш сайт без риск?",
    "contact.body": "Пиши ми и ще ти създам безплатно демо за твоя проект."
  },
  en: {
    metaTitle: "See your website before you pay",
    metaDescription: "I create modern landing pages and business websites. You get a free demo version and pay only if you like it.",
    "nav.services": "Services",
    "nav.process": "How I work",
    "nav.pricing": "Pricing",
    "nav.about": "About",
    "nav.contact": "Contact",
    "cta.demo": "Request a free demo",
    "hero.title": "See your website before you pay",
    "hero.subtitle": "I create modern landing pages and business websites. You get a free demo version and pay only if you like it.",
    "services.title": "Services",
    "services.item1.title": "Landing pages",
    "services.item1.body": "Built with a focus on conversions and a clear message",
    "services.item2.title": "Websites for small businesses",
    "services.item2.body": "Presenting services in a clear and professional way",
    "services.item3.title": "Redesign of existing websites",
    "services.item3.body": "Improving the visual design and user experience",
    "process.title": "How I work",
    "process.step1.title": "Step 1:",
    "process.step1.body": "You share what kind of website you need<br>A short description or example is completely enough",
    "process.step2.title": "Step 2:",
    "process.step2.body": "You receive a free demo<br>I create an initial version of your website with no risk",
    "process.step3.title": "Step 3:",
    "process.step3.body": "Revisions and final version<br>We make the necessary changes and you pay only if you decide to use it",
    "pricing.title": "Pricing",
    "pricing.label": "Starting at",
    "pricing.amount": "200€",
    "pricing.note": "Promotional price for first clients",
    "pricing.includes": "Includes:",
    "pricing.item1": "Free demo",
    "pricing.item2": "Revisions based on your needs",
    "pricing.item3": "Payment only after approval",
    "about.title": "About",
    "about.body1": "I create websites with a focus on clean design and clear presentation of information.",
    "about.body2": "I work on personal and conceptual projects and keep improving my skills.",
    "about.body3": "My goal is to create websites that look good and work effectively.",
    "contact.title": "Want a website without risk?",
    "contact.body": "Message me and I will create a free demo for your project."
  }
};

const setMenuState = (isOpen) => {
  if (!header || !menuToggle || !mobileMenu) {
    return;
  }

  header.classList.toggle("menu-open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
};

const syncHeaderState = () => {
  if (!header) {
    return;
  }

  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

const setLanguage = (lang) => {
  const dictionary = translations[lang] || translations.bg;

  document.documentElement.lang = lang;
  document.title = dictionary.metaTitle;

  if (metaDescription) {
    metaDescription.setAttribute("content", dictionary.metaDescription);
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;

    if (dictionary[key]) {
      element.innerHTML = dictionary[key];
    }
  });

  langButtons.forEach((button) => {
    const isActive = button.dataset.langOption === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  window.localStorage.setItem("preferred-language", lang);
};

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = !header.classList.contains("menu-open");
    setMenuState(isOpen);
  });
}

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => setMenuState(false));
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.langOption);
  });
});

window.addEventListener(
  "resize",
  () => {
    if (window.innerWidth >= 1040) {
      setMenuState(false);
    }
  },
  { passive: true }
);

window.addEventListener(
  "keydown",
  (event) => {
    if (event.key === "Escape") {
      setMenuState(false);
    }
  }
);

window.addEventListener(
  "scroll",
  () => {
    syncHeaderState();

    if (heroMedia && !prefersReducedMotion) {
      const offset = Math.min(window.scrollY * 0.08, 42);
      heroMedia.style.transform = `scale(1.06) translate3d(0, ${offset}px, 0)`;
    }
  },
  { passive: true }
);

if (heroStage && !prefersReducedMotion) {
  const resetStage = () => {
    heroStage.style.setProperty("--stage-tilt-x", "0deg");
    heroStage.style.setProperty("--stage-tilt-y", "0deg");
  };

  heroStage.addEventListener("pointermove", (event) => {
    const rect = heroStage.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    heroStage.style.setProperty("--stage-tilt-x", `${y * -8}deg`);
    heroStage.style.setProperty("--stage-tilt-y", `${x * 10}deg`);
  });

  heroStage.addEventListener("pointerleave", resetStage);
}

syncHeaderState();

if (prefersReducedMotion) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
  document.body.classList.add("has-motion");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -10% 0px"
    }
  );

  revealElements.forEach((element, index) => {
    element.style.setProperty("--reveal-delay", `${Math.min(index * 50, 220)}ms`);
    observer.observe(element);
  });
}

const initialLanguage = window.localStorage.getItem("preferred-language") || "bg";
setLanguage(initialLanguage);
