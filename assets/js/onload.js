window.onload = function() {
    // 页面内容初始化函数
    editTitle()
    scrollToTop()
    // 加载结束后等待 1~3s 设置加载动画不可见
    setTimeout(() => {
        document.getElementById('page-loading').style.opacity = 0
        setTimeout(() => {
            document.getElementById('page-loading').style.display = 'none'
            document.body.style.overflow = 'auto';
        }, 500)
    }, Math.random() / 3 * 10 * 1000)
}