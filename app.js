const profile = {
  name: "Swen Chan",
  positioning: {
    en: "AI x Web3 Builder & DevRel",
    zh: "AI x Web3 Builder & DevRel",
  },
  valueProp: {
    en: "I help founders and early-stage teams turn ambiguous ideas into prototypes, developer-facing products, and launch-ready assets.",
    zh: "我帮助 founder 和早期团队把模糊想法转化为原型、面向开发者的产品，以及可直接用于 launch 的资产。",
  },
  badge: {
    en: "Open to remote roles, collaborations and consulting",
    zh: "开放远程岗位、合作与顾问机会",
  },
  availabilityNote: {
    en: "Available for remote roles and collaboration with AI and Web3 teams, including DevRel launch support and workflow automation / designed AI agent development.",
    zh: "目前开放远程岗位、合作与顾问机会，重点方向包括 AI 和 Web3 团队协作、DevRel launch support，以及 workflow automation / designed AI agent development。",
  },
  email: "swenchan96@gmail.com",
  links: {
    telegram: "https://t.me/redemptionandy",
    x: "https://x.com/SwenChan",
    github: "https://github.com/swen-chan",
    calendar: "",
    project: "https://github.com/ShihaoZhou-NEU/web3-eip-playground",
  },
  mainProject: {
    name: "EIP Playground",
  },
};

