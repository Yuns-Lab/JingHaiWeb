window.onload = function() {
    // 页面内容初始化函数
    editTitle()
    editNavbar()
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

function editNavbar(){
    window.onscroll = function() {
        // 当页面垂直滚动距离大于1009px时
        if (window.scrollY > 1000) {
            document.getElementById('navbar').style.opacity = 1
        } else {
            document.getElementById('navbar').style.opacity = 0
        }
    };
}