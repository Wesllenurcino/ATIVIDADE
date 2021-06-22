
const resumo = document.querySelector('#resumo')
const contador = document.querySelector('#contador')

contador.innerHTML = 499 ;

resumo.addEventListener('keyup', function(){
    contador.innerHTML = 499 - resumo.value.length;
})



const resumo2 = document.querySelector('#resumo2')
const contador2 = document.querySelector('#contador2')

contador2.innerHTML = 499 ;

resumo2.addEventListener('keyup', function(){
    contador2.innerHTML = 499 - resumo2.value.length;
})

