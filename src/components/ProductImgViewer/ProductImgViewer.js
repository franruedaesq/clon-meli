import React, { Children } from 'react'
import './ProductImgViewer.scss'

export default function ProductImgViewer({children, imgSelectedUrl}) {
    return (
        <div className="productImgViewer">
            <div className="miniImgContainer">
                {children}
            </div>
            <div className="productImgViewer__imgContainer">
                <img className='productImgViewer__img' src={imgSelectedUrl} alt=""/>
            </div>
        </div>
    )
}
