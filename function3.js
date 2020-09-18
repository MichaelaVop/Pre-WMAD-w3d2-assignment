// write a function that console logs each item of the array one line at a time

let example = [1, 2, 3, 4, 'five', 6, 7];

const logItems = function (arr) {
    for (let i = 0; i < example.length; i++) {
        console.log (example[i]);
    }
};

(logItems(example));

