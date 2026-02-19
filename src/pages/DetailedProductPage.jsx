import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function DetailedProductPage() {
  const { id } = useParams();
  const [detailedProduct, SetdetailedProduct] = useState([]);

  const GetIdProduct = () => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      console.log(res.data);
      SetdetailedProduct(res.data);
    });
    //   .catch((error) => {
    //     if (error?.response?.status === 404) useNavigate("/404");
    //   });
  };
  useEffect(GetIdProduct, []);
  if (!detailedProduct) return <h1>Loading...</h1>;
  return (
    <>
      <h1>{detailedProduct.title}</h1>
      <img src={detailedProduct.image} alt={detailedProduct.title} />
      <p>{detailedProduct.description}</p>
    </>
  );
}
