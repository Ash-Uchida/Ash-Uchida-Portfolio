const numbers = [1,2,3,4,5];
const users = [
    {name: 'Aaron', age: 30, active:true },
    {name:'Manny', age: 20, active:false },
    {name: 'Tamanda', age: 23, active:true }
];
const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first:'Manny'},
    {last: 'Tanda', first: 'Tamanda'}
];

// The forEach
numbers.forEach((num,index) => {
    sum+= num;
    console.log(`[${index}] =${num}`);
});
console.log(`The sum of the nums is: ${sum}`);


// The map method
const numsDouble = numbers.map((num) => {
    return num * 2;
});
console.log(`Original:`, numbers);
console.log(`Changed:`, numsDouble);


// The filter method
const evenNums = numbers.filter((num) => {
    return num % 2 === 0;
});
console.log(evenNums);


// The filter method
const activeUsers = users.filter((user) => {
    return user.active;
});
console.log(`Active: `,activeUsers);


// the reduce method
const sum = numbers.reduce((total, num) =>{
    return total + num; 
});
console.log(sum);

// average age
const age = users.reduce((total, user) => {
    return total +user.age;
} , 0) /users.length;

console.log()

const fruits= ['watermelon', 'peach', 'apple', 'tomato', 'grape'];    
const ul = document.getElementById('fruit-list')
// int the html have <ul>id="fruit-list"><ul>
let html = '';
fruits.forEach((fruit) => {
    html += `<li>${fruit}<\li>`
})
ul.innerHTML = html;
// -------------------------
// another way to do the fruits
fruits.forEach((fruits) =>{
    const li = document.createElement('li');
    li.textContent = fruits;
    ul.appendChild(li);
})

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