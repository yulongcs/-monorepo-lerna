1. 初始化lerna
```
lerna init
```

2. 安装lerna-changelog
```
yarn add lerna-changelog -D
```
#### 使用步骤
- 从master分支切换出feature/bugfix等分支，参考git-flow。
- 完成开发后进行commit，推荐使用commitizen来规范commit msg，同时有助于对后续子项目生成changelog。
- 将新分支push到remote端。
- 创建pr，并打上label，此处一定要打上label，learn-changelog就是根据label来确定该pr属于feature/bugfix/document等。
- 切记要在merge之前打上label。
- 进行merge pr操作。
- 本地切换到master分支并进行pull操作。
- 执行lerna-changelog，既可得到一份changeling。

#### 配置script命令
"build": "lerna run build",
"clean": "lerna clean -y",
"changelog": "lerna-changelog",
