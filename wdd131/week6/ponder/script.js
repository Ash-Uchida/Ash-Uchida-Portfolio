const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first:'Manny'},
    {last: 'Tanda', first: 'Tamanda'}
];
students.forEach((item) =>{
    console.log(item);
})

// ----------------------------------------------
const names = students.map((student) => {
    return `${student.first} ${student.last}`;
});
// ----------------------------------------------
const food1 = document.querySelector(".food1");
const food2 = document.querySelector(".food2");
const food3 = document.querySelector(".food3");
const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];    


food1.addEventListener('click', function(){
    // what andrus likes and dislikes
    console.log(`${names[0]} likes ${words[0]} and ${words[1]}`);
    console.log(`${names[0]} dislikes ${words[2]} and ${words[3]}`);
    console.log("");
})
food2.addEventListener('click', function(){
    // what masa likes and dislikes
    console.log(`${names[1]} likes ${words[3]} and ${words[4]}`);
    console.log(`${names[1]} dislikes ${words[2]}`);
    console.log("");
})
food3.addEventListener('click', function(){
    // what Tanda likes and dislikes
    console.log(`${names[2]} likes ${words[0]} and ${words[4]}`);
    console.log(`${names[2]} dislikes ${words[1]}`);
    console.log("");
})

// -----------------------------------------------
const grade1 = document.querySelector(".grade1");
const grade2 = document.querySelector(".grade2");
const grade3 = document.querySelector(".grade3");

// their grades
function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}
  

grade1.addEventListener('click', function(){
    // andrus gpa
    const gpa = convert('D');
    console.log(`${names[0]} gpa is ${gpa}`);
    console.log("");
})
grade2.addEventListener('click', function(){
    // masa gpa
    const gpa = convert('C');
    console.log(`${names[1]} gpa is ${gpa}`);
    console.log("");
})
grade3.addEventListener('click', function(){
    // tamanda gpa
    const gpa = convert('B');
    console.log(`${names[2]} gpa is ${gpa}`);
    console.log("");
})