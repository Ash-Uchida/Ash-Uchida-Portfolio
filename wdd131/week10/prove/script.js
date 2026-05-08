const recipes = [
  {
        name: "Apple Crisp",
        imgSrc:"images/apple-crisp.jpg",
        imgAlt: "Image of Apple Crisp",
        tags: ["dessert"],
        rating: "⭐⭐⭐⭐",
        description:"This apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream.",
  },
  {
        name: "Black Beans and Rice",
        imgSrc: "images/black-beans-and-rice.jpg",
        imgAlt: "Image of a bowl of black beans and rice with cilantro",
        tags: ["dinner", "vegetarian"],
        rating: "⭐⭐⭐",
        description: "A flavorful and budget-friendly staple, this recipe combines seasoned black beans with fluffy white rice and fresh lime."
    },
    {
        name: "Chicken Curry",
        imgSrc: "images/chicken-curry.webp",
        imgAlt: "A bowl of rich, orange chicken curry topped with fresh cilantro",
        tags: ["dinner", "spicy"],
        rating: "⭐⭐⭐⭐⭐",
        description: "This easy coconut chicken curry is packed with flavor and warm spices. It's the perfect 30-minute weeknight meal."
    },
    {
        name: "Chocolate Chip Cookies",
        imgSrc: "images/chocolate-chip-cookies.jpg",
        imgAlt: "A stack of warm chocolate chip cookies with melting chocolate",
        tags: ["dessert", "classic"],
        rating: "⭐⭐⭐⭐",
        description: "These chewy, buttery cookies are loaded with semi-sweet chocolate chips and have perfectly crisp edges."
    },
    {
        name: "Creamy Garlic Chicken",
        imgSrc: "images/Creamy-garlic-chicken.webp",
        imgAlt: "Pan-seared chicken breasts in a rich white cream and mushroom sauce",
        tags: ["dinner", "french"],
        rating: "⭐⭐⭐",
        description: "Tender chicken breasts simmered in a silky cream sauce with mushrooms and a hint of garlic. A true French bistro classic."
    },
    {
        name: "German Gooseberry Cake",
        imgSrc: "images/german-gooseberry-cake.jpg",
        imgAlt: "A slice of German cake with tart green gooseberries and a golden meringue topping",
        tags: ["dessert", "german", "baking"],
        rating: "⭐⭐⭐⭐",
        description: "A traditional 'Stachelbeerkuchen' that perfectly balances tart green gooseberries with a sweet, buttery crust and creamy topping."
    },
    {
        name: "Roasted Potatoes",
        imgSrc: "images/roasted-potatoes.webp",
        imgAlt: "Golden brown roasted potato wedges with rosemary and sea salt",
        tags: ["side dish", "vegan", "classic"],
        rating: "⭐⭐⭐",
        description: "Perfectly crispy on the outside and fluffy on the inside, these potatoes are tossed with olive oil, garlic, and fresh rosemary."
    },
    {
        name: "Borscht",
        imgSrc: "images/borscht.webp",
        imgAlt: "A bowl of vibrant red beet soup topped with a dollop of sour cream and fresh dill",
        tags: ["soup", "dinner", "healthy"],
        rating: "⭐⭐⭐⭐⭐",
        description: "This traditional Eastern European beet soup is hearty, savory, and perfectly balanced with a touch of acidity and creamy sour cream."
  }
];


document.querySelector("#recipe").addEventListener('keydown', (e) =>{
    if (e.key === "Enter"){
        searchFilter();
    }
});

let main = document.querySelector("main")
    

//this is where the magic happens
function searchFilter(){
  const userInput = document.querySelector('#recipe').value.toLowerCase();

  const results = recipes.filter((key) => {
    const nameMatch = key.name.toLowerCase().includes(userInput);
    const tagMatch = key.tags.some((tag) => tag.toLowerCase().includes(userInput));
    const descMatch = key.description.toLowerCase().includes(userInput);
    return nameMatch ||descMatch ||tagMatch;
  
  })
  

  //now replace everything with results
  main.innerHTML= ""

  results.forEach((recipe) => {
    let tagBtn = "";
    recipe.tags.forEach((tag) => {tagBtn += `<button>${tag}</button>`})

    main.innerHTML += `
        <article class="recipe-card">
            <img src="${recipe.imgSrc}" alt="${recipe.imgAlt}">
            <div class="hike-tags">
                ${tagBtn}
            </div>
            <h2>${recipe.name}</h2>

            <span class="rating" role="img" aria-label="Rating: ${recipe.rating.length} out of 5">${recipe.rating}</span>

            <p>${recipe.description}</p>
        </article>
    `;
  });

}