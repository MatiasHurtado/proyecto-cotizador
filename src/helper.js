//Obtiene la diferencia de years
export  function obtenerDiferenciaYear(year){
    return new Date().getFullYear() - year;
}

//Calcula el total a pagar segun la marca

export function calcularMarca(marca){
    let incremento;

    switch(marca){
        case 'europeo':
            incremento = 1.30;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            incremento = 1.05;
            break

        default:
            break;
    }
    return incremento;
}


//Calcular tipo de Seguro

export function obtenerPlan (plan)