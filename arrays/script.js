let frutas;

frutas = ["<li>abacate</li>", "<li>banana</li>", "<li>maça</li>", "<li>cajú</li>"]



function escrevaFrutas() {
    let fruta = prompt("Digite o nome de uma fruta ")
    fruta = "<li>" + fruta + "</li>"
    frutas.push(fruta)
    atualizarLista()
    
}

function atualizarLista(){
    let listas = document.getElementById ("lista")
    listas.innerHTML = ""
    for (let i = 0; i < frutas.length; i++){
        listas.innerHTML += frutas[i];
    }   
}


function apagarUltimo () {
    frutas.pop()
    atualizarLista()
}

atualizarLista() 