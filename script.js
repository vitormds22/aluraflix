function adicionarFilme() {
    const urlImagem = document.getElementById("filme").value;
    const divListaFilmes = document.getElementById("listaFilmes");
    var msgAlerta = document.createElement("p");
    
    msgAlerta.textContent = "Insira a URL da imagem para dar certo ! :)";
    msgAlerta.classList.add("alert-msg");

    if (urlImagem.endsWith(".jpg")) {
        listarFilmes(urlImagem, divListaFilmes);
    } else {
        divListaFilmes.appendChild(msgAlerta);
        document.getElementById("filme").value = "";
    }
}

function listarFilmes(urlImagem, divListaFilmes) {
    var listaFilmes = [];
    listaFilmes.push(urlImagem);

    for (var i = 0; i < listaFilmes.length; i++) {
        var divImgFilme = document.createElement("div");
        divImgFilme.classList.add('img-filme');
        
        var imagem = document.createElement("img");
        
        var botaoRemove = document.createElement('button');
        botaoRemove.textContent = "+";
        botaoRemove.classList.add('deleteFilme');
        
        botaoRemove.addEventListener('click', function(event){

            divImgFilme.classList.add('img-filme-delete');
        })

        divImgFilme.append(botaoRemove, imagem);

        if (listaFilmes[i] == urlImagem) {
            imagem.src = listaFilmes[i];
            return divListaFilmes.appendChild(divImgFilme);
        } else {
            return console.log("deu ruim");
        }
  }
}

function removeFilme() {
    var divImgFilme = document.querySelector('.img-filme');
    return divImgFilme.classList.add('img-filme-delete');
}
