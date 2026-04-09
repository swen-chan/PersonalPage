# Personal Link Page

一个可直接发布的双语一页式个人服务页，适合放在 `X / Telegram / GitHub / 活动自我介绍` 里作为主链接。

## Files

- `index.html`: 页面结构
- `styles.css`: 样式
- `app.js`: 双语文案、个人信息、链接配置

## What To Edit First

先改 `/Users/Zhuanz/personal-linkpage/app.js` 顶部这部分：

```js
const profile = {
  name: "Your Name",
  positioning: {
    en: "AI x Web3 Builder & DevRel",
    zh: "AI x Web3 Builder & DevRel",
  },
  valueProp: {
    en: "Your English value proposition",
    zh: "你的中文价值主张",
  },
  badge: {
    en: "Open to remote roles, collaborations and consulting",
    zh: "开放远程岗位、合作与顾问机会",
  },
  email: "you@example.com",
  links: {
    telegram: "https://t.me/yourhandle",
    x: "https://x.com/yourhandle",
    github: "https://github.com/yourhandle",
    calendar: "",
    project: "https://github.com/your/project",
  },
  mainProject: {
    name: "Your Project Name",
  },
};
```

然后继续替换：

- `services`
- `proofItems`
- `aboutText`
- `contactTitle`
- `contactIntro`

## Local Preview

在当前目录运行：

```bash
python3 -m http.server 8080
```

然后打开 `http://localhost:8080`

## Deploy

最省事的做法：

1. 新建一个 GitHub 仓库
2. 上传这 4 个文件
3. 打开 GitHub Pages
4. 选择从根目录发布

也可以直接丢到任何静态托管服务。
