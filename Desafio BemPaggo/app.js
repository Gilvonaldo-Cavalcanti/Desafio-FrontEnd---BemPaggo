function Enviar() {

    var elementoSelecionado = document.getElementsByClassName('checkbox');
    var pedidos = [];
    
    for (var i = 0; elementoSelecionado[i]; ++i) {
        if (elementoSelecionado[i].checked) {
            pedidos.push(elementoSelecionado[i].value);
        }
    }

    if (pedidos.length == 0){
        alert("Selecione pelo menos um adesivo.");
    }else {
        alert("Pedidos realizados com sucesso!");
        //...
    }
}

function quantidade(quant) {
    var value = parseInt(document.getElementById("quant").value);
    value += quant;

    if (value < 1) {
        document.getElementById("quant").value = 1;
    } else {
        document.getElementById("quant").value = value;
    }
}