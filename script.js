/* MaxFlow interaction layer
   Edit copy in the translations object. Placeholder contact links live in index.html. */

const STORAGE_KEYS = {
  lang: "maxflow-language",
  theme: "maxflow-theme"
};

const translations = {
  bg: {
    "meta.title": "MaxFlow | Премиум уеб дизайн и разработка",
    "meta.description": "MaxFlow създава премиум custom сайтове, лендинг страници и поддръжка с безплатна демо концепция преди покупка.",
    "skip": "Към съдържанието",

    "nav.aria": "Основна навигация",
    "nav.menuOpen": "Отвори менюто",
    "nav.menuClose": "Затвори менюто",
    "nav.home": "Начало",
    "nav.why": "Защо MaxFlow",
    "nav.services": "Услуги",
    "nav.process": "Процес",
    "nav.showcase": "Посока",
    "nav.faq": "FAQ",
    "nav.cta": "Обади се",
    "language.aria": "Избор на език",
    "theme.aria": "Избор на тема",
    "theme.dark": "Тъмна",
    "theme.light": "Светла",

    "hero.eyebrow": "Бутиково уеб присъствие за бизнеси с амбиция",
    "hero.title": "Премиум уебсайт, който продава доверието ви преди първия разговор.",
    "hero.lede": "MaxFlow създава custom сайтове и лендинг страници с луксозен минимализъм, ясна стратегия и фокус върху повече запитвания.",
    "hero.support": "Първо виждате работеща демо посока. Ако усещането е правилно, продължаваме към финален build.",
    "hero.ctaPrimary": "Обади се",
    "hero.ctaSecondary": "Пиши в Instagram",
    "hero.pointOne": "Безплатно демо преди покупка",
    "hero.pointTwo": "Custom дизайн",
    "hero.pointThree": "Бързо изпълнение",
    "hero.pointsAria": "Акценти на MaxFlow",

    "why.kicker": "Защо MaxFlow",
    "why.title": "Сайтът ви трябва да изглежда като инвестиция, не като разход.",
    "why.intro": "Когато бизнесът ви изглежда уверен онлайн, клиентите по-лесно ви приемат сериозно. MaxFlow комбинира премиум дизайн, ясна структура и директен път към запитване.",
    "why.cardOneTitle": "Първо виждате посока",
    "why.cardOneText": "Получавате работеща демо концепция преди покупка, за да прецените стила, структурата и усещането.",
    "why.cardTwoTitle": "Създадено за доверие",
    "why.cardTwoText": "Дизайнът не е декор. Той подрежда офертата ви така, че посетителят да разбере защо сте правилният избор.",
    "why.cardThreeTitle": "Бърз и чист процес",
    "why.cardThreeText": "Работим фокусирано, без тежка бюрокрация и без шаблонни решения, които изглеждат като всички останали.",
    "why.cardFourTitle": "Custom изпълнение",
    "why.cardFourText": "Всяка страница се изгражда около вашата оферта, аудитория и цел, не около готова тема.",

    "services.kicker": "Услуги",
    "services.title": "Премиум уеб присъствие, изградено около реална бизнес цел.",
    "services.intro": "Избирате нивото на подкрепа, от което бизнесът ви има нужда сега. Всичко остава ясно, елегантно и лесно за развитие.",
    "services.customTitle": "Custom уебсайтове",
    "services.customText": "Цялостен сайт с премиум структура, силна визуална идентичност и път към запитване, който се усеща естествено.",
    "services.customValue": "Бизнес стойност: повече доверие, по-ясна оферта, по-силен първи контакт.",
    "services.landingTitle": "Лендинг страници",
    "services.landingText": "Фокусирана страница за кампания, услуга или оферта, изградена да води посетителя към конкретно действие.",
    "services.landingValue": "Бизнес стойност: по-малко разсейване, по-добра конверсия, по-лесно тестване.",
    "services.maintenanceTitle": "Поддръжка",
    "services.maintenanceText": "Постоянна грижа за съдържание, подобрения, малки промени и стабилно представяне след старта.",
    "services.maintenanceValue": "Бизнес стойност: сайтът остава актуален, чист и готов за следващата ви оферта.",

    "process.kicker": "Процес",
    "process.title": "Виждате работеща посока преди да решите дали да купите сайта.",
    "process.intro": "Този подход премахва най-големия риск: не плащате за обещание на сляпо. Първо виждате как MaxFlow може да позиционира бизнеса ви.",
    "process.stepOneTitle": "Начален разговор",
    "process.stepOneText": "Разбираме офертата, аудиторията, целта на сайта и какво трябва да почувства клиентът, когато ви види онлайн.",
    "process.stepTwoTitle": "Безплатна демо концепция",
    "process.stepTwoText": "Подготвяме работеща начална посока с реален визуален език, структура и усещане. Виждате я преди покупка.",
    "process.stepThreeTitle": "Обратна връзка и refinement",
    "process.stepThreeText": "Ако решите да продължим, изчистваме детайлите, подобряваме съдържанието и прецизираме посоката.",
    "process.stepFourTitle": "Финален build и launch",
    "process.stepFourText": "Изграждаме финалната версия, адаптираме я за всички екрани и подготвяме сайта за реални посетители.",

    "showcase.kicker": "Концепции и дизайнерска посока",
    "showcase.title": "Примерни визуални посоки, не измислени клиентски проекти.",
    "showcase.intro": "Докато портфолиото расте, MaxFlow показва реалистични концепции за различни типове бизнеси. Целта е да усетите нивото на мислене, композиция и детайл.",
    "showcase.cardTag": "Примерна посока, не клиентски проект",
    "showcase.cardOneTitle": "Премиум продуктова марка",
    "showcase.cardOneText": "Силен първи екран, уверен продуктов ритъм и фокус върху доверие преди продажба.",
    "showcase.cardOneAlt": "Концептуална посока за премиум търговски сайт",
    "showcase.cardTwoTitle": "Wellness / клиника",
    "showcase.cardTwoText": "Чисто усещане, спокойна структура и прецизно представяне за услуги с висока стойност.",
    "showcase.cardTwoAlt": "Концептуална посока за wellness и клиника",
    "showcase.cardThreeTitle": "Бутиков hospitality бранд",
    "showcase.cardThreeText": "По-емоционална посока с премиум атмосфера, ясни секции и силен финален CTA.",
    "showcase.cardThreeAlt": "Концептуална посока за бутиков hospitality бранд",

    "trust.kicker": "Какво можете да очаквате",
    "trust.title": "Изпълнение за брандове, които искат да изглеждат сериозно онлайн.",
    "trust.text": "Без измислени ревюта, без фалшиви лога и без кухи обещания. Доверието се печели чрез ясно позициониране, силен визуален стандарт и процес, който ви показва посоката преди ангажимент.",
    "trust.pointOneTitle": "Премиум първо впечатление",
    "trust.pointOneText": "Сайтът ви трябва да изглежда като бизнес, на който клиентът може да повери парите си.",
    "trust.pointTwoTitle": "Ясна оферта",
    "trust.pointTwoText": "Посетителят разбира какво предлагате, за кого е и защо има смисъл да ви пише сега.",
    "trust.pointThreeTitle": "Детайлно усещане",
    "trust.pointThreeText": "Микроинтеракции, ритъм, spacing и responsive поведение работят за усещане за качество.",

    "faq.kicker": "FAQ",
    "faq.title": "Ясни отговори преди първия разговор.",
    "faq.qOne": "Как работи безплатното демо?",
    "faq.aOne": "След кратък разговор подготвяме начална работеща посока за сайта. Виждате визията и структурата, преди да решите дали да продължим към финален проект.",
    "faq.qTwo": "Колко време отнема един проект?",
    "faq.aTwo": "Срокът зависи от обема, но процесът е създаден за бързо движение. Лендинг страниците обикновено са най-бързи, а по-пълните сайтове изискват повече съдържание и прецизиране.",
    "faq.qThree": "С какви бизнеси работите?",
    "faq.aThree": "MaxFlow е подходящ за услуги, premium local brands, консултанти, клиники, hospitality, e-commerce направления и бизнеси, които искат да изглеждат по-силно онлайн.",
    "faq.qFour": "Сайтът custom ли е?",
    "faq.aFour": "Да. Посоката, структурата и интерфейсът се създават около вашата оферта. Не разчитаме на готов шаблонен вид.",
    "faq.qFive": "Предлагате ли поддръжка?",
    "faq.aFive": "Да. Можем да поемем актуализации, малки промени, нови секции и ongoing подобрения, така че сайтът да остане свеж и полезен.",
    "faq.qSix": "Как започваме?",
    "faq.aSix": "Изпращате кратко съобщение или запазвате разговор. След това уточняваме целта, аудиторията и първата демо посока.",

    "final.kicker": "Готови за по-силен уебсайт?",
    "final.title": "Нека първо ви покажем посока.",
    "final.text": "Започнете с разговор. Ще видите работеща демо концепция преди решение за покупка.",
    "final.call": "Обади се",
    "final.instagram": "Пиши в Instagram",
    "final.facebook": "Пиши във Facebook",
    "final.work": "Работи с нас",

    "footer.statement": "Премиум web design и development за бизнеси, които искат да изглеждат уверено, ясно и скъпо онлайн.",
    "footer.contactTitle": "Контакт",
    "footer.phone": "+359 888 412 249",
    "footer.instagram": "Instagram",
    "footer.facebook": "Facebook",
    "footer.noteTitle": "Първата стъпка е лека.",
    "footer.noteText": "Пишете с кратко описание на бизнеса и целта. Ще получите честна посока за следващия ход.",
    "footer.rights": "© 2026 MaxFlow. Всички права запазени.",
    "footer.truth": "Без фалшиви ревюта. Без измислени case studies. Само ясна premium посока."
  },

  en: {
    "meta.title": "MaxFlow | Premium Web Design & Development",
    "meta.description": "MaxFlow creates premium custom websites, landing pages, and maintenance workflows with a free demo concept before purchase.",
    "skip": "Skip to content",

    "nav.aria": "Primary navigation",
    "nav.menuOpen": "Open menu",
    "nav.menuClose": "Close menu",
    "nav.home": "Home",
    "nav.why": "Why MaxFlow",
    "nav.services": "Services",
    "nav.process": "Process",
    "nav.showcase": "Direction",
    "nav.faq": "FAQ",
    "nav.cta": "Call now",
    "language.aria": "Language selection",
    "theme.aria": "Theme selection",
    "theme.dark": "Dark",
    "theme.light": "Light",

    "hero.eyebrow": "Boutique web presence for ambitious businesses",
    "hero.title": "A premium website that sells your credibility before the first call.",
    "hero.lede": "MaxFlow creates custom websites and landing pages with luxury minimalism, clear strategy, and a focus on more inquiries.",
    "hero.support": "You see a working demo direction first. If it feels right, we move into the final build.",
    "hero.ctaPrimary": "Call now",
    "hero.ctaSecondary": "Message on Instagram",
    "hero.pointOne": "Free demo before purchase",
    "hero.pointTwo": "Custom design",
    "hero.pointThree": "Fast execution",
    "hero.pointsAria": "MaxFlow highlights",

    "why.kicker": "Why MaxFlow",
    "why.title": "Your website should feel like an investment, not an expense.",
    "why.intro": "When your business looks confident online, customers take you seriously faster. MaxFlow combines premium design, clear structure, and a direct path to inquiry.",
    "why.cardOneTitle": "See the direction first",
    "why.cardOneText": "You receive a working demo concept before purchase, so you can judge the style, structure, and overall feeling.",
    "why.cardTwoTitle": "Built for trust",
    "why.cardTwoText": "Design is not decoration. It frames your offer so visitors understand why you are the right choice.",
    "why.cardThreeTitle": "Fast, clean process",
    "why.cardThreeText": "We move with focus, without heavy bureaucracy and without template decisions that make you look like everyone else.",
    "why.cardFourTitle": "Custom execution",
    "why.cardFourText": "Every page is built around your offer, audience, and goal, not around a ready-made theme.",

    "services.kicker": "Services",
    "services.title": "Premium web presence built around a real business goal.",
    "services.intro": "Choose the level of support your business needs now. Everything stays clear, refined, and easy to evolve.",
    "services.customTitle": "Custom Websites",
    "services.customText": "A complete website with premium structure, strong visual identity, and an inquiry path that feels natural.",
    "services.customValue": "Business value: more trust, a clearer offer, and a stronger first contact.",
    "services.landingTitle": "Landing Pages",
    "services.landingText": "A focused page for a campaign, service, or offer, built to guide visitors toward one clear action.",
    "services.landingValue": "Business value: less distraction, better conversion, and easier testing.",
    "services.maintenanceTitle": "Maintenance",
    "services.maintenanceText": "Ongoing care for content, improvements, small changes, and stable presentation after launch.",
    "services.maintenanceValue": "Business value: your site stays current, clean, and ready for your next offer.",

    "process.kicker": "Process",
    "process.title": "You see a working direction before deciding whether to buy the website.",
    "process.intro": "This removes the biggest risk: you are not paying for a blind promise. First, you see how MaxFlow can position your business.",
    "process.stepOneTitle": "Initial conversation",
    "process.stepOneText": "We understand your offer, audience, website goal, and what customers should feel when they discover you online.",
    "process.stepTwoTitle": "Free demo concept",
    "process.stepTwoText": "We prepare a working starting direction with real visual language, structure, and atmosphere. You see it before purchase.",
    "process.stepThreeTitle": "Feedback and refinement",
    "process.stepThreeText": "If you decide to move forward, we clarify the details, improve the content, and refine the direction.",
    "process.stepFourTitle": "Final build and launch",
    "process.stepFourText": "We build the final version, adapt it for every screen, and prepare the site for real visitors.",

    "showcase.kicker": "Concepts and design direction",
    "showcase.title": "Sample visual directions, not invented client projects.",
    "showcase.intro": "While the portfolio grows, MaxFlow shows realistic concepts for different business types. The goal is to feel the level of thinking, composition, and detail.",
    "showcase.cardTag": "Sample direction, not client work",
    "showcase.cardOneTitle": "Premium product brand",
    "showcase.cardOneText": "A strong first screen, confident product rhythm, and trust-focused flow before the sale.",
    "showcase.cardOneAlt": "Concept direction for a premium commerce website",
    "showcase.cardTwoTitle": "Wellness / clinic",
    "showcase.cardTwoText": "A clean feeling, calm structure, and precise presentation for high-value services.",
    "showcase.cardTwoAlt": "Concept direction for wellness and clinic businesses",
    "showcase.cardThreeTitle": "Boutique hospitality brand",
    "showcase.cardThreeText": "A more emotional direction with premium atmosphere, clear sections, and a strong final CTA.",
    "showcase.cardThreeAlt": "Concept direction for a boutique hospitality brand",

    "trust.kicker": "What to expect",
    "trust.title": "Execution for brands that want to look serious online.",
    "trust.text": "No invented reviews, no fake logos, and no empty promises. Trust is earned through clear positioning, a strong visual standard, and a process that shows you the direction before commitment.",
    "trust.pointOneTitle": "Premium first impression",
    "trust.pointOneText": "Your website should look like a business customers can trust with their money.",
    "trust.pointTwoTitle": "Clear offer",
    "trust.pointTwoText": "Visitors understand what you offer, who it is for, and why it makes sense to contact you now.",
    "trust.pointThreeTitle": "Detailed feeling",
    "trust.pointThreeText": "Micro-interactions, rhythm, spacing, and responsive behavior work together to create a quality feel.",

    "faq.kicker": "FAQ",
    "faq.title": "Clear answers before the first conversation.",
    "faq.qOne": "How does the free demo work?",
    "faq.aOne": "After a short conversation, we prepare a working starting direction for the website. You see the look and structure before deciding whether to continue into a full project.",
    "faq.qTwo": "How long does a project take?",
    "faq.aTwo": "Timing depends on scope, but the process is built for speed. Landing pages are usually the fastest, while fuller websites need more content and refinement.",
    "faq.qThree": "What types of businesses do you work with?",
    "faq.aThree": "MaxFlow fits service businesses, premium local brands, consultants, clinics, hospitality, e-commerce directions, and businesses that want to look stronger online.",
    "faq.qFour": "Is the site custom made?",
    "faq.aFour": "Yes. The direction, structure, and interface are created around your offer. We do not rely on a ready-made template look.",
    "faq.qFive": "Do you offer maintenance?",
    "faq.aFive": "Yes. We can handle updates, small changes, new sections, and ongoing improvements so the site stays fresh and useful.",
    "faq.qSix": "How do we start?",
    "faq.aSix": "Send a short message or book a call. Then we clarify the goal, audience, and first demo direction.",

    "final.kicker": "Ready for a stronger website?",
    "final.title": "Let us show you the direction first.",
    "final.text": "Start with a conversation. You will see a working demo concept before making a purchase decision.",
    "final.call": "Call now",
    "final.instagram": "Message on Instagram",
    "final.facebook": "Message on Facebook",
    "final.work": "Work with us",

    "footer.statement": "Premium web design and development for businesses that want to look confident, clear, and expensive online.",
    "footer.contactTitle": "Contact",
    "footer.phone": "+359 888 412 249",
    "footer.instagram": "Instagram",
    "footer.facebook": "Facebook",
    "footer.noteTitle": "The first step is light.",
    "footer.noteText": "Send a short description of the business and goal. You will receive an honest direction for the next move.",
    "footer.rights": "© 2026 MaxFlow. All rights reserved.",
    "footer.truth": "No fake reviews. No invented case studies. Just a clear premium direction."
  }
};

