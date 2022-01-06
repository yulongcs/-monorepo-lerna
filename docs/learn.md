---
order: 1
title: 搭建步骤
---

1. 初始化 lerna

```
lerna init
```

2. 安装 lerna-changelog

```
yarn add lerna-changelog -D
```

#### 使用步骤

- 从 master 分支切换出 feature/bugfix 等分支，参考 git-flow。
- 完成开发后进行 commit，推荐使用 commitizen 来规范 commit msg，同时有助于对后续子项目生成 changelog。
- 将新分支 push 到 remote 端。
- 创建 pr，并打上 label，此处一定要打上 label，learn-changelog 就是根据 label 来确定该 pr 属于 feature/bugfix/document 等。
- 切记要在 merge 之前打上 label。
- 进行 merge pr 操作。
- 本地切换到 master 分支并进行 pull 操作。
- 执行 lerna-changelog，既可得到一份 changeling。

#### 配置 script 命令

```
"build": "lerna run build",
"clean": "lerna clean -y",
"changelog": "lerna-changelog",
```

3. 安装 dumi

```
npx @umijs/create-dumi-app
```

- 1. 编写首页信息，docs/index.md
- 2. 修改站点信息，.umirc.ts
- 3. 配置 script 命令

```
"start": "dumi dev",
"prettier": "prettier -c --write \"docs/**/*\" \"packages/**/*\""
```

4. 配置 msfu, esbuild

```
yarn add @umijs/plugin-esbuild -D
```

- 在.umirc.ts 文件中，添加 msfu, esbuild 配置
