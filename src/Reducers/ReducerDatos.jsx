import { Types } from "../types/type";

const initialState = {
    datos: []
}

export const ReducerUsuarios = (state = initialState, action) => {
    switch (action.type) {
        case Types.Registro:
            return{
                datos: [
                    ...state.datos,
                    action.payload
                ]
            }
        case Types.Eliminar:
            return{
                datos: state.datos.filter(usuario=> usuario.id !== action.payload)
            }
        case Types.Modificar:
            
            return{
              
                
            }    
        default:
            return state
    }
}