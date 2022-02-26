import React from 'react'
import { useSelector } from 'react-redux'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {GrEdit} from 'react-icons/gr'
import '../styles/StylesTable.css'

const Usuario = () => {
  const {datos} = useSelector(store=> store.usuarios)
    console.table(datos)
  
    return (
        <table className='Listado'>
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    datos.map(usuario=>(
                <tr className='results' key={usuario.id}>
                    <td className='Filas'>{usuario.Nombre}</td>
                    <td className='Filas'>{usuario.Apellido}</td>
                    <td className='Filas'>{usuario.Fecha}</td>
                    <td className='Filas'>{usuario.Ciudad}</td>
                    <td className='Filas'><button className='btnList'><RiDeleteBin6Line /></button></td>
                    <td className='Filas'><button className='btnList'><GrEdit /></button></td>
                </tr>
                
            ))    
            }
            </tbody>
        </table>
    )
}

export default Usuario