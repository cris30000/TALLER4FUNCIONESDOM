// aqui obtenemos los datos de los elementos por medio de constantes

const baseInput=document.getElementById("base");
const alturaInput=document.getElementById("altura");
const boton=document.getElementById("calcular");
const resultado=document.getElementById("resultado");


// ahora funcion para calcular el area

function areaTriangulo(base,altura){
    return(base*altura)/2
}


//ahora creo el evento para que escuche la entrrada del dato y llame
boton.addEventListener("click",()=>{
    const base=parseFloat(baseInput.value);
    const altura=parseFloat(alturaInput.value);

    //aqui hago un condicional cuando los datos son invalidos y con isNaN verifica si base no es un  numero porque todo divido en cero no existe
    if(isNaN(base)||isNaN(altura)|| base<=0 || altura<=0){
        resultado.textContent="por favor ingresa valores validos";
        return;
    }

    const area= areaTriangulo(base,altura);
    resultado.textContent=  `El área del triángulo es: ${area}`;

})

