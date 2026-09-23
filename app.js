const profile = {
  name: "Swen Chan",
  availability: {
    en: "Remote & international",
    zh: "远程与国际机会",
  },
  email: "swenchan96@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/swenchan",
    github: "https://github.com/swen-chan",
    telegram: "https://t.me/redemptionandy",
    x: "https://x.com/SwenChan",
    dealAgentX: "https://x.com/DealAgentX",
    dealAgentDemo: "https://youtu.be/gT6-i7709qg?si=DhPN-qFMMHsZE-E1",
    dealAgentAward: "https://x.com/SwenChan/status/2046253680199098439?s=20",
    puffPrototype:
      "https://aicamp1-d6g1f3rcgd07aff06-1450652232.tcloudbaseapp.com/puff/",
    eipPlayground: "https://github.com/EIP-Playground/EIP-Playground",
    aiWeb3School: "https://aiweb3.school",
    aiWeb3SchoolX: "https://x.com/aiweb3school",
  },
};

const inquiryMailto =
  `mailto:${profile.email}?subject=${encodeURIComponent("Introduction / Collaboration Inquiry")}`;

const copy = {
  en: {
    pageTitle: "Swen Chan | AI Product & Embedded Systems Builder",
    metaDescription:
      "Swen Chan is a founder and product and technology builder creating 0-to-1 AI products, developer tools, and embedded systems.",
    navigationLabel: "Primary navigation",
    languageLabel: "Language switch",
    nav: {
      work: "Work",
      experience: "Experience",
      capabilities: "Capabilities",
      contact: "Contact",
    },
    heroKicker: "Founder & Product / Technology Builder",
    heroTitle: "Building 0-to-1 products across AI, Web3, and embedded systems.",
    heroIntro:
      "I work from user discovery and product definition through AI workflows, software prototypes, and hardware-software integration.",
    availability:
      "Open to remote and international product and technology roles, and selected collaborations",
    primaryCta: "View selected work",
    secondaryCta: "Contact me",
    heroCardLabel: "Current focus",
    heroCardTitle: "Hands-on work, from product definition to implementation.",
    heroCardList: [
      "Leading software and embedded systems development for Puff.",
      "Building Deal Agent for hospitality commerce, operations, and programmable payments.",
      "Working across AI products, developer tools, and hardware-software integration.",
    ],
    signalsLabel: "Selected outcomes",
    signals: [
      {
        value: "1st Place",
        label: "The Scaling Summit AI Agent Demo Day",
      },
      {
        value: "15 selected",
        label: "Sequoia China AGI Builders, from nearly 2,000 applicants",
      },
      {
        value: "1,000+",
        label: "AI × Web3 School participants",
      },
      {
        value: "2nd Place",
        label: "Spark AI Hackathon",
      },
    ],
    workEyebrow: "Selected work",
    workTitle: "Products and programs I have helped move from idea to reality.",
    workIntro:
      "A focused selection across embedded products, AI-native commerce, developer tools, and ecosystem education.",
    projectNavigationLabel: "Choose a project",
    projects: [
      {
        slug: "puff",
        title: "Puff",
        role: "Software & Embedded Systems Lead · Jul 2026 - Present",
        description:
          "A multisensory desktop companion integrating visual expression, motion, sound, scent, and sensor-based interactions.",
        detail:
          "ESP32 control logic · BLE · sensors · actuators · interaction state machines",
        featured: true,
        media: {
          poster: "assets/puff/puff-card.jpg?v=20260912b",
          video: "assets/puff/puff-preview.mp4?v=20260912",
          start: 5.5,
          alt: "Puff multisensory desktop companion in use",
        },
        actions: [
          { label: "Interactive prototype", href: profile.links.puffPrototype },
        ],
      },
      {
        slug: "deal-agent",
        title: "Deal Agent",
        role: "Founder · Mar 2026 - Present",
        description:
          "An AI-native commerce and operations product for hospitality, connecting inventory workflows with programmable payments.",
        detail:
          "1st Place at The Scaling Summit AI Agent Demo Day; selected for Sequoia China’s inaugural AGI Builders program as one of 15 from nearly 2,000 global applicants.",
        media: {
          poster: "assets/projects/deal-agent.jpg?v=20260912b",
          alt: "Deal Agent conversational hotel booking demo",
        },
        actions: [
          { label: "Project on X", href: profile.links.dealAgentX },
          { label: "Demo video", href: profile.links.dealAgentDemo },
          { label: "Award record", href: profile.links.dealAgentAward },
        ],
      },
      {
        slug: "eip-playground",
        title: "EIP Playground",
        role: "Founder · Backend & AI Agent Development · Feb - Apr 2026",
        description:
          "An interactive developer tool for exploring Ethereum Improvement Proposals.",
        detail: "2nd Place at the Spark AI Hackathon.",
        media: {
          poster: "assets/projects/eip-playground.jpg?v=20260912b",
          alt: "EIP Playground pixel-art learning environment and panda tutor",
        },
        actions: [
          { label: "GitHub", href: profile.links.eipPlayground },
        ],
      },
      {
        slug: "ai-web3-school",
        title: "AI × Web3 School",
        role: "Co-Founder & TA · Mar - Jun 2026",
        description:
          "A global developer education initiative connecting curriculum, instructors, ecosystem partners, community operations, and a multi-week hackathon.",
        detail: "Reached 1,000+ participants.",
        media: {
          poster: "assets/projects/ai-web3-school.jpg?v=20260912b",
          alt: "AI Web3 School official digital-cube hero artwork",
        },
        actions: [
          { label: "Website", href: profile.links.aiWeb3School },
          { label: "Project on X", href: profile.links.aiWeb3SchoolX },
        ],
      },
    ],
    experienceEyebrow: "Experience",
    experienceTitle: "Product, ecosystem, education, and evaluation work.",
    experienceIntro:
      "Roles that show how I work across market context, technical execution, and delivery.",
    experience: [
      {
        date: "Jun - Aug 2026",
        organization: "Virtuals / EconomyOS",
        role: "Business Development, China",
        description:
          "Developed the China developer ecosystem and startup partnerships, then translated founder and developer feedback into product and ecosystem recommendations.",
      },
      {
        date: "Jul 2026",
        organization: "Youth AI Creation Program",
        role: "Program Lead & Lead Instructor",
        description:
          "Designed and delivered project-based AI programs that guided learners from idea to prototype and final presentation.",
      },
      {
        date: "Apr - Aug 2026",
        organization: "Automated Scoring Evaluation for Virtual Physics Experiments",
        role: "Python Analysis & Model Evaluation",
        description:
          "Led the Python-based analysis and model evaluation module, including automated scoring analysis, human-rating comparison, and reliability assessment.",
      },
    ],
    capabilitiesEyebrow: "Capabilities",
    capabilitiesTitle:
      "Useful across product, software, hardware, and ecosystem boundaries.",
    capabilitiesIntro:
      "My strongest contribution is connecting these disciplines around a concrete product or program outcome.",
    capabilities: [
      {
        title: "Product & Execution",
        text: "0-to-1 product development, product strategy, rapid prototyping, user discovery, and cross-functional execution.",
      },
      {
        title: "AI & Data",
        text: "AI-agent workflows, applied AI products, Python, data analysis, model evaluation, and statistical validation.",
      },
      {
        title: "Software & Embedded",
        text: "ESP32, BLE, embedded state machines, sensor integration, actuator control, and hardware-software integration.",
      },
      {
        title: "Ecosystem & Education",
        text: "Developer education, curriculum and program design, partner coordination, community operations, and bilingual delivery.",
      },
    ],
    collaborationEyebrow: "Ways to collaborate",
    collaborationTitle:
      "I am most useful where a promising direction needs both definition and hands-on execution.",
    collaborationIntro:
      "The exact format can be a role, a focused project, or an early-stage collaboration.",
    collaboration: [
      {
        title: "Product & technology roles",
        text: "Early-stage teams that need someone to connect product definition, prototyping, and technical delivery.",
      },
      {
        title: "0-to-1 product collaboration",
        text: "Turning a validated direction into a prototype, demo, workflow, or first usable system.",
      },
      {
        title: "Developer ecosystem & education",
        text: "Developer-facing products, education programs, technical storytelling, and ecosystem initiatives.",
      },
    ],
    contactEyebrow: "Contact",
    contactTitle:
      "If my background fits what you are building, send me a concise note.",
    contactIntro:
      "I am open to remote and international product and technology roles, selected collaborations, and relevant ecosystem work.",
    contactNote: "Resume available on request.",
    footerAvailability: profile.availability.en,
    quickLinks: [
      { label: "LinkedIn", href: profile.links.linkedin, icon: "linkedin" },
      { label: "GitHub", href: profile.links.github, icon: "github" },
      { label: "Telegram", href: profile.links.telegram, icon: "telegram" },
      { label: "X", href: profile.links.x, icon: "x" },
      { label: "Email", href: inquiryMailto, icon: "email" },
    ],
    contactActions: [
      { label: "LinkedIn", href: profile.links.linkedin, icon: "linkedin" },
      { label: "GitHub", href: profile.links.github, icon: "github" },
      { label: "Telegram", href: profile.links.telegram, icon: "telegram" },
      { label: "X", href: profile.links.x, icon: "x" },
      { label: "Email", href: inquiryMailto, icon: "email" },
    ],
  },
  zh: {
    pageTitle: "Swen Chan | AI 产品与嵌入式系统建设者",
    metaDescription:
      "Swen Chan 是创业者与产品技术建设者，专注从 0 到 1 推进 AI 产品、开发者工具与嵌入式系统。",
    navigationLabel: "主导航",
    languageLabel: "语言切换",
    nav: {
      work: "项目",
      experience: "经历",
      capabilities: "能力",
      contact: "联系",
    },
    heroKicker: "创业者与产品 / 技术建设者",
    heroTitle: "构建横跨 AI、Web3 与嵌入式系统的 0-to-1 产品。",
    heroIntro:
      "从用户探索和产品定义，一直推进到 AI 工作流、软件原型与软硬件整合。",
    availability: "开放远程与国际化的产品、技术岗位，以及合适的合作机会",
    primaryCta: "查看代表项目",
    secondaryCta: "联系我",
    heroCardLabel: "当前重点",
    heroCardTitle: "从产品定义到具体实现，保持一线动手。",
    heroCardList: [
      "负责 Puff 的软件与嵌入式系统开发。",
      "推进连接酒店商业、运营、库存工作流与可编程支付的 Deal Agent。",
      "持续实践 AI 产品、开发者工具与软硬件整合。",
    ],
    signalsLabel: "代表成果",
    signals: [
      { value: "第一名", label: "The Scaling Summit AI Agent Demo Day" },
      { value: "入选 15 人", label: "红杉中国 AGI Builders，近 2,000 人申请" },
      { value: "1,000+", label: "AI × Web3 School 参与者" },
      { value: "第二名", label: "Spark AI Hackathon" },
    ],
    workEyebrow: "代表项目",
    workTitle: "把产品和项目从想法推进到真实结果。",
    workIntro:
      "聚焦展示嵌入式产品、AI 原生商业、开发者工具与生态教育方面的实践。",
    projectNavigationLabel: "选择项目",
    projects: [
      {
        slug: "puff",
        title: "Puff",
        role: "软件与嵌入式系统负责人 · 2026.07 - 至今",
        description:
          "一款多感官桌面陪伴设备，整合视觉表达、动作、声音、气味和基于传感器的互动。",
        detail: "ESP32 控制逻辑 · BLE · 传感器 · 执行器 · 交互状态机",
        featured: true,
        media: {
          poster: "assets/puff/puff-card.jpg?v=20260912b",
          video: "assets/puff/puff-preview.mp4?v=20260912",
          start: 5.5,
          alt: "Puff 多感官桌面陪伴设备使用场景",
        },
        actions: [
          { label: "交互原型", href: profile.links.puffPrototype },
        ],
      },
      {
        slug: "deal-agent",
        title: "Deal Agent",
        role: "Founder · 2026.03 - 至今",
        description:
          "面向酒店场景的 AI 原生商业与运营产品，连接库存工作流与可编程支付。",
        detail:
          "香港 The Scaling Summit AI Agent Demo Day 第一名；入选红杉中国首期 AGI Builders 项目，为近 2,000 名全球申请者中的 15 人之一。",
        media: {
          poster: "assets/projects/deal-agent.jpg?v=20260912b",
          alt: "Deal Agent 酒店预订对话式产品演示",
        },
        actions: [
          { label: "项目 X", href: profile.links.dealAgentX },
          { label: "演示视频", href: profile.links.dealAgentDemo },
          { label: "获奖记录", href: profile.links.dealAgentAward },
        ],
      },
      {
        slug: "eip-playground",
        title: "EIP Playground",
        role: "Founder · 后端与 AI Agent 开发 · 2026.02 - 2026.04",
        description: "一个用于探索 Ethereum Improvement Proposals 的交互式开发者工具。",
        detail: "Spark AI Hackathon 第二名。",
        media: {
          poster: "assets/projects/eip-playground.jpg?v=20260912b",
          alt: "EIP Playground 像素风学习环境与熊猫导师",
        },
        actions: [{ label: "GitHub", href: profile.links.eipPlayground }],
      },
      {
        slug: "ai-web3-school",
        title: "AI × Web3 School",
        role: "Co-Founder & TA · 2026.03 - 2026.06",
        description:
          "面向全球开发者的教育项目，连接课程、讲师、生态合作方、社区运营与多周黑客松。",
        detail: "累计触达 1,000+ 名参与者。",
        media: {
          poster: "assets/projects/ai-web3-school.jpg?v=20260912b",
          alt: "AI Web3 School 官方数字立方体主视觉",
        },
        actions: [
          { label: "官网", href: profile.links.aiWeb3School },
          { label: "项目 X", href: profile.links.aiWeb3SchoolX },
        ],
      },
    ],
    experienceEyebrow: "经历",
    experienceTitle: "产品、生态、教育与模型评估实践。",
    experienceIntro:
      "这些经历体现了我如何在市场语境、技术执行和项目交付之间切换。",
    experience: [
      {
        date: "2026.06 - 2026.08",
        organization: "Virtuals / EconomyOS",
        role: "中国区商务拓展",
        description:
          "拓展中国开发者生态与创业公司合作，并将创始人和开发者反馈转化为产品及生态建议。",
      },
      {
        date: "2026.07",
        organization: "青少年 AI 创作项目",
        role: "项目负责人及主讲",
        description:
          "设计并交付项目制 AI 课程，引导学员从想法推进到原型和最终展示。",
      },
      {
        date: "2026.04 - 2026.08",
        organization: "虚拟物理实验自动评分评估",
        role: "Python 数据分析与模型评估",
        description:
          "负责 Python 数据分析与模型评估模块，包括自动评分分析、与人工评分对比及可靠性评估。",
      },
    ],
    capabilitiesEyebrow: "核心能力",
    capabilitiesTitle: "在产品、软件、硬件与生态边界之间推进工作。",
    capabilitiesIntro:
      "我的主要价值，是围绕一个具体产品或项目结果，把不同能力连接起来。",
    capabilities: [
      {
        title: "产品与执行",
        text: "0-to-1 产品开发、产品策略、快速原型、用户探索与跨团队执行。",
      },
      {
        title: "AI 与数据",
        text: "AI Agent 工作流、应用型 AI 产品、Python、数据分析、模型评估与统计验证。",
      },
      {
        title: "软件与嵌入式",
        text: "ESP32、BLE、嵌入式状态机、传感器集成、执行器控制与软硬件整合。",
      },
      {
        title: "生态与教育",
        text: "开发者教育、课程与项目设计、合作方协调、社区运营与双语交付。",
      },
    ],
    collaborationEyebrow: "合作方向",
    collaborationTitle: "当一个有潜力的方向既需要定义，也需要动手推进时，我通常最有价值。",
    collaborationIntro: "合作形式可以是一份岗位、一个聚焦项目，或早期阶段的共同探索。",
    collaboration: [
      {
        title: "产品与技术岗位",
        text: "适合需要连接产品定义、原型和技术交付的早期团队。",
      },
      {
        title: "0-to-1 产品合作",
        text: "把已经验证的方向推进为原型、演示、工作流或首个可用系统。",
      },
      {
        title: "开发者生态与教育",
        text: "面向开发者的产品、教育项目、技术叙事与生态计划。",
      },
    ],
    contactEyebrow: "联系",
    contactTitle: "如果我的经历与你正在做的事情契合，欢迎发一段简洁的信息。",
    contactIntro:
      "我开放远程与国际化的产品、技术岗位、合适的合作机会，以及相关的生态工作。",
    contactNote: "如有需要，可以单独索取最新版简历。",
    footerAvailability: profile.availability.zh,
    quickLinks: [
      { label: "LinkedIn", href: profile.links.linkedin, icon: "linkedin" },
      { label: "GitHub", href: profile.links.github, icon: "github" },
      { label: "Telegram", href: profile.links.telegram, icon: "telegram" },
      { label: "X", href: profile.links.x, icon: "x" },
      { label: "邮箱", href: inquiryMailto, icon: "email" },
    ],
    contactActions: [
      { label: "LinkedIn", href: profile.links.linkedin, icon: "linkedin" },
      { label: "GitHub", href: profile.links.github, icon: "github" },
      { label: "Telegram", href: profile.links.telegram, icon: "telegram" },
      { label: "X", href: profile.links.x, icon: "x" },
      { label: "邮箱", href: inquiryMailto, icon: "email" },
    ],
  },
};

