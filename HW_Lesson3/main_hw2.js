var colors = [{
   name: 'black',
   img: 'black.png',
   pricecol: 300 
}, {
   name: 'burgundy',
   img: 'burgundy.png',
   pricecol: 500 
}, {
   name: 'gold',
   img: 'gold.png',
   pricecol: 400 
}, {
   name: 'gray',
   img: 'gray.png',
   pricecol: 350 
}, {
   name: 'purple',
   img: 'purple.png',
   pricecol: 450 
}];

var memories = [{
    val: 32,
    pricemem: 200
}, {
    val: 64,
    pricemem: 250
}, {
    val: 128,
    pricemem: 300
}, {
    val: 256,
    pricemem: 350
}, {
    val: 512,
    pricemem: 400
}];

var defaultImg = 'default.png';

var color;
var img = defaultImg;
var memory = 0;
var price = 0;
colors: while (true) {
    color = prompt('Input color for your phone', "You can choice only: black, burgundy, gold, gray, purple"); 
    if (color === null) {
        color = 'none color';
        alert('BYE-BYE');
        break;
    }
    for (var i = 0; i < colors.length; i++) {
        if (color === colors[i].name) {
            img = colors[i].img;         
            price = colors[i].pricecol;
            break colors;
        }
    }
}

memories: while (img !== defaultImg) {
    memory = prompt('Input Val of memory', "You can input only: 32, 64, 128, 256, 512");
    if (memory === null) {
        memory = 0;
        alert('BYE-BYE');
        break;
    }
    for (var i = 0; i < memories.length; i++) {
        if (+memory === memories[i].val) {
            price = price + memories[i].pricemem;
            break memories;
        }
    }
}
document.write('<img width="150" src="../img/' + img + '">');
document.write('<h2>Price: ' + price + ' $</h2>');
document.write('<h3>Memory: ' + memory + ' Gb</h3>');
document.write('<h3>Color: ' + color + '</h3>');
