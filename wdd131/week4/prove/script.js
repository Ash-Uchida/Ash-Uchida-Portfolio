const button = document.querySelector(".menu_btn");
const nav = document.querySelector("nav");
const img = document.querySelector("#img");

// ------the modale thingy---------
const gallery = document.querySelector("#images");
const modal = document.querySelector("dialog");
const modalImage = modal.querySelector("img");
const closeButton = modal.querySelector(".close-viewer");
// ---------------------------------


button.addEventListener('click', function(){
    button.classList.toggle('open')
    nav.classList.toggle('show')
})

// --------------click to make big pic----------
gallery.addEventListener('click', openModal);

function openModal(e){
    if(e.target.tagName != 'IMG'){
        console.log("skip");
        return;
    }
    modalImage.src = e.target.src.replace("cool_pic.png", "big_pic.png");
    modal.showModal();

    // modal.style.display = 'block'
    // but if do this we need to then add a close modal which is the exact same function but disply:none
}

closeButton.addEventListener("click", () =>{
    modal.close();
})

modal.addEventListener("click",(event) =>{
    if (event.target === modal){
        modal.close();
    }
} )
// ---------------------------------------------




window.addEventListener('resize', function(){
    const width = this.window.innerWidth;
    if (width >= 890 ){
        button.classList.remove('open')
        nav.classList.remove('show')
    }
})


