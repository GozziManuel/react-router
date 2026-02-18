import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const apiGetProducts = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
      console.log(res.data);
    });
  };
  useEffect(apiGetProducts, []);
  return (
    <>
      <Header />
      <main className="container-sm my-5">
        <div className="row g-3">
          {products.map((element, index) => (
            <div className="col-6">
              <div className="card h-100 justify-content-center" key={index}>
                <img
                  src={element.image}
                  className="card-img-top cardimg"
                  alt="Product"
                />
                <div className="card-body">
                  <h5 className="card-title">{element.title}</h5>
                  <p className="card-text">{element.description}</p>
                  <p className="fw-bold">{element.price}&euro;</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
