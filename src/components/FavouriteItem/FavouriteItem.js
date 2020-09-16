import React from "react";
import { Link } from "react-router-dom";
import ButtonAddToBasket from "../ButtonAddToBasket/ButtonAddToBasket";
import ButtonBuyItem from "../ButtonBuyItem/ButtonBuyItem";
import "./FavouriteItem.scss";

export default function FavouriteItem({ productData }) {
  return (
    <div className="FavouriteItem">
      <div className="FavouriteItem__img">
        <img src={productData.thumbnail} alt="" />
      </div>
      <Link to={`/product/${productData.id}`}>
        <div className="FavouriteItem__data">
          <p className="FavouriteItem__productName">{productData.title}</p>
          <p className="FavouriteItem__productPrice">${productData.price}</p>
          <p className="FavouriteItem__freeShipping">{}</p>
        </div>
      </Link>
      <div className="FavouriteItem__buttons">
        {/* <button className="FavouriteItem__agregarAlCarrito">Agregar al carrito</button> */}
        {/* <button className="FavouriteItem__comprar">Comprar</button> */}
        <ButtonAddToBasket />
        <ButtonBuyItem />
      </div>
    </div>
  );
}
