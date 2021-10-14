// var array = [1, 2, 3, 4, 5]

// function myArray(ar){
//     return ar;
// }
// console.log(myArray(array)[1]);

// function myFunction(a, b){
//     return a [b];
// }

// var array1 = [1, 'ana', true, {prop:'1',prop1: '2'}, function kaere(){return 'amor da minha vida'}]

// console.log(myFunction(array1, 0), myFunction(array1, 1), myFunction(array1, 2), myFunction(array1, 3), myFunction(array1, 4) );

function book(livro){
    var biblioteca = { 
        'Minha Vida': { 
            quantidadePaginas: 50,
            autor: 'Kaere',
            editora: 'Meu Amor',
        },
        ' A Mais Linda Lis Do Campo': { 
            quantidadePaginas: 76,
            autor: 'Ana',
            editora: 'Meu Amor',
        },
        'Como Conseguir O Melhor Teteto': { 
            quantidadePaginas: 2,
            autor: 'Tutu',
            editora: 'Meu Amor',
        }
    }

    return !livro ? biblioteca : biblioteca[livro]

}

console.log('O autor do livro Como Conseguir O Melhor Teteto é o ' + book('Como Conseguir O Melhor Teteto')['autor'] + ', tem ' + book('Como Conseguir O Melhor Teteto')['quantidadePaginas'] + ' páginas e, a editora é ' +  book('Como Conseguir O Melhor Teteto')['editora'] + '!' );