function mostrarTexto (){

}

function deuCerto (resultado) {
    console.log("Deu certo!")
    resultado.text().then(mostrarTexto)
}
function deuErro(error) {
    console.log(error)
    console.log("deuErro")
}
function terminou () {
    console.log ("Terminou")
}

const url = "https://imersao.ronierlima.dev/"

fetch(url)
.then(deuCerto)
.catch(deuErro)
.finally(terminou)