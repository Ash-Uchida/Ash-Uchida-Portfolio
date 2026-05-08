
function addStars(span){
    const stars = span.innerText.length;
    span.setAttribute('aria-label',`${stars} out of 5 stars`)
}

// read backwards, want all span, thats a p,and a articale in the movie, scinece its a class we use ., so it if was a id we use #
const spans = document.querySelectorAll('article.movie p span');

// for every item in the list it will call the addStars function
// can't use break or stop in the for each loops, you have to go through every single thing in the list
//spans.forEach(addStars) 

// heres another way to use the loop
// use this if you want to mess with the condions, starting index or how much you want to increment
for(let i = 0; i < spans.length; i++){
    addStars(spans[i]);
}


// __________________________________________________________________________
// but the eaiser way is to do this: 
const ratingElems = document.querySelectorAll('article.movie p span');
ratingElems.forEach((elem) => {
    const rating = elem.innerText.length;
    elem.setAttribute('aria-label', `${rating} out of 5 stars`);

})

// to check if it worked type this into the console
// document.querySelector('article.movie p span').getAttribute('aria-label');
// to check the second rating:
// document.querySelectorAll('article.movie p span')[1].getAttribute('aria-label');

// this makes it accessable by telling the users whats the ratings are cause the screen reader prob can't do that for star emoji's