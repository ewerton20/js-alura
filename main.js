function tocaSom (idElementoAudio) { 
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
// variavel 
let contador = 0 ;

// enquanto 
while (contador < listaDeTeclas.length) {
    
   const instrumento = listaDeTeclas[contador].classList[1];

    console.log();

    listaDeTeclas[contador].onclick = function(){
        tocaSom('#som_tecla_');
    }

    contador = contador + 1;

    console.log(contador);
}