const copy = {
  en: {
    pageTitle: `${profile.name} | ${profile.positioning.en}`,
    availability: profile.badge.en,
    heroKicker: profile.positioning.en,
    heroTitle: "AI x Web3 prototypes, product story, and workflow automation.",
    heroIntro:
      "I help AI and Web3 teams turn vague directions into things they can show, ship, and explain.",
    primaryCta: "View services",
    secondaryCta: "Selected work",
    heroCardLabel: "Good Fit",
    heroCardTitle: "Bring me in when something needs shape, story, or workflow.",
    heroCardList: [
      "The idea is promising, but still vague.",
      "The demo exists, but the story is weak.",
      "The workflow works, but wastes too much time.",
    ],
    servicesEyebrow: "",
    servicesTitle: "Three ways I can help",
    servicesIntro: "",
    services: [
      {
        title: "Prototype & Demo Support",
        meta: "For early-stage teams shaping an idea",
        description:
          "Turn a rough idea into a clearer prototype, demo, or flow.",
        bullets: [
          "Clarify scope and user flow",
          "Build something you can show and test",
        ],
        footer: "Best when you need something concrete to show fast",
      },
      {
        title: "Developer-facing Product Story",
        meta: "For products with technical depth",
        description:
          "Make a technical product easier for developers to understand.",
        bullets: [
          "Sharpen demos and product framing",
          "Support docs, launch materials, and dev-facing storytelling",
        ],
        footer: "Best when the product exists but the story is still fuzzy",
      },
      {
        title: "Workflow Automation Support",
        meta: "For small teams with repetitive processes",
        description:
          "Reduce repetitive work with practical automation and designed AI agents.",
        bullets: [
          "Map what is worth automating",
          "Design systems a small team can actually use",
        ],
        footer: "Best when the bottleneck is repetitive work",
      },
    ],
    proofEyebrow: "",
    proofTitle: "Public work and project-shaped proof",
    proofIntro: "",
    proofItems: [
      {
        label: "Flagship project",
        title: profile.mainProject.name,
        description:
          "Makes Ethereum standards easier to learn through interactive product and content experiments.",
        stat: "Created a builder-friendly education concept that can support developer onboarding, ecosystem storytelling, and community-facing learning.",
        actionLabel: "View on GitHub",
        actionHref: profile.links.project,
      },
      {
        label: "Prototype case",
        title: "AI / Agent Commerce Prototype",
        description:
          "Shaped a chat-native commerce and agent workflow prototype.",
        stat: "Helped turn an abstract agent idea into something closer to a real product narrative and demoable experience.",
      },
      {
        label: "Launch support",
        title: "Developer Launch / Demo Support for AI x Web3 Projects",
        description:
          "Supported early-stage projects with demos, framing, and technical storytelling.",
        stat: "Improved how the project could be understood, presented, and shared with developers, communities, and potential collaborators.",
      },
    ],
    trustEyebrow: "",
    trustTitle: "Builder-first, execution-aware",
    trustIntro: "",
    trustItems: [
      {
        title: "Ambiguity to structure",
        text: "I make vague directions clearer before the work drifts.",
      },
      {
        title: "Prototype + narrative",
        text: "I care about both the build and how people understand it.",
      },
      {
        title: "Developer-facing thinking",
        text: "I think about demos, onboarding, docs, and ecosystem context.",
      },
      {
        title: "Practical execution",
        text: "I focus on outputs a small team can actually use and ship.",
      },
    ],
    aboutEyebrow: "",
    aboutTitle: "Builder, product thinking, and ecosystem context",
    aboutText:
      "I work across analysis, product thinking, technical experimentation, and ecosystem work. I am most useful when an early-stage team needs someone who can move between framing, prototyping, technical storytelling, and execution.",
    contactEyebrow: "",
    contactTitle:
      "If you need a prototype, DevRel launch support, workflow automation or designed AI agents, feel free to reach out.",
    contactIntro: "",
    contactActions: [
      {
        label: "Telegram",
        href: profile.links.telegram,
        icon: "telegram",
      },
      {
        label: "X",
        href: profile.links.x,
        icon: "x",
      },
      {
        label: "GitHub",
        href: profile.links.github,
        icon: "github",
      },
      {
        label: "Email",
        href: `mailto:${profile.email}`,
        icon: "email",
      },
    ],
    contactNote: "",
    quickLinks: [
      { label: "Telegram", href: profile.links.telegram, icon: "telegram" },
      { label: "X", href: profile.links.x, icon: "x" },
      { label: "GitHub", href: profile.links.github, icon: "github" },
      { label: "Email", href: `mailto:${profile.email}`, icon: "email" },
    ],
  },
  zh: {
    pageTitle: `${profile.name} | ${profile.positioning.zh}`,
    availability: profile.badge.zh,
    heroKicker: profile.positioning.zh,
    heroTitle: "AI x Web3 原型、产品叙事与 workflow automation。",
    heroIntro:
      "我帮助 AI 和 Web3 团队把模糊方向变成更容易展示、交付和解释的结果。",
    primaryCta: "查看服务",
    secondaryCta: "查看案例",
    heroCardLabel: "适合的合作场景",
    heroCardTitle: "当一个方向需要被做实、讲清或跑顺时，我通常最有价值。",
    heroCardList: [
      "方向有潜力，但还太模糊。",
      "产品有内容，但 demo 和故事不够顺。",
      "流程能跑，但太耗人力。",
    ],
    servicesEyebrow: "",
    servicesTitle: "我可以先从这三类事情帮你",
    servicesIntro: "",
    services: [
      {
        title: "Prototype & Demo Support",
        meta: "适合正在收敛方向的早期团队",
        description:
          "把一个模糊想法推进成更清晰的 prototype、demo 或 flow。",
        bullets: [
          "先收敛范围和用户流程",
          "再做出能展示、能测试的东西",
        ],
        footer: "适合需要尽快拿出一个能展示的东西",
      },
      {
        title: "Developer-facing Product Story",
        meta: "适合技术深度较高的产品",
        description:
          "把技术产品整理得更容易被开发者理解。",
        bullets: [
          "梳理 demo、产品 framing 和表达",
          "支持 docs、launch materials 和 developer-facing storytelling",
        ],
        footer: "适合产品已经有了，但故事和表达还不够顺",
      },
      {
        title: "Workflow Automation Support",
        meta: "适合流程重复的小团队",
        description:
          "用实用的 automation 和 designed AI agents 减少重复劳动。",
        bullets: [
          "先找出真正值得自动化的环节",
          "再设计团队能真实使用的系统",
        ],
        footer: "适合主要瓶颈是重复劳动，而不是方向讨论",
      },
    ],
    proofEyebrow: "",
    proofTitle: "公开项目和项目型证明",
    proofIntro: "",
    proofItems: [
      {
        label: "主公开项目",
        title: profile.mainProject.name,
        description:
          "通过交互产品和内容实验，让 Ethereum standards 更容易理解。",
        stat: "形成了一个更 builder-friendly 的教育概念，可用于 developer onboarding、ecosystem storytelling 和面向社区的学习场景。",
        actionLabel: "查看 GitHub",
        actionHref: profile.links.project,
      },
      {
        label: "原型案例",
        title: "AI / Agent Commerce Prototype",
        description:
          "参与一个 chat-native commerce / agent workflow prototype 的产品结构和交互整理。",
        stat: "把一个偏抽象的 agent 想法推进成更接近真实产品叙事和可演示体验的形态。",
      },
      {
        label: "发布支持",
        title: "Developer Launch / Demo Support for AI x Web3 Projects",
        description:
          "为早期项目提供 demo、framing 和技术叙事支持。",
        stat: "帮助项目在开发者、社区和潜在合作方视角下，变得更容易被理解、展示和传播。",
      },
    ],
    trustEyebrow: "",
    trustTitle: "Builder 视角，执行导向",
    trustIntro: "",
    trustItems: [
      {
        title: "从模糊到结构",
        text: "先把模糊方向整理清楚，再推进��行。",
      },
      {
        title: "原型和叙事一起考虑",
        text: "不仅关注做出来，也关注别人如何理解它。",
      },
      {
        title: "面向开发者思维",
        text: "会同时考虑 demo、onboarding、docs 和 ecosystem context。",
      },
      {
        title: "实际可栴",
        text: "更关注团队下一步真的能用和能推进的产出。",
      },
    ],
    aboutEyebrow: "",
    aboutTitle: "Builder 视角、产品思考与生态语境",
    aboutText:
      "我是一个 AI x Web3 builder，经历横跨分析、产品思考、技术实验和 ecosystem work。对早期团队来说，当他们需要有人同时处理 framing、原型、技术叙事和执行时，我通常最有价值。",
    contactEyebrow: "",
    contactTitle: "如果你需要 prototype、DevRel launch support、workflow automation 或 designed AI agents，欢迎直接联系我。",
    contactIntro: "",
    contactActions: [
      {
        label: "Telegram",
        href: profile.links.telegram,
        icon: "telegram",
      },
      {
        label: "X",
        href: profile.links.x,
        icon: "x",
      },
      {
        label: "GitHub",
        href: profile.links.github,
        icon: "github",
      },
      {
        label: "邮箱",
        href: `mailto:${profile.email}`,
        icon: "email",
      },
    ],
    contactNote: "",
    quickLinks: [
      { label: "Telegram", href: profile.links.telegram, icon: "telegram" },
      { label: "X", href: profile.links.x, icon: "x" },
      { label: "GitHub", href: profile.links.github, icon: "github" },
      { label: "邮箱", href: `mailto:${profile.email}`, icon: "email" },
    ],
  },
};

