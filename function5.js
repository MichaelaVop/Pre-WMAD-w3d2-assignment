// write a function that takes every item in the array, and adds the word 'HOORAY' to the end of it
// and console.log it

let food = ['apple', 'orange', 'cake', 'carrots', 'pasta', 'rice', 'eggs'];

const addHooray = function (arr) {
    for (let i = 0; i < food.length; i++) {
        console.log (food[i] + ' HOORAY'); 
    };
    

};



(addHooray(food));

