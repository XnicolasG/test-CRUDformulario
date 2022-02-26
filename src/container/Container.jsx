import React from 'react'
import Formulario from '../components/Formulario'
import Usuario from '../components/Usuario'
import '../styles/MainStyles.css'

const Container = () => {
  return (
    <div className='ContPadre'>
        <Formulario />
        <Usuario />
    </div>
  )
}

export default Container