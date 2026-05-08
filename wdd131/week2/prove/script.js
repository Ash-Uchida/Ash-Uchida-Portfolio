const button = document.querySelector(".menu_btn");
const nav = document.querySelector("nav");

button.onclick = function(){
    if (nav.classList.contains("show")){
        nav.classList.remove("show");
    }
    else{
        nav.classList.add("show");
    }
}

window.addEventListener('resize', ()=>{
    if (window.innerWidth >=700){
        nav.classList.remove('show')
    }
})



// I tried this but it wasn't working properly
// button.addEventListener('click', ()=> {
//     nav.classList.add('show');
// });