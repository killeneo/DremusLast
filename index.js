let dr = document.getElementById("dr")
let wood = document.getElementById("wood")
const header = document.getElementById("header")
const handler = (event) => {
    dr.style.fontSize = 500-window.scrollY/2 + "px"
}

window.addEventListener("scroll",handler)
const woodScroll = (event) => {
    wood.style.borderRadius = 500-window.scrollY + "px"
}
window.addEventListener("scroll",woodScroll)

const headScroll = (event) => {
    if(window.scrollY > 1000){
        header.style.position = "fixed"
        header.style.display = "block"
    }
    else{
        header.style.display = "none"
    }
}
window.addEventListener("scroll",headScroll)

const logoScroll = (event) => {
    if(window.scrollY > 950){
        dr.style.display = "none"
    }
    else{
        dr.style.display = "block"
    }
}
window.addEventListener("scroll",logoScroll)