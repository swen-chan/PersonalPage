const profile = {
  name: "Swen Chan",
  positioning: {
    en: "AI x Web3 DevRel, Program Design, and AI-Native Workflow Systems",
    zh: "AI x Web3 开发者关系、生态项目设计与 AI 原生工作流系统",
  },
  valueProp: {
    en: "I help Web3 and AI-native teams turn complex ideas, community programs, and recurring workflows into clear developer-facing assets and usable AI systems.",
    zh: "我帮助 Web3 和 AI 原生团队把复杂想法、生态项目和重复工作流转化为清晰的开发者资产与可用的 AI 系统。",
  },
  badge: {
    en: "Open to custom AI workflow systems and focused pilot sprints",
    zh: "开放企业 AI 工作流定制与小型试点合作",
  },
  availabilityNote: {
    en: "Available for Web3 teams, ecosystem programs, and operators who need DevRel assets, program structure, personal AI workflows, or custom AI-native business systems.",
    zh: "目前开放与 Web3 团队、生态项目和业务操作者合作，方向包括开发者关系资产、项目结构设计、个人 AI 工作流和企业 AI 原生业务系统。",
  },
  email: "swenchan96@gmail.com",
  links: {
    telegram: "https://t.me/redemptionandy",
    x: "https://x.com/SwenChan",
    github: "https://github.com/swen-chan",
    calendar: "",
    project: "https://github.com/ShihaoZhou-NEU/web3-eip-playground",
    dealAgentX: "https://x.com/DealAgentX",
    dealAgentDemo: "https://youtu.be/gT6-i7709qg?si=DhPN-qFMMHsZE-E1",
    dealAgentAward: "https://x.com/SwenChan/status/2046253680199098439?s=20",
    aiWeb3School: "https://aiweb3.school",
    aiWeb3SchoolX: "https://x.com/aiweb3school",
    ercDiscussion: "https://x.com/ETHPanda_Org/status/2034564916473156079?s=20",
    ercExplainer: "https://x.com/SwenChan/status/2031378840023609825?s=20",
  },
  mainProject: {
    name: "EIP Playground",
  },
};

const pilotMailto =
  `mailto:${profile.email}?subject=${encodeURIComponent("Custom AI Workflow / Pilot Sprint Inquiry")}`;

