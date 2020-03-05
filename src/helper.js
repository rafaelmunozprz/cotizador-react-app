//obtener la diferencia de años
export function obtenerDiferenciaYear(modelo){
    return new Date().getFullYear() - modelo;
}

//calcular el incremento de precio dependiendo la procedencia
export function calcularMarca(marca) {
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
            break;
        default:
            break;
    }
    return incremento;
}

//calcular el tipo de seguro
export function obtenerPlan(plan) {
    return(plan === 'basico') ? 1.20 : 1.50;
}

//Muestra el texto capitalizado
export function primerMayuscula(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}