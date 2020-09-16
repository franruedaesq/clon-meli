import React from 'react'
import './FavouriteHeart.scss'

export default function FavouriteHeart({onFavouriteClic, isFavourite}) {
    return (
        <>
         <svg onClick={onFavouriteClic} className={isFavourite? "favouriteHeart favouriteHeart--selected" : 'favouriteHeart'} xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20"><g ><path stroke="#3483FA" d="M10.977 2.705C11.93 1.618 13.162 1 14.895 1c3.333 0 5.607 2.152 5.607 6.274 0 .08-.002.16-.005.24-.107 2.596-1.876 5.253-4.737 7.892a33.77 33.77 0 0 1-3.165 2.57 32.447 32.447 0 0 1-1.45.983l-.394.243-.394-.243-.009-.005-.021-.014-.08-.05a32.447 32.447 0 0 1-1.34-.914 33.77 33.77 0 0 1-3.165-2.57c-2.86-2.639-4.63-5.296-4.737-7.892A5.839 5.839 0 0 1 1 7.274C1 3.152 3.274 1 6.607 1c1.733 0 2.966.618 3.918 1.705.056.064.137.165.226.282.09-.117.17-.218.226-.282z"></path></g></svg>   
        </>
    )
}
