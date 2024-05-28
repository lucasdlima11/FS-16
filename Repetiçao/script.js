function receberIdade() {
    let idade = Number(prompt("Digite sua idade"))

    if(idade >= 18) {
        alert("Voce pode entrar!")
    }else {
        
      let opcao =  Number(prompt("Voce está acompanhado? 1-sim 2-não"))

    if (opcao == 1) {
        alert("Você pode entrar, pois está acompanhado")
    }else if (opcao == 2) {
        alert ("Vá pra casa!")
    }
    }
}

while(true){
    receberIdade()
} 