const ICONS = {
  linkedin: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5.2 3.8a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9.8h3.8V21H3.3V9.8Zm6.1 0H13v1.5h.1c.5-.9 1.7-1.9 3.5-1.9 3.8 0 4.5 2.5 4.5 5.7V21h-3.8v-5.2c0-1.2 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8V21H9.5V9.8Z" fill="currentColor"/>
    </svg>`,
  github: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.9 9.6.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.8-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1 .8-.2 1.7-.3 2.5-.3s1.7.1 2.5.3c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.8 1 1.7 1 2.8 0 3.9-2.4 4.7-4.7 5 .4.3.8 1 .8 2v3c0 .3.2.6.7.5 4-1.3 6.9-5.1 6.9-9.6C22 6.6 17.5 2 12 2Z" fill="currentColor"/>
    </svg>`,
  telegram: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.7 4.3 3.8 10.8c-1.2.5-1.2 1.2-.2 1.5l4.3 1.4 1.7 5.2c.2.7.1 1 .8 1 .5 0 .8-.2 1-.5l2.4-2.3 4.9 3.6c.9.5 1.5.3 1.7-.9l2.9-13.6c.3-1.5-.5-2.1-1.7-1.6Z" fill="currentColor"/>
    </svg>`,
  x: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.9 3H21l-5.9 6.8L22 21h-5.4l-4.2-5.5L7.6 21H5.5l6.4-7.4L2 3h5.5l3.8 5 4.6-5Z" fill="currentColor"/>
    </svg>`,
  email: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11Zm2 .2v.3l7 5.1 7-5.1v-.3a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5Zm14 2.8-6.4 4.6a1 1 0 0 1-1.2 0L5 9.5v8a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-8Z" fill="currentColor"/>
    </svg>`,
};

const byId = (id) => document.getElementById(id);

const elements = {
  brandName: byId("brandName"),
  siteNav: document.querySelector(".site-nav"),
  languageSwitch: document.querySelector(".lang-switch"),
  navWork: byId("navWork"),
  navExperience: byId("navExperience"),
  navCapabilities: byId("navCapabilities"),
  navContact: byId("navContact"),
  heroKicker: byId("heroKicker"),
  heroTitle: byId("heroTitle"),
  heroIntro: byId("heroIntro"),
  availabilityBadge: byId("availabilityBadge"),
  primaryCta: byId("primaryCta"),
  secondaryCta: byId("secondaryCta"),
  heroCardLabel: byId("heroCardLabel"),
  heroCardTitle: byId("heroCardTitle"),
  heroCardList: byId("heroCardList"),
  signalStrip: byId("signalStrip"),
  workEyebrow: byId("workEyebrow"),
  workTitle: byId("workTitle"),
  workIntro: byId("workIntro"),
  projectStageNav: byId("projectStageNav"),
  projectGrid: byId("projectGrid"),
  experienceEyebrow: byId("experienceEyebrow"),
  experienceTitle: byId("experienceTitle"),
  experienceIntro: byId("experienceIntro"),
  experienceList: byId("experienceList"),
  capabilitiesEyebrow: byId("capabilitiesEyebrow"),
  capabilitiesTitle: byId("capabilitiesTitle"),
  capabilitiesIntro: byId("capabilitiesIntro"),
  capabilityGrid: byId("capabilityGrid"),
  collaborationEyebrow: byId("collaborationEyebrow"),
  collaborationTitle: byId("collaborationTitle"),
  collaborationIntro: byId("collaborationIntro"),
  collaborationList: byId("collaborationList"),
  contactEyebrow: byId("contactEyebrow"),
  contactTitle: byId("contactTitle"),
  contactIntro: byId("contactIntro"),
  contactActions: byId("contactActions"),
  contactNote: byId("contactNote"),
  quickLinks: byId("quickLinks"),
  footerName: byId("footerName"),
  footerAvailability: byId("footerAvailability"),
};

const toggleButtons = document.querySelectorAll("[data-lang-toggle]");

function createIconLink({ label, href, icon }, className) {
  const link = document.createElement("a");
  link.className = className;
  link.href = href;
  if (href.startsWith("http")) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
  link.setAttribute("aria-label", label);
  link.setAttribute("title", label);
  link.insertAdjacentHTML("afterbegin", ICONS[icon] ?? "");

  const labelNode = document.createElement("span");
  labelNode.className = "sr-only";
  labelNode.textContent = label;
  link.append(labelNode);
  return link;
}

function renderQuickLinks(items) {
  elements.quickLinks.replaceChildren();
  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.append(createIconLink(item, "icon-link"));
    elements.quickLinks.append(listItem);
  });
}

function renderSignals(items, label) {
  elements.signalStrip.replaceChildren();
  elements.signalStrip.setAttribute("aria-label", label);
  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "signal-item";
    const value = document.createElement("strong");
    value.textContent = item.value;
    const text = document.createElement("span");
    text.textContent = item.label;
    card.append(value, text);
    elements.signalStrip.append(card);
  });
}

function createProjectAction({ label, href }) {
  const link = document.createElement("a");
  link.className = "project-link";
  link.href = href;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = label;
  return link;
}

let activeProjectSlug = "puff";
const finePointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const projectAutoplayDelay = 3500;
const projectManualPauseDuration = 7000;
let projectAutoplayTimer = null;
let projectStageObserver = null;
let projectStageVisible = false;
let projectStageInteracting = false;
let projectManualPauseUntil = 0;

function clearProjectAutoplay() {
  window.clearTimeout(projectAutoplayTimer);
  projectAutoplayTimer = null;
}

function canAutoplayProjects() {
  return (
    projectStageVisible &&
    !projectStageInteracting &&
    !reducedMotionQuery.matches &&
    document.visibilityState === "visible" &&
    elements.projectGrid.querySelectorAll(".project-card").length > 1
  );
}

function scheduleProjectAutoplay(delay = projectAutoplayDelay) {
  clearProjectAutoplay();
  if (!canAutoplayProjects()) return;

  const manualPauseRemaining = Math.max(0, projectManualPauseUntil - Date.now());
  projectAutoplayTimer = window.setTimeout(() => {
    if (!canAutoplayProjects()) return;
    const cards = [...elements.projectGrid.querySelectorAll(".project-card")];
    const activeIndex = cards.findIndex((card) => card.classList.contains("is-active"));
    setActiveProject(cards[(activeIndex + 1) % cards.length]);
    scheduleProjectAutoplay();
  }, Math.max(delay, manualPauseRemaining));
}

function pauseProjectAutoplay(duration = projectManualPauseDuration) {
  projectManualPauseUntil = Date.now() + duration;
  scheduleProjectAutoplay();
}

function stopProjectPreview(card) {
  const video = card.querySelector(".project-media-video");
  if (!video) return;
  card.classList.remove("is-previewing");
  video.pause();
  if (video.readyState > 0) video.currentTime = Number(video.dataset.start || 0);
}

function startProjectPreview(card) {
  if (!finePointerQuery.matches || reducedMotionQuery.matches) return;
  const video = card.querySelector(".project-media-video");
  if (!video) return;

  const playPreview = () => {
    const start = Number(video.dataset.start || 0);
    if (start && Math.abs(video.currentTime - start) > 0.35) {
      video.currentTime = start;
    }

    const playback = video.play();
    if (playback) {
      playback
        .then(() => {
          if (card.matches(":hover")) {
            card.classList.add("is-previewing");
          } else {
            video.pause();
          }
        })
        .catch(() => card.classList.remove("is-previewing"));
    }
  };

  if (!video.src) {
    video.src = video.dataset.src;
    video.load();
  }

  if (video.readyState >= 1) {
    playPreview();
  } else {
    video.addEventListener("loadedmetadata", playPreview, { once: true });
  }
}

function setActiveProject(card, { userInitiated = false } = {}) {
  if (!card) return;
  activeProjectSlug = card.dataset.project;
  elements.projectGrid.querySelectorAll(".project-card").forEach((projectCard) => {
    const isActive = projectCard === card;
    projectCard.classList.toggle("is-active", isActive);
    projectCard.setAttribute("aria-expanded", String(isActive));
    projectCard
      .querySelector(".project-card-content")
      ?.setAttribute("aria-hidden", String(!isActive));
    if (!isActive) stopProjectPreview(projectCard);
  });

  elements.projectStageNav.querySelectorAll(".project-nav-dot").forEach((button) => {
    const isActive = button.dataset.projectTarget === activeProjectSlug;
    button.classList.toggle("is-active", isActive);
    if (isActive) {
      button.setAttribute("aria-current", "true");
    } else {
      button.removeAttribute("aria-current");
    }
  });

  if (userInitiated) pauseProjectAutoplay();
}

function setupProjectStage() {
  clearProjectAutoplay();
  projectStageObserver?.disconnect();
  projectStageVisible = false;
  projectStageInteracting = false;
  const cards = [...elements.projectGrid.querySelectorAll(".project-card")];
  const initialCard =
    cards.find((card) => card.dataset.project === activeProjectSlug) ?? cards[0];
  if (initialCard) setActiveProject(initialCard);

  cards.forEach((card) => {
    card.addEventListener("pointerenter", () => {
      if (!finePointerQuery.matches) return;
      setActiveProject(card);
      startProjectPreview(card);
    });

    card.addEventListener("pointerleave", () => stopProjectPreview(card));
    card.addEventListener("focusin", () => setActiveProject(card));
    card.addEventListener("click", (event) => {
      if (event.target.closest("a")) return;
      setActiveProject(card, { userInitiated: true });
    });
    card.addEventListener("keydown", (event) => {
      if (event.target !== card || !["Enter", " "].includes(event.key)) return;
      event.preventDefault();
      setActiveProject(card, { userInitiated: true });
    });
  });

  const stageElements = [elements.projectGrid, elements.projectStageNav];
  stageElements.forEach((element) => {
    element.addEventListener("pointerenter", () => {
      if (!finePointerQuery.matches) return;
      projectStageInteracting = true;
      clearProjectAutoplay();
    });
    element.addEventListener("pointerleave", () => {
      if (!finePointerQuery.matches) return;
      projectStageInteracting = false;
      scheduleProjectAutoplay();
    });
  });

  elements.projectStageNav.querySelectorAll(".project-nav-dot").forEach((button) => {
    button.addEventListener("click", (event) => {
      const card = cards.find(
        (projectCard) => projectCard.dataset.project === button.dataset.projectTarget,
      );
      setActiveProject(card, { userInitiated: true });
      if (event.detail > 0) button.blur();
    });
  });

  let swipeStartX = null;
  elements.projectGrid.addEventListener("pointerdown", (event) => {
    if (event.pointerType !== "touch" || event.target.closest("a")) return;
    swipeStartX = event.clientX;
  });
  elements.projectGrid.addEventListener("pointerup", (event) => {
    if (swipeStartX === null || event.pointerType !== "touch") return;
    const distance = event.clientX - swipeStartX;
    swipeStartX = null;
    if (Math.abs(distance) < 48) return;
    const activeIndex = cards.findIndex((card) => card.classList.contains("is-active"));
    const direction = distance < 0 ? 1 : -1;
    const nextIndex = (activeIndex + direction + cards.length) % cards.length;
    setActiveProject(cards[nextIndex], { userInitiated: true });
  });

  const workSection = elements.projectGrid.closest("#work");
  if ("IntersectionObserver" in window && workSection) {
    projectStageObserver = new IntersectionObserver(
      ([entry]) => {
        projectStageVisible = entry.isIntersecting && entry.intersectionRatio >= 0.35;
        if (projectStageVisible) scheduleProjectAutoplay();
        else clearProjectAutoplay();
      },
      { threshold: [0, 0.35, 0.7] },
    );
    projectStageObserver.observe(workSection);
  } else {
    projectStageVisible = true;
    scheduleProjectAutoplay();
  }
}

function renderProjectNavigation(items, label) {
  elements.projectStageNav.replaceChildren();
  elements.projectStageNav.setAttribute("aria-label", label);
  items.forEach((item, index) => {
    const button = document.createElement("button");
    button.className = "project-nav-dot";
    button.type = "button";
    button.dataset.projectTarget = item.slug;
    button.setAttribute("aria-label", `${String(index + 1).padStart(2, "0")} · ${item.title}`);
    const hiddenLabel = document.createElement("span");
    hiddenLabel.className = "sr-only";
    hiddenLabel.textContent = item.title;
    button.append(hiddenLabel);
    elements.projectStageNav.append(button);
  });
}

function renderProjects(items, navigationLabel) {
  renderProjectNavigation(items, navigationLabel);
  elements.projectGrid.replaceChildren();
  items.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "project-card";
    if (item.featured) card.classList.add("project-card-featured");
    card.dataset.project = item.slug;
    card.tabIndex = 0;
    card.setAttribute("aria-label", `${item.title}. ${item.role}`);

    if (item.media) {
      const media = document.createElement("figure");
      media.className = "project-media";
      const image = document.createElement("img");
      image.src = item.media.poster;
      image.alt = item.media.alt;
      image.loading = "lazy";
      image.decoding = "async";
      media.append(image);
      if (item.media.video) {
        const video = document.createElement("video");
        video.className = "project-media-video";
        video.dataset.src = item.media.video;
        video.dataset.start = String(item.media.start || 0);
        video.poster = item.media.poster;
        video.preload = "none";
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.setAttribute("aria-hidden", "true");
        media.append(video);
      }
      card.append(media);
    } else {
      const graphic = document.createElement("div");
      graphic.className = "project-graphic";
      graphic.setAttribute("aria-hidden", "true");
      const mark = document.createElement("span");
      mark.textContent = item.title;
      graphic.append(mark);
      card.append(graphic);
    }

    const leftDoor = document.createElement("span");
    leftDoor.className = "project-door project-door-left";
    leftDoor.setAttribute("aria-hidden", "true");
    const rightDoor = document.createElement("span");
    rightDoor.className = "project-door project-door-right";
    rightDoor.setAttribute("aria-hidden", "true");

    const shell = document.createElement("div");
    shell.className = "project-card-shell";
    const meta = document.createElement("div");
    meta.className = "project-card-meta";
    const number = document.createElement("span");
    number.className = "project-number";
    number.textContent = String(index + 1).padStart(2, "0");

    const role = document.createElement("p");
    role.className = "project-role";
    role.textContent = item.role;
    const title = document.createElement("h3");
    title.textContent = item.title;
    const content = document.createElement("div");
    content.className = "project-card-content";
    const description = document.createElement("p");
    description.textContent = item.description;
    const detail = document.createElement("p");
    detail.className = "project-detail";
    detail.textContent = item.detail;
    meta.append(number, role);
    content.append(description, detail);

    if (item.actions?.length) {
      const actions = document.createElement("div");
      actions.className = "project-actions";
      item.actions.forEach((action) => actions.append(createProjectAction(action)));
      content.append(actions);
    }
    shell.append(meta, title, content);
    card.append(leftDoor, rightDoor, shell);
    elements.projectGrid.append(card);
  });
  setupProjectStage();
}

function renderExperience(items) {
  elements.experienceList.replaceChildren();
  items.forEach((item) => {
    const row = document.createElement("article");
    row.className = "timeline-item";
    const date = document.createElement("p");
    date.className = "timeline-date";
    date.textContent = item.date;
    const body = document.createElement("div");
    const organization = document.createElement("p");
    organization.className = "timeline-org";
    organization.textContent = item.organization;
    const title = document.createElement("h3");
    title.textContent = item.role;
    const description = document.createElement("p");
    description.textContent = item.description;
    body.append(organization, title, description);
    row.append(date, body);
    elements.experienceList.append(row);
  });
}

function renderNumberedCards(container, items, className) {
  container.replaceChildren();
  items.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = className;
    const number = document.createElement("p");
    number.className = `${className}-index`;
    number.textContent = String(index + 1).padStart(2, "0");
    const title = document.createElement("h3");
    title.textContent = item.title;
    const text = document.createElement("p");
    text.textContent = item.text;
    card.append(number, title, text);
    container.append(card);
  });
}

function renderCollaboration(items) {
  elements.collaborationList.replaceChildren();
  items.forEach((item) => {
    const row = document.createElement("article");
    const title = document.createElement("h3");
    title.textContent = item.title;
    const text = document.createElement("p");
    text.textContent = item.text;
    row.append(title, text);
    elements.collaborationList.append(row);
  });
}

function updateMetadata(content) {
  document.title = content.pageTitle;
  const description = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  const twitterDescription = document.querySelector('meta[name="twitter:description"]');
  if (description) description.content = content.metaDescription;
  if (ogTitle) ogTitle.content = content.pageTitle;
  if (ogDescription) ogDescription.content = content.metaDescription;
  if (twitterTitle) twitterTitle.content = content.pageTitle;
  if (twitterDescription) twitterDescription.content = content.metaDescription;
}

function renderLanguage(lang) {
  const content = copy[lang];
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  updateMetadata(content);

  elements.brandName.textContent = profile.name;
  elements.siteNav.setAttribute("aria-label", content.navigationLabel);
  elements.languageSwitch.setAttribute("aria-label", content.languageLabel);
  elements.navWork.textContent = content.nav.work;
  elements.navExperience.textContent = content.nav.experience;
  elements.navCapabilities.textContent = content.nav.capabilities;
  elements.navContact.textContent = content.nav.contact;
  elements.heroKicker.textContent = content.heroKicker;
  elements.heroTitle.textContent = content.heroTitle;
  elements.heroIntro.textContent = content.heroIntro;
  elements.availabilityBadge.textContent = content.availability;
  elements.primaryCta.textContent = content.primaryCta;
  elements.primaryCta.href = "#work";
  elements.secondaryCta.textContent = content.secondaryCta;
  elements.secondaryCta.href = "#contact";
  elements.heroCardLabel.textContent = content.heroCardLabel;
  elements.heroCardTitle.textContent = content.heroCardTitle;
  elements.heroCardList.replaceChildren();
  content.heroCardList.forEach((item) => {
    const row = document.createElement("li");
    row.textContent = item;
    elements.heroCardList.append(row);
  });

  elements.workEyebrow.textContent = content.workEyebrow;
  elements.workTitle.textContent = content.workTitle;
  elements.workIntro.textContent = content.workIntro;
  elements.experienceEyebrow.textContent = content.experienceEyebrow;
  elements.experienceTitle.textContent = content.experienceTitle;
  elements.experienceIntro.textContent = content.experienceIntro;
  elements.capabilitiesEyebrow.textContent = content.capabilitiesEyebrow;
  elements.capabilitiesTitle.textContent = content.capabilitiesTitle;
  elements.capabilitiesIntro.textContent = content.capabilitiesIntro;
  elements.collaborationEyebrow.textContent = content.collaborationEyebrow;
  elements.collaborationTitle.textContent = content.collaborationTitle;
  elements.collaborationIntro.textContent = content.collaborationIntro;
  elements.contactEyebrow.textContent = content.contactEyebrow;
  elements.contactTitle.textContent = content.contactTitle;
  elements.contactIntro.textContent = content.contactIntro;
  elements.contactNote.textContent = content.contactNote;
  elements.footerName.textContent = profile.name;
  elements.footerAvailability.textContent = content.footerAvailability;

  renderQuickLinks(content.quickLinks);
  renderSignals(content.signals, content.signalsLabel);
  renderProjects(content.projects, content.projectNavigationLabel);
  renderExperience(content.experience);
  renderNumberedCards(elements.capabilityGrid, content.capabilities, "capability-card");
  renderCollaboration(content.collaboration);

  elements.contactActions.replaceChildren();
  content.contactActions.forEach((action) => {
    elements.contactActions.append(createIconLink(action, "contact-link"));
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

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") scheduleProjectAutoplay();
  else clearProjectAutoplay();
});

reducedMotionQuery.addEventListener?.("change", () => {
  if (reducedMotionQuery.matches) clearProjectAutoplay();
  else scheduleProjectAutoplay();
});

renderLanguage("en");
