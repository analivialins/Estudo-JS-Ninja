// var isTruthy = function( a ){
//     if(a) {
//         return true;
//     }
//    return false;
// }

// console.log(isTruthy(null), isTruthy(0), isTruthy(undefined), isTruthy(''), isTruthy(NaN))
// console.log(isTruthy([]), isTruthy(2), isTruthy('te amo'))

var carro = { 
    marca:'fiat',
    modelo:'toro',
    placa: 'BvJ5541', 
    ano: '2009', 
    cor: 'marrom', 
    quantasPortas: '4',
    assentos: 5, 
    quantidadePessoas: 0,
}

carro.mudarCor = function(a){
    carro.cor = a;
}

carro.obterCor = function(){
    return carro.cor;
}

carro.obterModelo = function(){
    return carro.modelo;
}

carro.obterMarca = function(){
    return carro.marca;
}

carro.obterMarcaModelo = function(){
    return 'Esse carro é um ' + carro.obterMarca() + ' ' + carro.obterModelo();
}

carro.adicionarPessoas = function(a){
        var totalPessoas = carro.quantidadePessoas + a;
        
        if (carro.quantidadePessoas === carro.assentos ){
            return 'O carro já está lotado!'
        }

        if (totalPessoas > carro.assentos){
            var diferencaPessoas =  carro.assentos - carro.quantidadePessoas;

            var pluralOuSingular = diferencaPessoas === 1 ? ' pessoa ' : 'pessoas'

            return 'Só cabem mais ' + diferencaPessoas + pluralOuSingular + '!';
        }

        carro.quantidadePessoas += a ;
        return 'Já temos ' + totalPessoas + ' pessoas no carro!';
    }

// console.log(carro.mudarCor('vermelho'))
console.log(carro.adicionarPessoas(4) + carro.adicionarPessoas(5))