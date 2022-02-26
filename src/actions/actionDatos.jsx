import { Types } from '../types/type'

export const AgregarUsuario = (usuario) => {
    return {
        type: Types.Registro,
        payload: usuario
    }
}
export const EliminarUsuario = (id) => {
    return{
        type: Types.Eliminar,
        payload: id
    }
}
export const ModificarUsuario = () => {
    return{
        type: Types.Modificar,
        payload:''
    }
}