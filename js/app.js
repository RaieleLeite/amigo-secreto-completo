let listaAmigos = [];

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


function adicionar() {
    let input = document.getElementById('nome-amigo');
    let nomeAmigo = input.value.toLowerCase().trim();
    let alertaTag = document.querySelector('.form__label');

    nomeAmigo = capitalizeFirstLetter(nomeAmigo);

    if (nomeAmigo === '') {
        alertaTag.textContent = 'Atenção! Você precisa digitar o nome de um amigo para adicionar.';
    } else {
        if (listaAmigos.includes(nomeAmigo)) {
            alertaTag.textContent = `O amigo "${nomeAmigo}" já foi adicionado.`;
        } else {
            alertaTag.textContent = 'Digite o nome de um amigo';
            listaAmigos.push(nomeAmigo);

            adicionarNome(nomeAmigo);
        }

        input.value = ''; 
    }
}


function adicionarNome(nomeAmigoParametro){
    let listaAmigosTag = document.getElementById('lista-amigos');

    let div = document.createElement('div');
    let p = document.createElement('p');
    let button = document.createElement('button');
    let img = document.createElement('img');

    let indiceNome = listaAmigos.indexOf(nomeAmigoParametro);

    div.classList.add('div__trash');
    p.classList.add('p__trash');
    button.classList.add('button__trash');
    button.setAttribute('aria-label', `Excluir nome de ${nomeAmigoParametro}`);
    button.onclick = function() {excluir(indiceNome, div);};
    img.classList.add('img__trash');


    p.textContent = nomeAmigoParametro;
    img.src = './assets/trash.png';
    img.alt = 'trash icon';
    button.appendChild(img);
    div.appendChild(p);
    div.appendChild(button);

    listaAmigosTag.appendChild(div);
}




function sortear() {
    let alertatagSorteio = document.querySelector('.friends__title');
    let listaSorteio = document.getElementById('lista-sorteio');


    if(listaAmigos.length <= 3){
        alertatagSorteio.textContent = 'É necessário mais de 4 amigos para realizar o sorteio';
        listaSorteio.innerHTML = '';

    } else {
        alertatagSorteio.textContent = 'Amigos incluídos';
        embaralha(listaAmigos);

        for(let i = 0; i < listaAmigos.length; i++){

            if(i == listaAmigos.length - 1){
                listaSorteio.innerHTML = listaSorteio.innerHTML + listaAmigos[i] + '-->' + listaAmigos[0] + '<br>';
            } else {
                listaSorteio.innerHTML = listaSorteio.innerHTML + listaAmigos[i] + '-->' + listaAmigos[i+1] + '<br>';
            }
        }
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}


function reiniciar(){
    listaAmigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    document.querySelector('.friends__title').textContent = 'Amigos incluídos';
    document.querySelector('.form__label').textContent = 'Digite o nome de um amigo';
}


function excluir(indiceApagar, divApagar){
    listaAmigos.splice(indiceApagar, 1);

    divApagar.remove();
}