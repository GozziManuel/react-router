import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const apiGetProducts = () => {
    axios.get("https://fakestoreapi.com/").then((res) => setProducts(res.data));
  };
  return (
    <>
      <Header />
    </>
  );
}
