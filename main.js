var changecolor = document.querySelector(".header-container");
window.onscroll = function () {
    changeFunction();
};
var list = document.querySelectorAll(".collumn-2 div a")

function changeFunction() {
    if (document.documentElement.scrollTop > 350) {
        changecolor.style.background = "white";
        
        list.forEach(item=>{
            item.style.color="black"
        })
    } 
    else {
        changecolor.style.background = "transparent";
        list.forEach(item=>{
            item.style.color="white"
        })
    }
}



console.log(changecolor)




