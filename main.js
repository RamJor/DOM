const botonCambio = document.querySelector('#dom');
const imagenCambio = document.querySelector('#dom__push__img');
const quitarPonerClase = document.querySelector('.img__dinamic');
const agregarQuitarFondo = document.querySelector('.dom__img');
const titulo = document.querySelector('.texto');
let sinFondo =true;

  
botonCambio.addEventListener('click', ()=>{
  if (sinFondo){
  imagenCambio.setAttribute('src','./img/heroe2.jpg');
  quitarPonerClase.classList.remove('img__dinamic');
  agregarQuitarFondo.classList.add('active');
  titulo.textContent= 'Aprendí a manipular elementos del DOM usando JavaScript.';
  }else{
    reiniciar();
  }
  sinFondo= !sinFondo
}) 
 


function reiniciar() {
  imagenCambio.setAttribute('src', './img/heroe1.jpg');
  titulo.textContent= '';
  quitarPonerClase.classList.add('img__dinamic');
  agregarQuitarFondo.classList.remove('active');


  
}
