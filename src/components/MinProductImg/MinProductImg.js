import React from 'react'
import './MinProductImg.scss'

export default function MinProductImg({srcImg, imgSelected}) {
    console.log(srcImg)
    return (
        <>
                <img onClick={imgSelected} className='minProductImg__item' src={srcImg} alt=""/>
        </>
    )
}
