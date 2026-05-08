// we need to hide the dropdown menu when it gets bigger
// make the dropdown menu button clickable


const button = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

button.onclick = function(){
    if (nav.classList.contains("show")){
        nav.classList.remove("show");
    }
    else{
        nav.classList.add("show")
    }
}


// simplier example to do what I did

// TEACHER EXAMPLE make sure to include lines 5 and 6
// button.addEventListener('click', () => {
//     nav.classList.add('active');
// });


// this is just to automaticlly close the window TEACH EXAMPLE
// the downside is that it would take much longer to load complicated sites

// window.addEventListener('resize', () =>{
//     if (window.innerWidth >= 700){
//         nav.classList.remove('active')
//     }
// })

// ================================================================

// const button = document.querySelector(".menu-btn");
// button.addEventListener('click', function(){
//     button.classList.toggle('open')
// })

// this resizes the screen
// window.addEventListener('resize', function(){
//     const width = this.window.innerWidth;
//     if(width >= 700){
//         button.classList.remove('open');
//     }
// })

