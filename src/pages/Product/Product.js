import React, {useEffect, useState} from 'react'
import {useParams } from 'react-router-dom'

export default function Product(props) {

    const {id} = useParams()
    let [item, setItem] = useState({})

    useEffect(() => {
        fetchProduct();
    }, [])

    console.log(id)

    const fetchProduct = async() => {
        let data = await fetch(`https://api.mercadolibre.com/items/${id}`);
        let jsonData = await data.json();
        setItem(jsonData)
        console.log(jsonData)
    }
    return (
        <div>
            <h2>{item.title}</h2>
        </div>
    )
}
