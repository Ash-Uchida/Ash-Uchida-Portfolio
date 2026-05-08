
const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	}
];
                

const booksList = document.getElementById('book-list');

articles.forEach((book) => {

    const article = document.createElement('article');
    article.classList.add('book-info');
    article.id = `book-info-${book.id}`;

    article.innerHTML = `
        <p><strong>Release Date:</strong> ${book.date}</p>
        <p><strong>Recommended Age:</strong> ${book.ages}</p>
        <p><strong>Genre:</strong> ${book.genre}</p>
        <p><strong>Rating:</strong> <span aria-label=" ${book.stars.length} out of 5 stars">${book.stars}</span></p>
    `;

    const article2 = document.createElement('article2');
    article2.classList.add('book-img');
    article2.id = `book-img-${book.id}`;

    article2.innerHTML = `
        <h2>${book.title}</h2>
        <img src=${book.imgSrc} alt=${book.imgAlt}>
        <p id='desc'>${book.description}</p>
    `;

    booksList.append(article,article2);
    
});



//    <article class="book-info">
//         <p class="date">July 5, 2022</p>
//         <p class="ages">10-14</p>
//         <p class="genre">Fantasy</p>
//         <p class="rating"><span>⭐⭐⭐⭐⭐</span></p>
//     </article>
//     <article class="book-img">
//         <h2>Septimus Heap Book One: Magyk</h2>
//         <img src="book.png" alt="The book cover with Angie Sage as the author">
//         <p>If you enjoy stories about seventh sons of seventh sons nd magyk this is the book for you</p>

//     </article> 