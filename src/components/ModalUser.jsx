import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { AgregarUsuario } from '../actions/actionDatos'
import { v4 as uuidv4 } from 'uuid'

export const ModalUser = ({datosU, show, set}) => {

    const dispatch = useDispatch()
    const [datos , setDatos] = useState({
        Nombre: '',
        Apellido: '',
        Fecha: '',
        Ciudad:''
    })
    const { Nombre, Apellido, Fecha, Ciudad } = datos
    

    const handleInputChange = ({ target }) => {
        setDatos({
            ...datos,
            [target.name]: target.value
        })
        
        
    }

    const cerrar = () => {set(false) }
        

    const handleSubmit = (e) => {
        e.preventDefault()
        const objeto = {
            id:uuidv4(),
            Nombre,
            Apellido,
            Fecha,
            Ciudad
        }
        console.table(objeto)        
        dispatch(AgregarUsuario(objeto))
        cerrar()
    }
        
    return (
        <Modal show={show}>
            <Modal.Body>
            <form className='formulario2' onSubmit={handleSubmit}>
            <h2 className='Titulo'>Actualizar datos de {datosU.Nombre} {datosU.Apellido}</h2>
            <div className='ContInput'>
                <input className='inputs' name='Nombre'  value={Nombre} onChange={handleInputChange} placeholder='Nombre' type="text" required />
                <input className='inputs' name='Apellido'  value={Apellido} onChange={handleInputChange} placeholder='Apellidos' type="text" required />
                <input className='inputs' name='Fecha' value={Fecha} onChange={handleInputChange} placeholder='Fecha' type="date" max='1999-12-31' required />
                <input className='inputs' name='Ciudad' value={Ciudad} onChange={handleInputChange} placeholder='Ciudad' type="text" list='ciudades' required />
                <datalist id='ciudades'>
                    <option value="Bogotá" />
                    <option value="Medellín" />
                    <option value="Cali" />
                    <option value="Barranquilla" />
                    <option value="Cartagena" />
                </datalist>
            </div>
            <center>
                <button type='submit' className='btn'>Guardar</button>
            </center>
        </form>
            </Modal.Body>
        
        </Modal>
    )
}

