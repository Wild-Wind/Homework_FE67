// Part 1. map(fn, array)

var f1 = function (a) {
    return a * -1;
}

var arr = [5, 6, 7, 8, 2, 1, 4, 6, 90];

var map = function (fn, array) {
    var resultArr = [];
    for (var i = 0; i < array.length; i++) {
        resultArr.push(fn(array[i]));
    }   
    return resultArr;
}
console.log(map(f1, arr));

// Part 2. take(gen, x) (в работе)
// var sequence = function (start, step) {
//     if (start === undefined) {
//         start = 0;
//     }
//     if (step === undefined) {
//         step = 1;
//     }
//     start -= step;
//     return function () {
//         return start += step;
//     }
// }

// var generator = sequence(10, 3);
// console.log(generator());
// console.log(generator());
// console.log(generator());
