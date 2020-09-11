import React from 'react'
import Pais from '../../components/Pais/Pais'
import './Paises.scss'
import logoML from './logo-ml.png'

export default function Paises() {

    const listaPaises = [
        "Argentina",
        "Bolivia",
        "Brasil",
        "Chile",
        "Colombia",
        "Costa Rica",
        "Cuba",
        "Ecuador",
        "El Salvador",
        "Guatemala",
        "Haití",
        "Honduras",
        "México",
        "Nicaragua",
        "Panamá",
        "Paraguay",
        "Perú",
        "Uruguay",
        "Venezuela",
    ]

    let lista = listaPaises.map(item => <Pais name={item}></Pais>)
    return (
        <div className="containerPaises">
            <img src={logoML} alt="" className="containerPaises__logo"/>

            <div className="containerPaises__listaPaises">
            {lista}
            </div>
            
        </div>
    )
}
