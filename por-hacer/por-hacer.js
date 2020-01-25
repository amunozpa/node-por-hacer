const fs = require('fs');

let listadoPorHacer = [];

const guardaDB = () => {
    //(in this case)allow to convert data values in JSON format
    let data = JSON.stringify(listadoPorHacer);

    //allow to persist data in the path 
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

const cargarDB = () => {
    try {

        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
            descripcion,
            completado: false
        }
        //push is for get the object into listadoPorHacer
    listadoPorHacer.push(porHacer);

    guardaDB();

    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    //encontrar un identificador
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })

    if (index >= 0) {

        //si encuentra identificador sobreescribe el el valor descripcion
        listadoPorHacer[index].completado = completado;

        guardaDB();
        return true;

    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();

    //metodo que borra al elemento index encontrado
    let nuevoListado = listadoPorHacer.filter(result => result.descripcion !== descripcion);

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardaDB();
        return true;
    }
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}