const doc = document.documentElement;
const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const navPanel = document.querySelector("[data-nav-panel]");
const languageButtons = document.querySelectorAll("[data-lang-button]");
const themeButtons = document.querySelectorAll("[data-theme-button]");
const faqItems = document.querySelectorAll(".faq-item");
const metaDescription = document.querySelector('meta[name="description"]');
const themeColorMeta = document.querySelector('meta[name="theme-color"]');

let activeLanguage = getStoredValue(STORAGE_KEYS.lang, "bg", ["bg", "en"]);
let activeTheme = getStoredValue(STORAGE_KEYS.theme, "dark", ["dark", "light"]);

setTheme(activeTheme);
setLanguage(activeLanguage);
setupHeader();
setupMobileMenu();
setupFaq();
setupRevealAnimations();
setupCursor();

function getStoredValue(key, fallback, allowedValues) {
  try {
    const value = localStorage.getItem(key);
    return allowedValues.includes(value) ? value : fallback;
  } catch {
    return fallback;
  }
}

function setStoredValue(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Private browsing or disabled storage should not break the site.
  }
}

function translate(key) {
  return translations[activeLanguage][key] || translations.bg[key] || "";
}

function setLanguage(language) {
  activeLanguage = translations[language] ? language : "bg";
  doc.lang = activeLanguage;
  document.title = translate("meta.title");

  if (metaDescription) {
    metaDescription.setAttribute("content", translate("meta.description"));
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = translate(key);
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(";").forEach((pair) => {
      const [attribute, key] = pair.split(":").map((part) => part && part.trim());
      if (attribute && key) {
        element.setAttribute(attribute, translate(key));
      }
    });
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === activeLanguage;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  updateMenuLabel();
  refreshOpenFaqHeights();
  setStoredValue(STORAGE_KEYS.lang, activeLanguage);
}

function setTheme(theme) {
  activeTheme = theme === "light" ? "light" : "dark";
  doc.dataset.theme = activeTheme;

  if (themeColorMeta) {
    themeColorMeta.setAttribute("content", activeTheme === "light" ? "#f7f7fa" : "#08080b");
  }

  themeButtons.forEach((button) => {
    const isActive = button.dataset.themeValue === activeTheme;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  setStoredValue(STORAGE_KEYS.theme, activeTheme);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setTheme(button.dataset.themeValue);
  });
});

