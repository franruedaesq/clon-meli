import React, {useEffect, useState} from 'react'

export default function Product(props) {

    let  productId = props.match.params.id

    let [item, setItem] = useState({})

    useEffect(() => {
        fetchProduct();
    }, [])

    console.log(props.match.params.id)
    const fetchProduct = async() => {
        let data = await fetch(`https://api.mercadolibre.com/items/${productId}`);
        let jsonData = await data.json();
        setItem(jsonData)
        console.log(jsonData)
    }
    return (
        <div>
            <h1>{item.title}</h1>
        </div>
    )
}
