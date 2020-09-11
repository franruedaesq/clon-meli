import React from 'react'
import {Link} from 'react-router-dom'
import './Pais.scss'

export default function Pais({name, meliID}) {
    return (

            <Link className="pais__item" to={`/home/${meliID}`} >{name}</Link>
        
    )
}
