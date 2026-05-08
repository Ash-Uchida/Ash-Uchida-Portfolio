
// first select the varible: let, whatever name = , document represents my entire page: DOM, this is a method: querySelector, # means looking for a ID, <select id="theme-select">
let selectElem = document.querySelector('#theme-select');
 
// this is selecting the <bod> tag
let pageContent = document.querySelector('body');

// adding a event listener for this varible I made, usally uses 'click' but we used 'change', calls the function thats definded below, but we didn't add the (), because we don't want it to run right now
selectElem.addEventListener('change', changeTheme);

// this is the function that will be called to the event listener
function changeTheme() {
    // we are making a varible for when selectElem is clicked, like When a user clicks "Ocean" on the screen, selectElem.value becomes the string "ocean", this is what we have in the html: <option value="ocean">Ocean</option>
    let current = selectElem.value;

    if (current === 'ocean') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/ocean.jpg')";
        pageContent.style.fontFamily = "Papyrus, fantasy";

    } else if (current === 'forest') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/forest.jpg')";
        pageContent.style.fontFamily = "Impact, sans-serif";

    } else if (current === 'desert') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/desert.jpg')";
        pageContent.style.fontFamily = "'Big Caslon', serif";
        
    } else {
        // default
        document.body.style.backgroundImage = "none";
        pageContent.style.fontFamily = "Georgia, serif";
    }
}

          