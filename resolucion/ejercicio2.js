/*
¡Atención, equipo de inteligencia! Hemos recibido un reporte de un importante hackeo en nuestra red de computadoras. Necesitamos su ayuda para encontrar al responsable del ataque y detenerlo antes de que cause más daño. Se sabe que el hacker es parte de una lista de los 10 delincuentes más buscados. Además sabemos que tiene fanatismo por dejar "su marca" en los registros, creemos que se llama Juan o Pedro, y que sus números favoritos son el 3 y el 7. Encuentren al hacker lo más rápido que puedan, el destino de todos está en sus manos.
['Juan', 'Santiago', 'Luis', 'Carlos', 'Miguel', 'Jorge', 'Fernando', 'Pedro', 'Andrés', 'Daniel']
*/

const listaDeSospechosos = ['Juan','Santiago','Luis','Carlos','Miguel','Jorge','Fernando','Pedro','Andrés','Daniel',];
let posiblesHackers = ['Juan', 'Pedro'];
let pistaNumeros = [3, 7];
let hackerPrincipal = '';

for (let i = 0; i < posiblesHackers.length; i++) {
    let sospechoso = posiblesHackers[i];

    for (let j = 0; j < pistaNumeros.length; j++) {
        let posicion = pistaNumeros[j];

        if (listaDeSospechosos[posicion] === sospechoso) {
            hackerPrincipal = sospechoso;
            break;
        }
    }
}

if (hackerPrincipal) {
    console.log(`El sospechoso principal es ${hackerPrincipal}.`);
} else {
    console.log('Lo sentimos, no hemos encontrado al sospechoso');
}