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
    
        default:
            return state
    }
}