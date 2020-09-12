import React from 'react'
import './ProductInfo.scss'

export default function ProductInfo({data}) {
    console.log(data)



    return (
        <div className="productInfo">
            <div className="productInfo__nuevo">{data.condition? 'Nuevo': 'Usado'} | {data.sold_quantity} vendidos </div>
            <div className="productInfo__title"><p>{data.title}</p></div>
            <div className="productInfo__precio-anterior"><p>{data.original_price? `$ ${data.original_price}`:null}</p></div>
            <div className="productInfo__price"><p>${data.price}</p></div>
            <div className="productInfo__envio-normalidad"><span>Envio con normalidad</span></div>
            <div className="productInfo__envio-gratis">
            <figure className="productInfo__camion"><svg xmlns="http://www.w3.org/2000/svg"  width="18" height="15" viewBox="0 0 18 15"><path fill-rule="nonzero" d="M7.763 12.207a2.398 2.398 0 0 1-4.726 0H1.8a1.8 1.8 0 0 1-1.8-1.8V2.195a1.8 1.8 0 0 1 1.8-1.8h8.445a1.8 1.8 0 0 1 1.8 1.8v.568l3.322.035L18 6.821v5.386h-2.394a2.398 2.398 0 0 1-4.727 0H7.763zm-.1-1.2h3.182V2.195a.6.6 0 0 0-.6-.6H1.8a.6.6 0 0 0-.6.6v8.212a.6.6 0 0 0 .6.6h1.337a2.399 2.399 0 0 1 4.526 0zm7.843 0H16.8V7.179l-2.086-3.187-2.669-.029v5.76a2.399 2.399 0 0 1 3.461 1.284zm-2.263 1.99a1.198 1.198 0 1 0 0-2.395 1.198 1.198 0 0 0 0 2.396zm-7.843 0a1.198 1.198 0 1 0 0-2.395 1.198 1.198 0 0 0 0 2.396z"></path></svg></figure>
                <span>Llega gratis el jueves <svg  className="productInfo__full" width="41" height="13" viewBox="0 0 41 13" xmlns="http://www.w3.org/2000/svg"><path fill-rule="nonzero" d="M2.628 0h5.255L5.255 4.643h4.38L2.628 13l1.751-5.571H0L2.628 0zm11.589 9.533h-1.959l1.674-7.515H19.5l-.376 1.69h-3.61l-.25 1.172h3.519l-.376 1.69h-3.53l-.66 2.963zm9.468.136c-2.334 0-3.484-1.105-3.484-2.682 0-.124.034-.383.057-.496l1.002-4.473h1.992l-.99 4.428c-.012.057-.034.18-.034.316.011.62.49 1.217 1.457 1.217 1.048 0 1.583-.654 1.776-1.533l.991-4.428h1.981l-.99 4.462c-.41 1.825-1.412 3.189-3.758 3.189zm10.118-.136h-5.01l1.673-7.515h1.959l-1.287 5.825h3.04l-.375 1.69zm6.678 0h-5.01l1.674-7.515h1.959l-1.287 5.825h3.04l-.376 1.69z"></path></svg></span></div>
            <div className="productInfo__stock-disponible"><p>Stock disponible</p></div>
            <button className="productInfo__button productInfo--blue">Comprar ahora</button>
            <button className="productInfo__button productInfo--lightblue">Agregar al carrito</button>

            <ul className="productInfo__caracteristicas">
    {data.attributes? data.attributes.map(item => <li>{item.name}: {item.value_name}</li>) : null}
            </ul>
        </div>
    )
}
