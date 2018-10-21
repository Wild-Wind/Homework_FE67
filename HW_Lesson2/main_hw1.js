var memory = [32, 64, 128, 256, 512];
var price = 0;
end: while (true) {
    var color = prompt('Input color for your phone', "You can choice only: black, burgundy, gold, gray, purple"); 
    if (color === null) {
        alert('BYE-BYE');
        document.write('<img width="150" src="../img/default.png">');
        break;
    }
    switch (color) {
        case 'black':
        case 'burgundy':
        case 'gold':
        case 'gray':
        case 'purple':
            document.write('<img width="150" src="../img/' + color + '.png">');
            break end;
    }
    // if (color === 'black') {
    //     document.write('<img width="200" src="../img/' + color + '.png">');
    //     break;
    // }
    // if (color === 'burgundy') {
    //     document.write('<img width="200" src="../img/' + color + '.png">');
    //     break;
    // }
    // if (color === 'gold') {
    //     document.write('<img width="200" src="../img/' + color + '.png">');
    //     break;
    // }
    // if (color === 'gray') {
    //     document.write('<img width="200" src="../img/' + color + '.png">');
    //     break;
    // }
    // if (color === 'purple') {
    //     document.write('<img width="200" src="../img/' + color + '.png">');
    //     break;
    // }
}
if (color === null){
    document.write('<h2>You canceled task</h2>');
} else {
end1: while (true) {
    var val = prompt('Input Val of memory', "You can input only: 32, 64, 128, 256, 512");
    if (val === null) {
        val = 0;
        alert('BYE-BYE');
        break;
    }
    for (var i = 0; i < memory.length; i++){
        if (+val === memory[i]){
            price = 500 + val * 1.1;
            break end1;
        }
    }
}
document.write('<h2>Price: ' + price + ' $</h2>');
document.write('<h4>Color: ' + color + '</h4>');
document.write('<h3>Memory: ' + val + ' Gb</h3>');
}