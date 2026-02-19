import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function DetailedProductPage() {
  const { id } = useParams();
  const GetIdProduct = () => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      console.log(res.data);
    });
  };
  useEffect(GetIdProduct, []);

  return <h1>prodotto {id}</h1>;
}
