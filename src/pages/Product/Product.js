import React, {useEffect, useState} from 'react'
import {useParams } from 'react-router-dom'
import './Product.scss'
import NavBar from '../../components/NavBar/NavBar'
import ProductImgViewer from '../../components/ProductImgViewer/ProductImgViewer'
import MinProductImg from '../../components/MinProductImg/MinProductImg'
import ProductInfo from '../../components/ProductInfo/ProductInfo'

export default function Product(props) {

    const {id} = useParams()
    let [item, setItem] = useState({})
    const [minImg, setMinImg] = useState([])
    const [imgSelected, setImgSelected] = useState('')

    useEffect(() => {
        fetchProduct()
    }, [])

    console.log(id)

    const fetchProduct = async() => {
        let data = await fetch(`https://cors-anywhere.herokuapp.com/https://api.mercadolibre.com/items/${id}`);
        let jsonData = await data.json();
        setItem(jsonData)
        // console.log(jsonData)
        setMinImg(jsonData.pictures)

        setImgSelected(jsonData.pictures[0].url)
    }

    const onClickImgSelected = (url) => {
        setImgSelected(url)
        console.log(url)
    }

    return (
        <div className="product">
            <NavBar></NavBar>
            <div className="product__details">
                <ProductImgViewer imgSelectedUrl={imgSelected}>
                    {minImg.map(item => <MinProductImg imgSelected={() => onClickImgSelected(item.url)} key={item.id} srcImg={item.url}/>)}
                </ProductImgViewer>
                <ProductInfo data={item} />
            </div>

        </div>
    )
}
