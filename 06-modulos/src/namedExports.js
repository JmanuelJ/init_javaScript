//Forma 1 de exportar: Palabra Export al inicio de lo que se va a exportar
// export const nombre = 'Juan';

// export const getPost = () => {
//     return ['Post1', 'Post2', 'Post3'];
// }


//Forma 2 de exportar: Palabra export al final con todo lo que se va a exportar
const nombre = 'Juan';

const getPost = () => {
    return ['Post1', 'Post2', 'Post3'];
}

export{nombre, getPost};