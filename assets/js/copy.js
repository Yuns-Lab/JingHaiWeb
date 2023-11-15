function copyText(type){
    const typeArray = {
        // 群聊部分
        "jhshq":"743906263", // 京海审核群
        "jhzq":"821634700", // 京海主群
        // 私聊部分
        "LingyunAwA-qq":"1913532130",
        "LingyunAwA-wx":"jhly1015",
        "EDG":"546031474",
        "laosun":"340362851",
        "MC_Chuming":"1498869817",
        "HuanJunmo":"3194077491",
    }
    const textForCopy = typeArray[type];
    const element = document.querySelector(`#${type} .after`)
    navigator.clipboard.writeText(textForCopy);
    element.innerHTML = "已复制";
    setTimeout(() => {
        element.innerHTML = "点击复制";
    }, 1000)
}

function openPage(type){
    const typeArray = {
        "jhdiscord":"https://discord.gg/xZ654hAE75", // JingHai Discord
        "lyBilibili":"https://live.bilibili.com/27726467", // LingyunAwA B站直播间
        "lyHuya":"https://huya.com/lingyunawa" // LingyunAwA 虎牙直播间
    }
    window.open(typeArray[type])
}