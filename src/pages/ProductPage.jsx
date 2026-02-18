import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

export default function ProductPage() {
  return (
    <>
      <Header />
      <main className="container-sm my-5">
        <div className="row g-3">
          <ProductCard />
        </div>
      </main>
    </>
  );
}