function setupHeader() {
  const updateHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

function setupMobileMenu() {
  if (!menuToggle || !navPanel) return;

  menuToggle.addEventListener("click", () => {
    setMenuOpen(!navPanel.classList.contains("is-open"));
  });

  navPanel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(false);
  });

  document.addEventListener("click", (event) => {
    const clickedInsideMenu = navPanel.contains(event.target) || menuToggle.contains(event.target);
    if (!clickedInsideMenu) setMenuOpen(false);
  });
}

function setMenuOpen(isOpen) {
  navPanel.classList.toggle("is-open", isOpen);
  menuToggle.classList.toggle("is-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  updateMenuLabel();
}

function updateMenuLabel() {
  if (!menuToggle) return;
  const labelKey = navPanel && navPanel.classList.contains("is-open") ? "nav.menuClose" : "nav.menuOpen";
  menuToggle.setAttribute("aria-label", translate(labelKey));
  menuToggle.setAttribute("title", translate(labelKey));
}

function setupFaq() {
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    if (!question || !answer) return;

    question.addEventListener("click", () => {
      const shouldOpen = !item.classList.contains("is-open");
      item.classList.toggle("is-open", shouldOpen);
      question.setAttribute("aria-expanded", String(shouldOpen));
      answer.style.maxHeight = shouldOpen ? `${answer.scrollHeight}px` : "0px";
    });
  });
}

function refreshOpenFaqHeights() {
  faqItems.forEach((item) => {
    const answer = item.querySelector(".faq-answer");
    if (answer && item.classList.contains("is-open")) {
      answer.style.maxHeight = `${answer.scrollHeight}px`;
    }
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
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -48px 0px" }
  );

  revealElements.forEach((element) => observer.observe(element));
}

function setupCursor() {
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");

  if (!finePointer || reducedMotion || !dot || !ring) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener(
    "mousemove",
    (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      document.body.classList.add("cursor-ready");
    },
    { passive: true }
  );

  document.querySelectorAll("a, button").forEach((element) => {
    element.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
    element.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
  });

  const animateRing = () => {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(animateRing);
  };

  animateRing();
}

window.addEventListener("resize", refreshOpenFaqHeights);
