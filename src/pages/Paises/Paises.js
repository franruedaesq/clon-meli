import React, { useEffect, useState } from "react";
import Pais from "../../components/Pais/Pais";
import "./Paises.scss";
import logoML from "./logo-ml.png";
import { Link } from "react-router-dom";

export default function Paises() {
  let [paisData, setPaisData] = useState([]);

  useEffect(() => {
    fetchPaises();
  }, []);

  const fetchPaises = async () => {
    let data = await fetch(
      "https://cors-anywhere.herokuapp.com/https://api.mercadolibre.com/sites"
    );
    let jsonData = await data.json();
    setPaisData(jsonData);
  };

  const listaPaises = [
    "Argentina",
    "Bolivia",
    "Brasil",
    "Chile",
    "Colombia",
    "Costa Rica",
    "Cuba",
    "Ecuador",
    "El Salvador",
    "Guatemala",
    "Haití",
    "Honduras",
    "México",
    "Nicaragua",
    "Panamá",
    "Paraguay",
    "Perú",
    "Uruguay",
    "Venezuela",
  ];

  let lista = paisData.map((item) => (
    <Pais meliID={item.id} name={item.name} key={item.id}></Pais>
  ));
  return (
    <div className="containerPaises">
      <img src={logoML} alt="" className="containerPaises__logo" />

      <div className="containerPaises__listaPaises">{lista}</div>
    </div>
  );
}
