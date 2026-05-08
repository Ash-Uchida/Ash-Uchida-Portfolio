
let choose = document.querySelector('#theme');
let page = document.querySelector('body');
let logo = document.getElementById("logo2");

choose.addEventListener('change', changeTheme);

function changeTheme(){
    let current = choose.value;

    if (current === 'Dark'){
        document.querySelector(".blue").style.color = "#9c6dd0";
        document.querySelector("body").style.color = "white";
        page.style.backgroundColor = "black";
        logo.style.display = 'none';
    }
    else {
        document.querySelector(".blue").style.color = "#487aaa";
        document.querySelector("body").style.color = "black";
        page.style.backgroundColor = "white";
        logo.style.display = 'block';
    }
}
