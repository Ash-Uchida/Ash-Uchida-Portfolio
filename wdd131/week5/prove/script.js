// add aria label for stars
const theRating = document.querySelectorAll('article.book-info p span');
theRating.forEach((i)=> {
    const rating = i.innerHTML.length;
    i.setAttribute('aria-label',`${rating} out of 5 stars`)
})