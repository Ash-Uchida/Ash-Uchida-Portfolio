const button = document.querySelector(".menu-btn");
const nav = document.querySelector("nav")

button.addEventListener('click', function(){
    button.classList.toggle('open')
    nav.classList.toggle('show')
})

// this adjusts the screen size
window.addEventListener('resize', function(){
    const width = this.window.innerWidth;
    if(width >= 700){
        button.classList.remove('open');
        nav.classList.remove('show')
    }
})
