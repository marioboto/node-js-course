//Esto solo en los modulos nativos
//const {promisify} = require('util') //para usar promesas si no ponemos node:fs/promises
//const readFilePromise = promisify(fs.readFile)

const fs = require('node:fs')

console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    console.log(text)
})

console.log('Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
    console.log(text)
})



//readFileSync es la forma syncrona de leer un fichero
//readFile es la forma asyncrona