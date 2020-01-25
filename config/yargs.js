//optimizacion para que no se repita lo siguiente
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}


//"command" allow define values with command. you can see this structure as documentation in console
const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar elemento por hacer', {
        descripcion
    })
    .help()
    .argv;

//A way to export this configuration and use it in the main part
module.exports = {
    argv
}