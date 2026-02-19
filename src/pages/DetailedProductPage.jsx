import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailedProductPage() {
  const [detailedProduct, SetdetailedProduct] = useState([]);
  const { id } = useParams();
  const GetIdProduct = () => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      console.log(res.data);
      SetdetailedProduct(res.data);
    });
  };
  useEffect(GetIdProduct, []);

  return (
    <>
      <h1>{detailedProduct.title}</h1>
      <img src={detailedProduct.image} alt={detailedProduct.title} />
      <p>{detailedProduct.description}</p>
    </>
  );
}
