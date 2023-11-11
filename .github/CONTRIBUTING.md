## 贡献指南

#### Part 1: 如何向我们贡献你的代码

1. 首先，你需要一个 Github 账户
2. 之后，来到仓库页面，点击右上角的 Fork 按钮
3. 创建一个仓库副本在你的账户上
4. 提交你想更改的代码到你的副本仓库
5. 来到我们的 [Pull Request 页面](https://github.com/Yuns-Lab/JingHaiWeb/pulls)，点击 New pull requests
6. 选择从你的副本仓库合并到我们的主仓库
7. 填写 Pull Request 标题和描述
8. ~~签署 CLA~~（此项暂无，我们还未设置仓库的 CLA）
9. 点击 Create Pull Request 按钮
10. 等待我们处理 Pull Request

#### Part 2: 注意事项

1. 请尽量使用我们的代码风格，或使用代码格式化工具

    > [!NOTE]
    >- 我们默认使用 4 空格缩进
    >- 通常文件的名字是和其实现功能有关

2. 命名规范
    > [!NOTE]
    >- 文件名：使用小写字母，单词之间使用下划线 `_` 连接
    >- HTML class/id 名：使用小写字母，单词之间使用短横线 `-` 连接
    >- JS中：
    >    \- 变量名：使用小写字母，单词之间使用下划线 `_` 连接
    >    \- 函数名：使用驼峰命名法

3. 特别注意事项
    > [!IMPORTANT]
    >
    > 你通常不应当直接修改 `assets/css/*.css` 文件，而是修改其中的 `*.less` 文件后由插件编译
    >
    > VSCode less编译插件名字：**Easy Less**，其他 IDE 请自行寻找等效插件