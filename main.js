var changecolor = document.getElementById("heading");
window.onscroll = function () {
    changeFunction();
};

function changeFunction() {
    if (document.documentElement.scrollTop > 535) {
        changecolor.style.background = "white";
    } 
    else {
        changecolor.style.background = "none";
    }
}



// var abc = document.getElementById("change-color")
// window.onscroll = {
//     changeabc();
// };
// function changeabc(){
//     if (document.documentElement.scrollTop > 535){
//             abc.style.color = "black"
//         }
//         else{
//             abc.style.color = "white"
//         }
// }









