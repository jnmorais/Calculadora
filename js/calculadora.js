function teclar(num) {

    var numero = document.getElementById('painel').innerHTML;
    document.getElementById('painel').innerHTML = numero + num;
}

let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
let btn6 = document.getElementById('btn6')
let btn7 = document.getElementById('btn7')
let btn8 = document.getElementById('btn8')
let btn9 = document.getElementById('btn9')
let btn0 = document.getElementById('btn0')


let btnSoma = document.getElementById('btnSoma')
let btnMultiplicacao = document.getElementById('btnMultiplicacao')
let btnSubtracao = document.getElementById('btnSubtracao')
let btnDivisao = document.getElementById('btnDivisao')

function apagar() {

    document.getElementById('painel').innerHTML = "";
}

btn1.addEventListener('click', function clickUm() {
    addNumero(1);
});
btn2.addEventListener('click', function clickDois() {
    addNumero(1);
});
btn3.addEventListener('click', function clickTres() {
    addNumero(1);
});
btn4.addEventListener('click', function clickQuatro() {
    addNumero(1);
});
btn5.addEventListener('click', function clickCinco() {
    addNumero(1);
});
btn6.addEventListener('click', function clickSeis() {
    addNumero(1);
});
btn7.addEventListener('click', function clickSete() {
    addNumero(1);
});
btn8.addEventListener('click', function clickOito() {
    addNumero(1);
});
btn9.addEventListener('click', function clickNove() {
    addNumero(1);
});
btn0.addEventListener('click', function clickZero() {
    addNumero(1);
});

btnSoma.addEventListener('click', function somar() {
    operando1 = iptResultado.value;
    operador = 'SOMA';
    iptResultado.value = '';
})
btnMultiplicacao.addEventListener('click', function multiplicar() {
    operando1 = iptResultado.value;
    operador = 'MULTIPLICACAO';
    iptResultado.value = '';
})
btnSubtracao.addEventListener('click', function subtrair() {
    operando1 = iptResultado.value;
    operador = 'SUBTRACAO';
    iptResultado.value = '';
})
btnDivisao.addEventListener('click', function dividir() {
    operando1 = iptResultado.value;
    operador = 'DIVISAO';
    iptResultado.value = '';
})


function calcular() {

    var resultado = document.getElementById('painel').innerHTML;
    if (painel) {
        document.getElementById('painel').innerHTML = eval(resultado);
    }
}

