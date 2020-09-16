import React, { useEffect, useState } from 'react'
import './Favourites.scss'
import Dexie from 'dexie'
import NavBar from '../../components/NavBar/NavBar'
import FavouriteItem from '../../components/FavouriteItem/FavouriteItem'

export default function Favourites() {

    const [favouriteList, setFavouriteList] = useState([])

    useEffect(() => {
        getFavouritesProducts()
    }, [])

    const getFavouritesProducts = async () => {
        let db = await new Dexie("MELIClone").open();
        const productList = await db.table('product').toArray()
        const favProducts = await productList.filter(item => item.isFavourite == true)
        await setFavouriteList(favProducts)
    } 


    return (
        <div>
            <NavBar/>
            <div className="favourites">
                <h2>Favoritos</h2>
                {favouriteList.map(item => <FavouriteItem productData={item} key={item.id}/>)}
                {/* <FavouriteItem /> */}
            </div>
            
        </div>
    )
}
