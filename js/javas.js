function teclar(num) {

    var numero = document.getElementById('painel').innerHTML;
    document.getElementById('painel').innerHTML = numero + num;
}


function apagar() {

    document.getElementById('painel').innerHTML = "";
}



function calcular() {

    var resultado = document.getElementById('painel').innerHTML;
    if (painel) {
        document.getElementById('painel').innerHTML = eval(resultado);
    }
}

