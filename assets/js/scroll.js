function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

function scrollToKnownCommunity(){
    document.getElementById("know-community").scrollIntoView({behavior: 'smooth'})
}

function scrollToBuilding(){
    document.getElementById("building").scrollIntoView({behavior: 'smooth'})
}

function scrollToNews(){
    document.getElementById("news").scrollIntoView({behavior: 'smooth'})
}

function scrollToConnectUs(){
    document.getElementById("connect-us").scrollIntoView({behavior: 'smooth'})
}