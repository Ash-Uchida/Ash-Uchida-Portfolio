const jumbledLetters = ['e','l,','d','y','o','h','I'];

jumbledLetters.sort((a,b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if(a < b){
        return -1;
    }
    else if (a > b){
        return 1;
    }
    return 0;
});

// console.log(jumbledLetters.join(" , "));


// --------------
const bookChapters = [
    { name: 'Omni', chapters: 1 },
    { name: 'Genesis', chapters: 50 },
    { name: 'Exodus', chapters: 40 },
    { name: 'Leviticus', chapters: 27 },
    { name: 'Numbers', chapters: 36 },
    { name: 'Deuteronomy', chapters: 34 },
    { name: 'Joshua', chapters: 24 },
    { name: 'Judges', chapters: 21 },
    { name: '1 Nephi', chapters: 22 },
    { name: '2 Nephi', chapters: 33 },
    { name: '3 Nephi', chapters: 30 }
];

bookChapters.sort((a,b) =>{
    if(a.chapters < b.chapters){
        return 1;
    }
    else if(b.chapters < a.chapters){
        return -1;
    }
    return 0;
})
// console.log(bookChapters);


// ----------------these 2 functions do the same thing
const bookNephi = bookChapters.filter((book) =>{
    return book.name.toLowerCase().includes('nephi');
    
})
console.log(bookNephi);

const bookNephi2 = bookChapters.filter((book) =>{
    return (/.*nephi.*/i).test(book.name)
    
})
console.log(bookNephi2);


// practice

const animals = [
  {
    name: "Lion",
    traits: ["brave", "strong", "fierce", "wild"]
  },
  {
    name: "Elephant",
    traits: ["large", "gentle", "smart", "wild"]
  },
  {
    name: "Fox",
    traits: ["sly", "quick", "clever", "wild"]
  },
  {
    name: "Dog",
    traits: ["loyal", "friendly", "playful", "cuddly"]
  },
  {
    name: "Cat",
    traits: ["quiet", "independent", "curious", "cuddly"]
  }
];
  
const filterAnimals = animals.filter((verb) =>{
    return verb.traits.includes('wild');

})
console.log(filterAnimals)

const filterAnimals2 = animals.filter(verb => verb.traits.includes('wild')).map(verb =>verb.name);
console.log(filterAnimals2);