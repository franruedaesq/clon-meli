import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dexie from "dexie";
import "./Product.scss";
import NavBar from "../../components/NavBar/NavBar";
import ProductImgViewer from "../../components/ProductImgViewer/ProductImgViewer";
import MinProductImg from "../../components/MinProductImg/MinProductImg";
import ProductInfo from "../../components/ProductInfo/ProductInfo";

export default function Product(props) {
  // var db = new Dexie("");
  const { id } = useParams();
  let [item, setItem] = useState({});
  const [minImg, setMinImg] = useState([]);
  const [imgSelected, setImgSelected] = useState("");
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    fetchProduct();
    getIsFavouritev();
  }, []);

  const fetchProduct = async () => {
    let data = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.mercadolibre.com/items/${id}`
    );
    let jsonData = await data.json();
    setItem(jsonData);
    setMinImg(jsonData.pictures);
    setImgSelected(jsonData.pictures[0].url);
  };

  const getIsFavouritev = async () => {
    let db = await new Dexie("MELIClone").open();
    let isFav = await db.table("product").get(id);

    await setIsFav(isFav.isFavourite);
  };

  const onClickImgSelected = (url) => {
    setImgSelected(url);
  };

  const selectedAsFavourite = async (id, isFavorite) => {
    let db = await new Dexie("MELIClone").open();

    if (isFavorite) {
      const updatedItem = db
        .table("product")
        .update(id, { isFavourite: false });
      setIsFav(false);
    } else {
      const updatedItem = db.table("product").update(id, { isFavourite: true });
      setIsFav(true);
    }
  };

  return (
    <div className="product">
      <NavBar></NavBar>
      <div className="product__details">
        {/* <button onClick={getIsFavouritev} >On CLikc</button> */}
        <ProductImgViewer imgSelectedUrl={imgSelected}>
          {minImg.map((item) => (
            <MinProductImg
              imgSelected={() => onClickImgSelected(item.url)}
              key={item.id}
              srcImg={item.url}
            />
          ))}
        </ProductImgViewer>
        <ProductInfo
          data={item}
          selectedAsFavourite={selectedAsFavourite}
          isFav={isFav}
        />
      </div>
    </div>
  );
}