const ICONS = {
  telegram: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.7 4.3 3.8 10.8c-1.2.5-1.2 1.2-.2 1.5l4.3 1.4 1.7 5.2c.2.7.1 1 .8 1 .5 0 .8-.2 1-.5l2.4-2.3 4.9 3.6c.9.5 1.5.3 1.7-.9l2.9-13.6c.3-1.5-.5-2.1-1.7-1.6Z" fill="currentColor"/>
    </svg>
  `,
  x: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.9 3H21l-5.9 6.8L22 21h-5.4l-4.2-5.5L7.6 21H5.5l6.4-7.4L2 3h5.5l3.8 5 4.6-5Z" fill="currentColor"/>
    </svg>
  `,
  github: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.9 9.6.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.8-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1 .8-.2 1.7-.3 2.5-.3s1.7.1 2.5.3c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.8 1 1.7 1 2.8 0 3.9-2.4 4.7-4.7 5 .4.3.8 1 .8 2v3c0 .3.2.6.7.5 4-1.3 6.9-5.1 6.9-9.6C22 6.6 17.5 2 12 2Z" fill="currentColor"/>
    </svg>
  `,
  email: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11Zm2 .2v.3l7 5.1 7-5.1v-.3a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5Zm14 2.8-6.4 4.6a1 1 0 0 1-1.2 0L5 9.5v8a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-8Z" fill="currentColor"/>
    </svg>
  `,
  project: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 4h6l2 2h6a1 1 0 0 1 1 1v2H4V5a1 1 0 0 1 1-1Zm-1 7h16l-1.4 7.1a2 2 0 0 1-2 1.6H7.4a2 2 0 0 1-2-1.6L4 11Zm5 2.2v1.6h6v-1.6H9Z" fill="currentColor"/>
    </svg>
  `,
};

const brandName = document.getElementById("brandName");
const availabilityBadge = document.getElementById("availabilityBadge");
const quickLinks = document.getElementById("quickLinks");
const servicesGrid = document.getElementById("servicesGrid");
const proofGrid = document.getElementById("proofGrid");
const trustGrid = document.getElementById("trustGrid");
const contactActions = document.getElementById("contactActions");
const toggleButtons = document.querySelectorAll("[data-lang-toggle]");

const textTargets = {
  heroKicker: document.getElementById("heroKicker"),
  heroTitle: document.getElementById("heroTitle"),
  heroIntro: document.getElementById("heroIntro"),
  primaryCta: document.getElementById("primaryCta"),
  secondaryCta: document.getElementById("secondaryCta"),
  heroCardLabel: document.getElementById("heroCardLabel"),
  heroCardTitle: document.getElementById("heroCardTitle"),
  servicesEyebrow: document.getElementById("servicesEyebrow"),
  servicesTitle: document.getElementById("servicesTitle"),
  servicesIntro: document.getElementById("servicesIntro"),
  proofEyebrow: document.getElementById("proofEyebrow"),
  proofTitle: document.getElementById("proofTitle"),
  proofIntro: document.getElementById("proofIntro"),
  trustEyebrow: document.getElementById("trustEyebrow"),
  trustTitle: document.getElementById("trustTitle"),
  trustIntro: document.getElementById("trustIntro"),
  aboutEyebrow: document.getElementById("aboutEyebrow"),
  aboutTitle: document.getElementById("aboutTitle"),
  aboutText: document.getElementById("aboutText"),
  contactEyebrow: document.getElementById("contactEyebrow"),
  contactTitle: document.getElementById("contactTitle"),
  contactIntro: document.getElementById("contactIntro"),
  contactNote: document.getElementById("contactNote"),
};

function createListItem(text) {
  const item = document.createElement("li");
  item.textContent = text;
  return item;
}

function createIconLink({ label, href, icon }, className = "icon-link") {
  const link = document.createElement("a");
  link.className = className;
  link.href = href;
  if (href.startsWith("http")) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }
  link.setAttribute("aria-label", label);
  link.setAttribute("title", label);
  link.innerHTML = `${ICONS[icon] ?? ""}<span class="sr-only">${label}</span>`;
  return link;
}

function renderQuickLinks(items) {
  quickLinks.replaceChildren();
  items.forEach((item) => {
    const wrapper = document.createElement("li");
    const link = createIconLink(item);
    wrapper.append(link);
    quickLinks.append(wrapper);
  });
}

function renderSimpleCards(container, items, className) {
  container.replaceChildren();
  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = className;

    const title = document.createElement("h3");
    title.className =
      className === "fit-item" ? "fit-title" : "trust-title";
    title.textContent = item.title;

    const text = document.createElement("p");
    text.className = className === "fit-item" ? "fit-text" : "trust-text";
    text.textContent = item.text;

    card.append(title, text);
    container.append(card);
  });
}

function renderServices(items) {
  servicesGrid.replaceChildren();

  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "service-card";

    const meta = document.createElement("p");
    meta.className = "service-meta";
    meta.textContent = item.meta;

    const title = document.createElement("h3");
    title.className = "service-title";
    title.textContent = item.title;

    const description = document.createElement("p");
    description.className = "service-description";
    description.textContent = item.description;

    const list = document.createElement("ul");
    list.className = "service-list";
    item.bullets.forEach((bullet) => list.append(createListItem(bullet)));

    const footer = document.createElement("p");
    footer.className = "service-footer";
    footer.textContent = item.footer;

    card.append(meta, title, description, list, footer);
    servicesGrid.append(card);
  });
}

function renderProof(items) {
  proofGrid.replaceChildren();

  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "proof-card";

    const label = document.createElement("p");
    label.className = "proof-label";
    label.textContent = item.label;

    const title = document.createElement("h3");
    title.className = "proof-title";
    title.textContent = item.title;

    const description = document.createElement("p");
    description.className = "proof-description";
    description.textContent = item.description;

    const stat = document.createElement("p");
    stat.className = "proof-stat";
    stat.textContent = item.stat;

    card.append(label, title, description, stat);

    if (item.actionHref && item.actionLabel) {
      const action = document.createElement("a");
      action.className = "proof-link";
      action.href = item.actionHref;
      action.target = "_blank";
      action.rel = "noreferrer";
      action.textContent = item.actionLabel;
      card.append(action);
    }

    proofGrid.append(card);
  });
}

function renderLanguage(lang) {
  const content = copy[lang];
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = content.pageTitle;
  brandName.textContent = profile.name;
  availabilityBadge.textContent = content.availability;

  Object.entries(textTargets).forEach(([key, node]) => {
    if (node) node.textContent = content[key];
  });

  textTargets.primaryCta.href = "#services";
  textTargets.primaryCta.removeAttribute("target");
  textTargets.primaryCta.removeAttribute("rel");
  textTargets.secondaryCta.href = "#proof";
  textTargets.secondaryCta.removeAttribute("target");
  textTargets.secondaryCta.removeAttribute("rel");

  const heroCardList = document.getElementById("heroCardList");
  heroCardList.replaceChildren();
  content.heroCardList.forEach((line) => {
    heroCardList.append(createListItem(line));
  });

  renderQuickLinks(content.quickLinks);
  renderServices(content.services);
  renderProof(content.proofItems);
  renderSimpleCards(trustGrid, content.trustItems, "trust-item");

  contactActions.replaceChildren();
  content.contactActions.forEach((action) => {
    contactActions.append(createIconLink(action, "contact-icon"));
  });

  toggleButtons.forEach((button) => {
    const isActive = button.dataset.langToggle === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    renderLanguage(button.dataset.langToggle);
  });
});

renderLanguage("en");
