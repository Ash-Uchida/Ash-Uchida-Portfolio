
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