import React, { useState } from 'react'
import '../styles/stylesForm.css'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from 'react-redux'
import { AgregarUsuario } from '../actions/actionDatos'
import Usuario from './Usuario'


const Formulario = () => {

    const dispatch = useDispatch()

    const [datos, setDatos] = useState({
        Nombre: '',
        Apellido: '',
        Fecha: '',
        Ciudad: ''
    })
    const { Nombre, Apellido, Fecha, Ciudad } = datos
    const handleInputChange = ({ target }) => {
        setDatos({
            ...datos,
            [target.name]: target.value
        })


    }

    const reset = () => {
        setDatos({
            Nombre: '',
            Apellido: '',
            Fecha: '',
            Ciudad: ''
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const objeto = {
            id: uuidv4(),
            Nombre,
            Apellido,
            Fecha,
            Ciudad
        }
        console.table(objeto)
        dispatch(AgregarUsuario(objeto))
        reset()
    }

    return (
        <>
            <form className='formulario' onSubmit={handleSubmit}>
                <h2 className='Titulo'>Ingrese sus datos</h2>
                <div className='ContInput'>
                    <input className='inputs' name='Nombre' value={Nombre} placeholder='Nombre' onChange={handleInputChange} type="text" required />
                    <input className='inputs' name='Apellido' value={Apellido} placeholder='Apellidos' onChange={handleInputChange} type="text" required />
                    <input className='inputs' name='Fecha' value={Fecha} onChange={handleInputChange} type="date" max='1999-12-31' required />
                    <input className='inputs' name='Ciudad' value={Ciudad} placeholder='Ciudad' onChange={handleInputChange} type="text" list='ciudades' required />
                    <datalist id='ciudades'>
                        <option value="Bogotá" />
                        <option value="Medellín" />
                        <option value="Cali" />
                        <option value="Barranquilla" />
                        <option value="Cartagena" />
                    </datalist>
                </div>
                <center>
                    <button /* type='submit' */ className='btn'>Guardar</button>
                </center>
            </form>
            <Usuario />
        </>
    )

}

export default Formulario