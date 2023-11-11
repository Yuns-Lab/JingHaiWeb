window.onload = function() {
    // 页面内容初始化函数
    setFontPathWithEnv()
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
    const navbar = document.getElementById('navbar')
    const back_to_top = document.getElementById('back-to-top')
    window.onscroll = function() {
        // 当页面垂直滚动距离大于1009px时
        if (window.scrollY > 1000) {
            navbar.style.opacity = 1
            back_to_top.setAttribute('mode','show')
        } else {
            navbar.style.opacity = 0
            back_to_top.setAttribute('mode','hide')
        }
    };
}