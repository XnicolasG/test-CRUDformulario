import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { GrEdit } from 'react-icons/gr'
import '../styles/StylesTable.css'
import { useDispatch } from 'react-redux'
import { EliminarUsuario } from '../actions/actionDatos'
import Swal from 'sweetalert2'
import {ModalUser} from './ModalUser'



const Usuario = () => {

    const dispatch = useDispatch()
    const { datos } = useSelector(store => store.usuarios)
    console.table(datos)

    const [show, setShow] = useState(false)
    const [datosModal, setDatosModal] = useState([])



    const handleDelete = (id) => {
        dispatch(EliminarUsuario(id))
    }

    const Alertar = (id) => {
        Swal.fire({
            title: '¿Esta seguro de eliminar este usuario ?',
            showDenyButton: true,
            // showCancelButton: true,
            confirmButtonText: 'Borrar',
            denyButtonText: `Cancelar`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Usuario Eliminado!', '', 'success')
                handleDelete(id)
            } else if (result.isDenied) {
                console.log('no borro')
                Swal.fire('Usuario no ha sido eliminado', '', 'info')
            }
        })
    }

    
    const edit = (id)=>{
        const findData = datos.find(user => user.id === id)
        console.log(findData)
        setShow(true)
        setDatosModal(findData)
        handleDelete(id)
        
    }

    return (
        <>
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

                <tbody  >

                    {
                        datos.map(usuario => (
                            <tr className='results' key={usuario.id}>
                                <td className='Filas'>{usuario.Nombre}</td>
                                <td className='Filas'>{usuario.Apellido}</td>
                                <td className='Filas'>{usuario.Fecha}</td>
                                <td className='Filas'>{usuario.Ciudad}</td>
                                <td><button className='btnList' onClick={() => Alertar(usuario.id)} ><RiDeleteBin6Line /></button></td>
                                <td><button className='btnList' onClick={() => edit(usuario.id)} ><GrEdit /></button></td>
                            </tr>

                        ))
                    }

                </tbody>
            </table>
               {
                   show === true ? <ModalUser datosU={datosModal} show={show} set={setShow} /> : console.log('no paso')
               }     
        </>
    )
}

export default Usuario