//import yargs npm
//const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;
const colors = require('colors');


const porHacer = require('./por-hacer/por-hacer');

//show in console the structure of yargs based on the inputs given
//console.log(argv);

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('==================Por hacer================'.green);
            console.log(tarea.descripcion);
            console.log('estado : ', tarea.completado);
            console.log('==========================================='.green);
        }
        console.log('Mostrar todas las tareas por hacer');
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado)
        if (actualizado) {
            console.log('Se actualizo la tarea');
        } else {
            console.log('No se pudo actualizar');
        }
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
        break;

    default:
        console.log('Comando no es reconocido');


}