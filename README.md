## JingHai 网站源码仓库

这里提供了 JingHai 网站绝大多数的源码，包括 HTML CSS JS 图片等

如果你有兴趣，欢迎一起来开发，前提是你(即将)是京海公会的一员

加入我们的方式请查看网站中的“联系”一部分

---

**代码结构解释：**

- [`index.html`](blob/main/index.html)：网页主 HTML 文件
- [`assets/css`](blob/main/assets/css)：网页样式文件：
  - [`fonts`](/blob/main/assets/css/fonts): 网页字体文件
  - `*.css`：网页样式文件，由 VSCode 插件自动生成
  - `*.less`：网页样式文件源
- [`assets/js`](blob/main/assets/js)：网页脚本文件
- [`assets/img`](blob/main/assets/img)：网页图片文件

> [!IMPORTANT]
> 你通常不应当直接修改 `assets/css/*.css` 文件，而是修改其中的 `*.less` 文件后由插件编译
>
> VSCode less编译插件名字：**Easy Less**