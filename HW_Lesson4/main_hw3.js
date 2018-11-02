// Part 1. numPrompt 
// var numPrompt = function () {
//     var x = prompt('Input something', '');
//         if (x === null) {
//             return x;
//         }
//         if ((x >= 0) || (x < 0)) {
//             return x;
//         } 
//         return "NaN";  
// }
// console.log(numPrompt());

// Part 2. myCalc
var myCalc = function () {
    var x1 = prompt('Input first number', 'It must be only number.');
        if (((x1 >= 0) && (x1 != null)) || (x1 < 0)) {
          console.log(x1);
          var x2 = prompt('Input second number', 'It must be only number.');
        if (((x2 >= 0) && (x2 != null)) || (x2 < 0)) {
          console.log(x2);
          var x3 = prompt('Input symbol', 'Only "+" or "-"');
        if ((x3 === '-') || (x3 === '+')) {
            console.log(x3);
          if (x3 === '-') {
            return (+x1 + +x2) * -1;
          } else {
                    return (+x1 + +x2);
            } 
        }        
        } 
        } 
        return 'You choiced CANCEL or Inputed uncorrect data';
}
console.log(myCalc());

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