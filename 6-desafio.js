// var championship = 'paulistão'
// var teams = [
//     'São Paulo',
//     'Palmeiras',
//     'Santos',
//     'Bragantino',
//     'Mirassol'
// ]

// function showTeamPosition(a){
//     if(a<1 || a>5){
//         return 'Não temos a informação do time que está nessa posição.';
//     }
//     return 'O time que está em ' + a + 'º lugar é o ' + teams[--a];

// }

// console.log( 'Times que estão participando do campeonato:', teams );
// console.log(showTeamPosition(1), showTeamPosition(2), showTeamPosition(3), showTeamPosition(0))

var counter = 20;

while(counter<=30){
    console.log(counter++);
}

function convertHex(color){
    var hexa;
    switch(color){
        case 'red':
            hexa = '#FF2D00';
        break;

        case 'green':
            hexa = '##1BFF00';
        break;

        case 'purple':
            hexa = '#9300FF';
        break;

        case 'pink':
            hexa = '#FF008B';
        break;

        case 'turquoise':
            hexa = '#00F0FF';
        break;

        default:
            console.log('Não temos o equivalente hexadecimal para ' + color +'.');
    }

    return 'O hexadecimal para a cor '+ color + ' é ' + hexa + '.';

}

console.log(convertHex('pink'));