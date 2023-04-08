// Definir las variables `lowerLimitEven`, `upperLimitEven`, `lowerLimitOdd` y `upperLimitOdd`. Se deben mostrar en consola todos los números pares existentes entre el `lowerLimitEven` y `upperLimitEven` con el mensaje "El número `<num>` es par". Y mostrar todos los valores impares que existen entre `lowerLimitOdd` y `upperLimitOdd` mostrando el mensaje "El número `<num>` es impar".

let lowerLimitEven = 0;
let upperLimitEven = 10;

let lowerLimitOdd = 0;
let upperLimitOdd = 10;

for (let i = lowerLimitEven; i <= upperLimitEven; i++) {
    if (i % 2 === 0) {
        console.log(`The number ${i} is even`);
    };
};

for (let i = lowerLimitOdd; i <= upperLimitOdd; i++) {
    if (i % 2 !== 0) {
        console.log(`The number ${i} is odd`);
    };
};