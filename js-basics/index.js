let favMovies = [];
function addMovie(movieTitle) {
    if (typeof movieTitle === 'string') {
        favMovies.push(movieTitle);
    } else {
        console.log('Please input a valid  movie title');
    }
    
}
function displayMovies() {
    if (favoriteMovies.length === 0) {
        console.log("No movies in the list.");
    } else {
        for (let i = 0; i < favoriteMovies.length; i++) {
            console.log(`${i + 1}. ${favoriteMovies[i]}`);
        }
    }
}





























// MOSH
// let person = {
//     name:'sally',
//     age: 13
// };

// console.log(person.name);

// // arraysssss

// let favColours = ['red', 'blue', 'yellow'];
// favColours[3] = 'purple'
// console.log(favColours.length);

//performing tasks
// function greet(name , lastName) {
//     console.log('Hello ' + name + ' ' + lastName);
// }
// greet('salma', 'nasir');

//calculating values
// function square(number) {
//     return number * number;
// }
// console.log(square(3));

// for loops

// for(let i = 0; i <= 10; i++) {
//     console.log('For loop number is: {i}');
// }

// // while
// let i = 0;
// while(i < 10) {
//     console.log('While Loop Number: ${i}');
//     i++;
// }



// const todos = [
//     {
//         id: 1,
//         text: 'Call family members',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meet with client',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Wash the dishes',
//         isCompleted: false
//     }
// ];

// for(let i = 0; i < todos.length; i++){
//     console.log(todos[i].text);
// }

// for of loop

// for(let todo of todos){
//     console.log(todo.text);
// }


// high order array methods

// forEach, map, filter

// todos.forEach(function(todo){
//     console.log(todo.text);
// });



// conditionals
// const x = 89;
// if (x===10) {
//     console.log('x is equal to ten');
// } else if (x < 10) {
//     console.log('x is less than 10');
// } else {
//     console.log('x is greater than 10');
// }


// ternary conditions

// const x = 11;

// const color = x > 10 ? 'red' : 'blue'
// console.log(color);


// const x = 4;

// const color = x > 10 ? 'red' : 'blue'
// switch (color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue': 
//         console.log('color is blue');
//         break;   
//     default:
//         console.log('color is NOT red or blue');
//         break;
// }


