# Personal Link Page

一个可直接发布到 GitHub Pages 的双语一页式个人服务页，适合放在 `X / Telegram / GitHub / 活动自我介绍` 里作为主链接。

## Files

- `index.html`: 页面结构
- `styles.css`: 样式
- `app.js`: 双语文案、个人信息、链接配置

## What To Edit First

先改 `～/PersonalPage/app.js` 顶部这部分：

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

## GitHub Pages

这个仓库已经适合按分支直接发布：

1. 打开仓库 `Settings`
2. 进入 `Pages`
3. 在 `Build and deployment` 里选择 `Deploy from a branch`
4. Branch 选 `main`
5. Folder 选 `/(root)`
6. 保存后等待 GitHub Pages 发布

默认项目页地址会是：

`https://swen-chan.github.io/PersonalPage/`

仓库根目录的 `.nojekyll` 已经加好了，这样 GitHub Pages 会直接发布静态文件。
