import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dexie from "dexie";
import NavBar from "../../components/NavBar/NavBar";
import BottomNav from "../../components/BottomNav/BottomNav";
// import Footer from '../../components/Footer/Footer'
import ProductItem from "../../components/ProductItem/ProductItem";
import "./Home.scss";

export default function Home(props) {
  // Inicializamos INDEX DB CON DEXIE
  const db = new Dexie("MELIClone");
  db.version(1).stores({
    product:
      "id,site_id,title,seller,price,currency_id,available_quantity,sold_quantity,buying_mode,listing_type_id,stop_time,condition,permalink,thumbnail,accepts_mercadopago,installments,address,shipping,seller_address,attributes,original_price,category_id,official_store_id,domain_id,catalog_product_id,tags,catalog_listing",
  });

  const { id } = useParams();
  let countryID = id;
  localStorage.setItem("countryID", countryID);
  const [productList, setProductList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [favouriteProduct, setFavouriteProduct] = useState([]);
  const [windowWidth, setWindowWidth] = useState({
    windowWidth: window.innerWidth,
  });

  useEffect(() => {
    window.addEventListener("resize", handleResize());
    setDB();
    fetchProducts();
  }, []);

  useEffect(() => {
    loadProducts();
  }, [productList]);

  const fetchProducts = async () => {
    let allProducts = await db.product.toArray();
    if (allProducts.length == 0) {
      let data = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.mercadolibre.com/sites/${countryID}/search?q=auriculares`
      );
      let jsonData = await data.json();
      let newList = jsonData.results.map((item) => {
        return { ...item, isFavourite: false };
      });
      newList.forEach((element) => {
        let putElem = db.product.put(element);
      });

      allProducts = await db.product.toArray();
      setProductList(allProducts);
    } else {
      setProductList(allProducts);
    }
  };

  const handleResize = (e) => {
    setWindowWidth({ windowWidth: window.innerWidth });
  };

  const loadProducts = async () => {
    let item = await productList.map((item) => {
      return (
        <ProductItem
          isFavourite={item.isFavourite}
          selectedAsFavourite={() =>
            selectedAsFavourite(item.id, item.isFavourite)
          }
          shipping={item.shipping.free_shipping}
          key={item.id}
          itemId={item.id}
          cuotas={item.installments}
          nombre={item.title}
          precio={item.price}
          imgUrl={item.thumbnail}
        />
      );
    });
    setFilteredList(item);
  };

  const setDB = async () => {
    const allProducts = await db.product.toArray();
    await setFavouriteProduct(allProducts);
  };

  const searchProduct = (e) => {
    let value = e.target.value.toLowerCase();
    let item = productList
      .filter((item) => {
        return item.title.toLowerCase().includes(value);
      })
      .map((item) => {
        return (
          <ProductItem
            isFavourite={item.isFavourite}
            selectedAsFavourite={() =>
              selectedAsFavourite(item.id, item.isFavourite)
            }
            shipping={item.shipping.free_shipping}
            key={item.id}
            itemId={item.id}
            cuotas={item.installments}
            nombre={item.title}
            precio={item.price}
            imgUrl={item.thumbnail}
          />
        );
      });
    setFilteredList(item);
  };

  const selectedAsFavourite = (id, isFavourite) => {
    let newList = productList.map((item) => {
      if (item.id !== id) {
        return item;
      } else {
        if (item.isFavourite == false) {
          const updatedItem = db.product.update(id, { isFavourite: true });
          return { ...item, isFavourite: true };
        } else {
          const updatedItem = db.product.update(id, { isFavourite: false });
          return { ...item, isFavourite: false };
        }
      }
    });
    setProductList(newList);
  };

  return (
    <div className="homeContainer">
      {windowWidth.windowWidth >= 768 ? "" : <BottomNav />}
      <NavBar searchProduct={searchProduct} />
      <div className="homeContainer__products">{filteredList}</div>
      {/* <Footer/> */}
    </div>
  );
}
