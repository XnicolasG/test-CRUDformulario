
export const saveLocalStorage = (state) =>{
    localStorage.setItem('Usuarios', JSON.stringify(state))
}
export const getLocalStorage = () =>{
    const datosLocal = localStorage.getItem('Usuarios')
    if(datosLocal === null){
        return undefined
    }

    return JSON.parse(datosLocal)
}