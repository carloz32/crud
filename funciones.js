const fs = require('fs');
listaEstudiantes = [];

const crear = (estudiante) => {
    listar();
    let est = {
        nombre: estudiante.nombre,
        matematicas: estudiante.matematicas,
        ingles: estudiante.ingles,
        programacion: estudiante.programacion
    };
    let duplicado = listaEstudiantes.find(nomb => nomb.nombre == estudiante.nombre)
    if (!duplicado) {
        listaEstudiantes.push(est);
        console.log(listaEstudiantes);
        guardar();
    } else {
        console.log('Ya existe un estudiante con ese nombre');
    }
}


const listar = () => {
    try {
        listaEstudiantes = require('./listado.json');
    } catch (error) {
        listaEstudiantes = [];
    }

    //  listaEstudiantes = JSON.parse(fs.readFyleSync('listado.json')); //Cuando debe ser asincrono
}
const guardar = () => {
    let datos = JSON.stringify(listaEstudiantes);
    fs.writeFile('listado.json', datos, (err) => {
        if (err) throw (err);
        console.log('Archivo creado con éxtito')
    })
}

const mostrar = () => {
    listar()
    console.log('Notas de los estudiantes:')
    listaEstudiantes.forEach(estudiante => {
        console.log(estudiante.nombre);
        console.log('Notas')
        console.log('Matematicas ' + estudiante.matematicas)
        console.log('Ingles ' + estudiante.ingles)
        console.log('Programacion ' + estudiante.programacion + '\n')
    });
}

const mostrarest = (nom) => {
    listar()
    let est = listaEstudiantes.find(buscar => buscar.nombre == nom)
    if (!est) {
        console.log('No exite este estudiante');
    } else {
        console.log(nom);
        console.log('Notas')
        console.log('Matematicas ' + est.matematicas)
        console.log('Ingles ' + est.ingles)
        console.log('Programacion ' + est.programacion + '\n')
    }
}

const mostrarmat = () => {
    listar()
    let ganan = listaEstudiantes.filter(mat => mat.matematicas >= 3);
    if (ganan.length == 0) {
        console.log('Ningun estudiante va ganando');
    } else {
        ganan.forEach(estudiante => {
            console.log(estudiante.nombre);
            console.log('Notas')
            console.log('Matematicas ' + estudiante.matematicas + '\n')

        });
    }
}

const actualizar = (nom, asignatura, calificacion) => {
    listar()
    let encontrado = listaEstudiantes.find(buscar => buscar.nombre == nom)
    if (!encontrado) {
        console.log ('El estudiante no exite')
    }else{
        encontrado[asignatura]=calificacion;
        console.log ('Estudiante actulizado');
        guardar()
    }
}

const eliminar = (nom)=>{
    listar()
    let nuevo = listaEstudiantes.filter(estudiante => estudiante.nombre !=nom);
    if (nuevo.length == listaEstudiantes.length) {
        console.log('Ningun estudiante tiene el nombre indicado');
    } else {
        listaEstudiantes= nuevo;
        guardar();
    }
}


module.exports = {
    crear,
    mostrar,
    mostrarest,
    mostrarmat,
    actualizar,
    eliminar
} 