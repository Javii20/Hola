   const player = document.querySelector('.videoDoom');
   const imagen = document.querySelector(".juego");



function removeMostrar(){
    player.style.transition= " all 1s";
    player.classList.remove('mostrar')
}
   function addMostrar(){

       player.classList.add('mostrar')
   }
imagen.addEventListener('mouseover',removeMostrar)
imagen.addEventListener('mouseout',addMostrar)
