function setFontPathWithEnv(){
    if(document.referrer.includes("http://127.0.0.1") || document.referrer == ''){
        setFontFace("千里之行楷","/assets/css/fonts/QianLiZhiXingKai-2.woff")
    } else {
        setFontFace("千里之行楷","https://lingyuncdn.rth1.app/QianLiZhiXingKai-2.woff")
    }
}

function setFontFace(fontName, srcPath) {
    var newStyle = document.createElement('style');
    newStyle.appendChild(document.createTextNode("\
    @font-face {\
        font-family: " + fontName + ";\
        src: url('" + srcPath + "');\
    }\
    "));
    document.head.appendChild(newStyle);
}

setFontPathWithEnv();