const copy = {
  en: {
    pageTitle: `${profile.name} | ${profile.positioning.en}`,
    availability: profile.badge.en,
    heroKicker: profile.positioning.en,
    heroTitle: "Turn workflows, programs, and Web3 ideas into AI-native systems people can use.",
    heroIntro:
      "I work with Web3 teams, ecosystem programs, founders, and operators who need clearer DevRel assets, better program design, or practical AI workflows for real business processes.",
    primaryCta: "Discuss a Custom AI Workflow",
    primaryCtaHref: pilotMailto,
    secondaryCta: "View Service Packages",
    secondaryCtaHref: "#services",
    heroCardLabel: "Best Fit",
    heroCardTitle: "Bring me in when technical ideas need structure, adoption, or workflow.",
    heroCardList: [
      "Your product is technical, but builders still need a clearer path.",
      "Your program has partners, learners, or sponsors, but needs sharper structure.",
      "Your personal or business workflow is repetitive enough to become an AI-assisted system.",
    ],
    servicesEyebrow: "Services",
    servicesTitle: "Four ways to work with me",
    servicesIntro:
      "Start with a focused sprint, or scope a custom AI-native workflow system when the process is already valuable enough to operationalize.",
    services: [
      {
        title: "DevRel & Developer Education Sprint",
        meta: "For protocols, infra teams, and developer tools",
        pills: ["DevRel", "3-7 day sprint"],
        description:
          "Turn technical depth into assets builders can understand, try, and share.",
        bullets: [
          "Product framing, launch story, and developer-facing positioning",
          "Guides, workshop outlines, onboarding flows, or technical content plans",
          "Review and rewrite materials so the product is easier to adopt",
        ],
        footer: "Best when the product exists but the developer path is still unclear",
      },
      {
        title: "Hackathon & Ecosystem Program Support",
        meta: "For schools, hackathons, and ecosystem teams",
        pills: ["Program design", "Multi-week support"],
        description:
          "Design builder programs that connect curriculum, partners, challenges, and community operations.",
        bullets: [
          "Program structure, curriculum flow, challenge design, and learner guides",
          "Partner / sponsor content boundaries and workshop fit",
          "Community support systems, bilingual materials, and post-program artifacts",
        ],
        footer: "Best when the ecosystem goal needs structure and execution rhythm",
      },
      {
        title: "Personal AI Workflow System",
        meta: "For founders, BD, researchers, creators, and solo operators",
        pills: ["Personal system", "1-2 week setup"],
        description:
          "Build an AI-assisted operating system around one person's information flow, decisions, and repeat work.",
        bullets: [
          "Workflow audit across research, CRM, content, meetings, and follow-ups",
          "Prompt / agent flows, knowledge setup, automation, and operating guide",
          "A practical system the user can maintain without a full engineering team",
        ],
        footer: "Best when one person's work is valuable but too fragmented",
      },
      {
        title: "Custom AI-Native Workflow System",
        meta: "For teams and companies with repeatable high-value processes",
        pills: ["Enterprise custom", "Scoped after discovery"],
        featured: true,
        description:
          "Turn recurring business processes into an internal AI-native workflow layer for a team, project, or company.",
        bullets: [
          "Discovery, workflow architecture, and AI-native system design",
          "Agent workflows, internal tools, knowledge base, and team handoff",
          "Iterative deployment for BD, deal flow, community ops, research, or customer workflows",
        ],
        footer: "Best when the process already matters enough to support a custom build",
      },
    ],
    proofEyebrow: "Selected Work",
    proofTitle: "Proof across agents, DevRel, education, and ecosystem work",
    proofIntro:
      "These projects show the kind of bridge I care about: technical ideas, builder understanding, partner coordination, and usable AI-native workflows.",
    proofItems: [
      {
        label: "Agentic commerce",
        title: "DealAgent",
        description:
          "Co-founder of a chat-first AI workflow prototype for deal and agentic commerce scenarios.",
        stat: "Winner at The Scaling Summit AI Agent Demo Day in Hong Kong.",
        actions: [
          { label: "X", href: profile.links.dealAgentX },
          { label: "Demo video", href: profile.links.dealAgentDemo },
          { label: "Award post", href: profile.links.dealAgentAward },
        ],
      },
      {
        label: "Ecosystem program",
        title: "AI x Web3 School",
        description:
          "Core planning and execution across curriculum design, sponsor coordination, community operations, learner support, bilingual guides, hackathon challenge design, and DevRel content.",
        stat: "Connected technical direction, partner resources, and learner understanding into a builder-facing program.",
        actions: [
          { label: "Website", href: profile.links.aiWeb3School },
          { label: "X", href: profile.links.aiWeb3SchoolX },
        ],
      },
      {
        label: "Ecosystem discussion",
        title: "ERC-8183 / ERC-8004 / Agent Commerce",
        description:
          "Hosted and contributed to discussions around agent commerce, accountable agent workflows, x402, and AI-native Web3 systems.",
        stat: "Focused on protocol interpretation, developer education, and ecosystem adoption.",
        actions: [
          { label: "Hosted discussion", href: profile.links.ercDiscussion },
          { label: "Chinese explainer", href: profile.links.ercExplainer },
        ],
      },
      {
        label: "Developer education",
        title: profile.mainProject.name,
        description:
          "A developer education product that helps people learn Ethereum standards in a more interactive way.",
        stat: "Built around builder onboarding, ecosystem storytelling, and EIP learning.",
        actions: [{ label: "View on GitHub", href: profile.links.project }],
      },
    ],
    trustEyebrow: "How It Works",
    trustTitle: "Diagnose, design, then deliver something usable",
    trustIntro:
      "I keep the scope practical: understand the process, design the workflow, ship the first useful version, then improve from real use.",
    trustItems: [
      {
        title: "Diagnose",
        text: "Clarify the user, process, bottleneck, and success criteria before choosing tools.",
      },
      {
        title: "Design",
        text: "Map the workflow, information flow, prompts, agents, materials, and handoff points.",
      },
      {
        title: "Deliver",
        text: "Ship a practical output: guide, program structure, personal workflow, or internal AI system.",
      },
      {
        title: "Iterate",
        text: "Use feedback from builders, learners, teams, or daily operations to make the system stronger.",
      },
    ],
    aboutEyebrow: "",
    aboutTitle: "",
    aboutText: "",
    contactEyebrow: "Contact",
    contactTitle:
      "If you need DevRel assets, program design, a personal AI workflow, or a custom AI-native business system, send me a short note.",
    contactIntro:
      "I work across AI x Web3 product experiments, DevRel, ecosystem programs, and AI workflow design. Tell me what your team is building, what process is stuck, and what you want to ship in the next few weeks.",
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
        href: pilotMailto,
        icon: "email",
      },
    ],
    contactNote:
      "For custom AI workflow systems, scope and pricing should be confirmed after a short discovery conversation.",
    quickLinks: [
      { label: "Telegram", href: profile.links.telegram, icon: "telegram" },
      { label: "X", href: profile.links.x, icon: "x" },
      { label: "GitHub", href: profile.links.github, icon: "github" },
      { label: "Email", href: pilotMailto, icon: "email" },
    ],
  },
  zh: {
    pageTitle: `${profile.name} | ${profile.positioning.zh}`,
    availability: profile.badge.zh,
    heroKicker: profile.positioning.zh,
    heroTitle: "把工作流、生态项目和 Web3 想法变成真正可用的 AI 原生系统。",
    heroIntro:
      "我和 Web3 团队、生态项目、创始人与业务操作者合作，帮助他们把开发者关系资产、项目结构和 AI 工作流做得更清楚、更可执行。",
    primaryCta: "讨论企业 AI 工作流定制",
    primaryCtaHref: pilotMailto,
    secondaryCta: "查看服务包",
    secondaryCtaHref: "#services",
    heroCardLabel: "适合的合作场景",
    heroCardTitle: "当技术方向需要结构、采用路径或工作流时，我通常最有价值。",
    heroCardList: [
      "产品很技术，但开发者还不知道怎么理解和上手。",
      "生态项目有合作方、学员或赞助方，但结构和执行节奏需要收敛。",
      "个人或团队流程已经重复到足够值得做成 AI 工作流系统。",
    ],
    servicesEyebrow: "服务",
    servicesTitle: "四种合作方式",
    servicesIntro:
      "可以从一个聚焦的短周期合作开始；如果流程已经足够高价值，也可以进一步设计企业定制 AI 原生工作流系统。",
    services: [
      {
        title: "开发者关系与开发者教育支持",
        meta: "适合协议、基础设施和开发者工具团队",
        pills: ["开发者关系", "3-7 天短周期"],
        description:
          "把技术深度转化成开发者能理解、能尝试、能传播的材料。",
        bullets: [
          "产品定位、发布叙事和面向开发者的表达",
          "指南、workshop 大纲、开发者上手路径或技术内容规划",
          "审阅和重写现有材料，让产品更容易被开发者采用",
        ],
        footer: "适合产品已经有了，但开发者路径还不够清楚",
      },
      {
        title: "黑客松与生态项目支持",
        meta: "适合共学项目、黑客松和生态项目团队",
        pills: ["项目设计", "多周支持"],
        description:
          "设计能把课程、合作方、挑战赛和社群运营接起来的开发者项目。",
        bullets: [
          "项目结构、课程流程、挑战赛设计和学员指南",
          "合作方 / 赞助方内容边界判断和 workshop 匹配",
          "社群支持机制、双语材料和项目结束后的沉淀资产",
        ],
        footer: "适合生态目标需要结构化推进和执行节奏",
      },
      {
        title: "个人 AI 工作流系统",
        meta: "适合创始人、商务拓展、研究员、内容创作者和独立工作者",
        pills: ["个人系统", "1-2 周搭建"],
        description:
          "围绕一个人的信息流、判断和重复工作，搭建可长期使用的 AI 工作流系统。",
        bullets: [
          "梳理研究、客户关系管理、内容、会议和跟进等核心工作流",
          "设计提示词 / AI 智能体流程、知识库、自动化和使用指南",
          "搭建一个不需要完整工程团队也能长期维护的实用系统",
        ],
        footer: "适合一个人的工作很高价值，但信息和流程太碎",
      },
      {
        title: "企业定制 AI 原生工作流系统",
        meta: "适合有高价值重复流程的团队和企业",
        pills: ["企业定制", "需求诊断后定范围"],
        featured: true,
        description:
          "把重复业务流程改造成团队、项目或企业内部可持续运行的 AI 原生工作流系统。",
        bullets: [
          "业务诊断、工作流架构和 AI 原生系统设计",
          "AI 智能体工作流、内部工具、知识库和团队交接",
          "围绕商务拓展、交易流程、社群运营、研究或客户流程持续迭代",
        ],
        footer: "适合某个流程已经足够重要，值得投入定制系统",
      },
    ],
    proofEyebrow: "项目案例",
    proofTitle: "围绕 AI 智能体、开发者关系、教育和生态工作的项目证明",
    proofIntro:
      "这些项目共同指向同一件事：把技术想法、开发者理解、合作方资源和 AI 原生工作流接起来。",
    proofItems: [
      {
        label: "Agentic Commerce（智能体商业）",
        title: "DealAgent",
        description:
          "联合创始人。DealAgent 是一个面向交易和智能体商业场景的对话式 AI 工作流原型。",
        stat: "香港 The Scaling Summit AI Agent Demo Day 获奖项目。",
        actions: [
          { label: "X", href: profile.links.dealAgentX },
          { label: "演示视频", href: profile.links.dealAgentDemo },
          { label: "获奖记录", href: profile.links.dealAgentAward },
        ],
      },
      {
        label: "生态项目",
        title: "AI x Web3 School",
        description:
          "核心策划与执行成员，覆盖课程结构设计、合作方协调、社区运营、学员支持、双语指南、黑客松赛道设计和开发者关系内容。",
        stat: "把技术方向、合作方资源和学员理解接起来，推进成面向开发者的学习与实践项目。",
        actions: [
          { label: "官网", href: profile.links.aiWeb3School },
          { label: "X", href: profile.links.aiWeb3SchoolX },
        ],
      },
      {
        label: "生态讨论",
        title: "ERC-8183 / ERC-8004 / Agent Commerce",
        description:
          "主持并参与围绕智能体商业、可追责的智能体工作流、x402 和 AI 原生 Web3 系统的讨论和内容输出。",
        stat: "重点是协议解读、开发者教育和生态采用。",
        actions: [
          { label: "主持讨论", href: profile.links.ercDiscussion },
          { label: "中文解读", href: profile.links.ercExplainer },
        ],
      },
      {
        label: "开发者教育",
        title: profile.mainProject.name,
        description:
          "一个帮助用户以更交互方式学习 Ethereum standards 的开发者教育产品。",
        stat: "围绕开发者上手、生态叙事和 EIP 学习设计。",
        actions: [{ label: "查看 GitHub", href: profile.links.project }],
      },
    ],
    trustEyebrow: "合作流程",
    trustTitle: "先诊断，再设计，最后交付可用的东西",
    trustIntro:
      "我会先把流程和目标收敛清楚，再设计工作流、材料或系统，最后从真实使用中继续迭代。",
    trustItems: [
      {
        title: "Diagnose",
        text: "先确认用户、流程、瓶颈和成功标准，而不是一上来堆工具。",
      },
      {
        title: "Design",
        text: "梳理工作流、信息流、提示词、AI 智能体、材料和交接节点。",
      },
      {
        title: "Deliver",
        text: "交付一个具体可用的结果：指南、项目结构、个人工作流或内部 AI 系统。",
      },
      {
        title: "Iterate",
        text: "基于开发者、学员、团队或日常运营反馈继续优化系统。",
      },
    ],
    aboutEyebrow: "",
    aboutTitle: "",
    aboutText: "",
    contactEyebrow: "联系",
    contactTitle: "如果你需要开发者关系资产、生态项目设计、个人 AI 工作流或企业 AI 原生业务系统，可以直接联系我。",
    contactIntro:
      "我长期在 AI x Web3 产品实验、开发者关系、生态项目和 AI 工作流设计之间工作。你可以简单说明团队在做什么、当前卡住的流程是什么，以及接下来几周希望交付什么。",
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
        href: pilotMailto,
        icon: "email",
      },
    ],
    contactNote:
      "企业定制 AI 工作流系统的范围和价格建议在一次简短需求诊断后确认。",
    quickLinks: [
      { label: "Telegram", href: profile.links.telegram, icon: "telegram" },
      { label: "X", href: profile.links.x, icon: "x" },
      { label: "GitHub", href: profile.links.github, icon: "github" },
      { label: "邮箱", href: pilotMailto, icon: "email" },
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
    card.className = item.featured
      ? "service-card service-card-featured"
      : "service-card";

    const meta = document.createElement("p");
    meta.className = "service-meta";
    meta.textContent = item.meta;

    const title = document.createElement("h3");
    title.className = "service-title";
    title.textContent = item.title;

    const description = document.createElement("p");
    description.className = "service-description";
    description.textContent = item.description;

    const pillRow = document.createElement("div");
    pillRow.className = "service-pill-row";
    (item.pills ?? []).forEach((pill) => {
      const pillNode = document.createElement("span");
      pillNode.className = "service-pill";
      pillNode.textContent = pill;
      pillRow.append(pillNode);
    });

    const list = document.createElement("ul");
    list.className = "service-list";
    item.bullets.forEach((bullet) => list.append(createListItem(bullet)));

    const footer = document.createElement("p");
    footer.className = "service-footer";
    footer.textContent = item.footer;

    card.append(meta, title, description);
    if (pillRow.children.length) card.append(pillRow);
    card.append(list, footer);
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

    const actions = item.actions ??
      (item.actionHref && item.actionLabel
        ? [{ label: item.actionLabel, href: item.actionHref }]
        : []);

    if (actions.length) {
      const actionsRow = document.createElement("div");
      actionsRow.className = "proof-actions";
      actions.forEach(({ label, href }) => {
        const action = document.createElement("a");
        action.className = "proof-link";
        action.href = href;
        action.target = "_blank";
        action.rel = "noreferrer";
        action.textContent = label;
        actionsRow.append(action);
      });
      card.append(actionsRow);
    } else if (item.actionHref && item.actionLabel) {
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

  textTargets.primaryCta.href = content.primaryCtaHref ?? "#contact";
  textTargets.secondaryCta.href = content.secondaryCtaHref ?? "#services";
  [textTargets.primaryCta, textTargets.secondaryCta].forEach((link) => {
    const href = link.getAttribute("href") ?? "";
    if (href.startsWith("http")) {
      link.target = "_blank";
      link.rel = "noreferrer";
    } else {
      link.removeAttribute("target");
      link.removeAttribute("rel");
    }
  });

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
