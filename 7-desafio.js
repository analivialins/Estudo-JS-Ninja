// var arr = [1, 'ana', {kaere:'amor'}, function(){}, true]

// function addItem(item) {
//     arr.push(item);
//     return arr;
// } 

// console.log(addItem([1,false,'tutu']));
// console.log('O segundo array tem ' + arr[5].length + ' itens.')

var qtd = 10

while(qtd<=20){
    qtd % 2 !== 0 ? console.log(qtd) : ' ';
    qtd++;
}

console.log('Números pares entre 100 e 120:'); 
for(var number = 100;number<=120; number++){
    number % 2 === 0 ? console.log(number) : ' ';
}

console.log('Números impares entre 111 e 125:'); 
for(var num = 111;num<=125; num++){
    num % 2 !== 0 ? console.log(num) : ' ';
}



