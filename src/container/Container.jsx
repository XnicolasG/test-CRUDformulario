import React from 'react'
import Formulario from '../components/Formulario'
import '../styles/MainStyles.css'
import { GoMarkGithub } from 'react-icons/go'

const Container = () => {
  return (
    <div className='ContPadre'>
      <div className="btn-wrap">
        <span>Repositorio</span>
        <div className="container">
          <center>
          <a target='_blank' rel="noreferrer" href="https://github.com/XnicolasG/test-CRUDformulario" className="fab">
            <GoMarkGithub />
          </a>
          </center>
          </div>
      </div>
      <Formulario />
    </div>
  )
}

export default Container