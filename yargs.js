const nombre = {
    demand: true,
    alias: 'n'
}

const matematicas = {
    demand: true,
    alias: 'm'
}

const ingles = {
    demand: true,
    alias: 'i'
}

const programacion = {
    demand: true,
    alias: 'p'
}

const creacion = {
    nombre,
    matematicas,
    ingles,
    programacion
}

const muestraest={
    nombre
}

const argv = require('yargs')
            .command('crear', 'Crear un estudiante en mi BD', creacion)
            .command('mostrar', 'Muestra los estudiantes')
            .command('mostrarest', 'Muestra la información de un estudiante en especifico',muestraest)
          
            .argv;

module.exports = {
    argv
}