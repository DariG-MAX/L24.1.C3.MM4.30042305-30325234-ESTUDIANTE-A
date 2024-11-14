/*
1. ESTUDIANTE-A
Se tiene de varios estudiantes su nombre, semestre y nota. También se sabe que la nota máxima es 20, y que los estudiantes aprueban con un mínimo de 10.
Toda esta información de estudiantes se carga en un arreglo, y se necesita una función que retorne los estudiantes de un semestre dado.
La estructura de un objeto estudiante es, p.ej.: {nombre: ‘Luis’, semestre: 5, nota: 14} Función: estudiantesSemestre.
Parámetros: estudiantes (array de objetos estudiante), semestre (un número).
Retorno: array de objetos estudiante que pertenecen al semestre indicado. 
*/
let estudiante = [
    {nombre: "laura", semestre: 3, nota: 18},
    {nombre: "Luis", semestre: 5, nota: 14},
    {nombre: "martha", semestre: 4, nota: 16},
    {nombre: "lucia", semestre: 5, nota: 8},

];
let estudiantesSemestre = (estudiante, semestre) => {
    let estudianteFiltrado = [];
    estudiante. array.forEach((estudiante) => {
        if (estudiante.semestre== semestre) estudianteFiltrado.push(estudiante);
    });
    return estudianteFiltrado;
}
let salida = document.getElementById("salida");
let estudiante5 = estudiantesSemestre (estudiante, semestre);
salida.innerHTML = `Estudiantes del semestre 5:<br> `;
estudiante5.forEach((estudiante) => {
    salida.innerHTML += `Nombre: ${estudiante.nombre} - semestre: ${estudiante.semestre} `
})   