// Main: EditTitle - Funciton
function EditTitle(){
    var title_name = getTimeText()
    if (localStorage.getItem("username") != null || new Date().getHours() >= 23 || new Date().getHours() < 6){
        document.title = title_name;
        setTimeout(() => {
            document.title = "欢迎访问京海公会网站"
        }, 2500);
    } else {
        document.title = "欢迎访问京海公会网站"
    }
}

// Main: EditClockText - Function
function EditClockText(){
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    const repair = {0:"00",1:"01",2:"02",3:"03",4:"04",5:"05",6:"06",7:"07",8:"08",9:'09'}
    if (hour < 10){ hour = repair[hour] }
    if (minute < 10){ minute = repair[minute] }
    if (second < 10){ second = repair[second] }
    document.querySelector("#clock-text").innerHTML = hour + ":" + minute + ":" + second
}

// Get Hour Now - Function
function getHourNow(){
    const now = new Date();
    if (localStorage.getItem("hour") != null){
        const hour = localStorage.getItem("hour") // debug
        return hour
    } else {
        const hour = now.getHours();
        return hour
    }
}

// Make Time+Username & setElementsStyle - Function
function getTimeText(){
    const hour = getHourNow()
    const time_css = document.getElementById("time-css")
    if (hour >= 23 || hour < 6){
        var TimeText = "夜已深，记得休息哦";
        time_css.setAttribute("href","/assets/css/23.css")
    } else if (hour >= 6 && hour < 8){
        var TimeText = "早上好, " + localStorage.getItem("username");
        time_css.setAttribute("href","/assets/css/6.css")
    } else if (hour >= 8 && hour < 12){
        var TimeText = "上午好, " + localStorage.getItem("username");
        time_css.setAttribute("href","/assets/css/8.css")
    } else if (hour >= 12 && hour < 14){
        var TimeText = "中午好, " + localStorage.getItem("username");
        time_css.setAttribute("href","/assets/css/12.css")
    } else if (hour >= 14 && hour < 16){
        var TimeText = "下午好, " + localStorage.getItem("username");
        time_css.setAttribute("href","/assets/css/14.css")
    } else if (hour >= 16 && hour < 18){
        var TimeText = "傍晚好, " + localStorage.getItem("username");
        time_css.setAttribute("href","/assets/css/16.css")
    } else if (hour >= 18 && hour < 23){
        var TimeText = "晚上好, " + localStorage.getItem("username");
        time_css.setAttribute("href","/assets/css/18.css")
    }
    return TimeText;
}

// Repeat - Function
function editTitle(){
    EditTitle()
    EditClockText()
    setInterval(() => {
        EditTitle()
    }, 5000)
    setInterval(() => {
        EditClockText()
    },500)
}