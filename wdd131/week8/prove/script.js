
let levelElement = document.querySelector('.level');
let healthElement = document.querySelector('.health');
let diedElement = document.querySelector('img');

let level = 5;
let health = 500;

function attack(){
    if (health != 0) {
        health -= 50; 
        healthElement.textContent = health;
    }
    else {
        console.log('You died');
        diedElement.src = 'died.png';
    }

}
function levelUp(){
    if(health != 0){
        level += 1;
        levelElement.textContent = level;
    }
    
}


document.querySelector("#attack").addEventListener("click", attack);
       
document.querySelector("#level").addEventListener("click", levelUp);

