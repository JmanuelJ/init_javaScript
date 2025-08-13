//Forma 1 de export default
// export default () => {
//     return {
//         name: 'Juan',
//         email: 'ejemplo@gmail.com'
//     };
// };

//Forma 2 de exportar default
const getUser = () => {
    return {
        name: 'Juan',
        email: 'ejemplo@gmail.com'
    };
};

export default getUser;