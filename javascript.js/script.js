let hanburger = document.querySelector('.hanburger ion-icon')
let nav = document.querySelector('nav')

hanburger.addEventListener('click', function(){
nav.classList.toggle('show-nav');

})

function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}

