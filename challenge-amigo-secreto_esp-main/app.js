// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {

    var resultadoUl = document.getElementById('resultado');
    resultadoUl.innerHTML = ""; // Limpiamos la lista de resultados antes de agregar el nuevo resultado

    var amigoInput = document.getElementById('amigo');
    

    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    amigos.push(nombre);
    amigoInput.value = "";
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    var listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    for (var i = 0; i < amigos.length; i++) {
        var li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length < 1) {
        alert("No hay amigos para sortear.");
        return;
    }

    var indiceAleatorio = Math.floor(Math.random() * amigos.length);
    var amigoSeleccionado = amigos[indiceAleatorio];

    var listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    var resultadoUl = document.getElementById('resultado');
    resultadoUl.innerHTML = "";

    var li = document.createElement('li');
    li.textContent = `El amigo secreto sorteado es: ${amigoSeleccionado}`;
    resultadoUl.appendChild(li);
}