function cadastrar() {
    const musicaInput = document.getElementById("musica")
    const albumInput = document.getElementById("album")
    const artistaInput = document.getElementById("artista")

    const musicas = {
        musica: musicaInput.value ,
        album: albumInput.value ,
        artista: artistaInput.value
    }

   const tabela = document.getElementById("tabela")

    const cMusica = "<td>" + musicas.musica + "</td>";
    const cAlbum = "<td>" + musicas.album + "</td>";
    const cArtista = "<td>" + musicas.artista + "</td>";

     tabela.innerHTML += "<tr>" + cMusica + cAlbum + cArtista + "</tr>"


}