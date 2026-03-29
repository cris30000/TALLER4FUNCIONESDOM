
let movido=false;

// ahora realizamops las funciones para mover el cuadro

function moverCuadro(){
    const cuadro = document.getElementById("cuadro");

    // si quiero obtener el ancho de la patalla y mopverlop al extremo derecho seria con 

    const anchoPantalla=window.innerWidth;
     // y para que no se salga de  la pantralla
     const anchoCuadro = cuadro.offsetWidth;

     //cuadro.style.left= ( anchoPantalla - anchoCuadro)+"px";

     // realizo un condicional para que el cuadro regrese a su posicion inicial

     if(!movido){
         cuadro.style.left= ( anchoPantalla - anchoCuadro)+"px";
         movido=true;
     }
     else{
        cuadro.style.left="0px";
        movido=false;
     }
}

