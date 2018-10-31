// Part 1. numPrompt 
var numPrompt = function () {
    var x = prompt('Input something', '');
        if (x === null) {
            return x;
        }
        if ((x >= 0) || (x < 0)) {
            return x;
        } 
        return "NaN";  
}
console.log(numPrompt());

// Part 2. myCalc (в работе)
// var myCalc = function () {
//     var x1 = prompt('Input first number', 'It must be only number.');
//     var x2 = prompt('Input second number', 'It must be only number.');
//     var x3 = prompt('Input symbol', 'Only "+" or "-"');
//     console.log(x1);
//     console.log(x2);
//     console.log(x3);
//         if (x1 || x2 || x3 === null) {
//             return "Cancel";
//         }
//         if (x1 * x2 === NaN) {
//             return "Inputed uncorrect data"; 
//         }
//         if ((x >= 0) || (x < 0)) {
//             return x;
//         } 
//         return "NaN";  
// }
// console.log(myCalc());

// Part 3. mySlice (в работе)
// var arr = [30, 51, 74, 106, 540, 356, 280, 859, 372];

// var mySlice = function (array, start, amount) {
//     if (amount >= array.length) {
//         console.warn('Столько ячеек не существует');
//         return null;
//     }
//     if (amount <= start) {
//         console.warn('Такого куска нет');
//         return null;
//     }
//     for (var i = start; i < array.length; i++) {
//         const element = array[i];
        
//     }
//     return array.mySlice(start, amount);
// }

// console.log(mySlise(arr, 1, 3));