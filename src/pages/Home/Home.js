import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import ProductItem from '../../components/ProductItem/ProductItem'
import './Home.scss'

export default function Home(props) {
    const {id} = useParams()
    const [productList, setProductList ] = useState([])
    const [filteredList, setFilteredList ] = useState([])

    useEffect(() => {
        fetchProducts()
    }, [])

    let countryID = id

    const fetchProducts = async() => {
        let data = await fetch(`https://api.mercadolibre.com/sites/${countryID}/search?q=auriculares`);
        let jsonData = await data.json();
        setProductList(jsonData.results)
        let item = jsonData.results.map(item => <ProductItem key={item.id} itemId={item.id} cuotas={item.installments} nombre={item.title} precio={item.price} imgUrl={item.thumbnail} />)
        setFilteredList(item)
        console.log(jsonData)
    }

    const searchProduct = (e) => {

        let value = (e.target.value).toLowerCase()
        console.log(value)
        console.log(productList)

        let newList = productList.filter(item => (item.title.toLowerCase()).includes(value))

        let itemList = newList.map(item => <ProductItem key={item.id} itemId={item.id}  cuotas={item.installments}  nombre={item.title} precio={item.price} imgUrl={item.thumbnail} />)
        console.log(itemList)
        setFilteredList(itemList)
    }

    return (
        <div className="homeContainer" >
            <NavBar searchProduct={searchProduct}/>
            <div className="homeContainer__products">
                {filteredList}
            </div>
            {/* <Footer/> */}
        </div>
    )
}
