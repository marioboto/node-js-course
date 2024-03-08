const {readFile} = require('node:fs/promises');

// IIFE - Inmidiatly invoked function expression
(
    async () => {
        console.log('Leyendo el primer archivo...')
        const text = await readFile('./archivo.txt', 'utf-8')
        console.log('primer texto: ', text)

        console.log('Hacer cosas mientras lee el archivo...')

        console.log('Leyendo el segundo archivo...')
        const secondText = await readFile('./archivo2.txt', 'utf-8')
        console.log('segundo texto: ', secondText)
    }
)()

/*

//Esta función es la misma que la de arriba

async function init () {
        console.log('Leyendo el primer archivo...')
        const text = await readFile('./archivo.txt', 'utf-8')
        console.log('primer texto: ', text)

        console.log('Hacer cosas mientras lee el archivo...')

        console.log('Leyendo el segundo archivo...')
        const secondText = await readFile('./archivo2.txt', 'utf-8')
        console.log('segundo texto: ', secondText)s
}

init()
*/

//readFileSync es la forma syncrona de leer un fichero
//readFile es la forma asyncrona