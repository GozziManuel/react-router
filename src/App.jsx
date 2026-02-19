import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ProductPage from "./pages/ProductPage";
import Header from "./layouts/defaultLayoutHeader";
import DetailedProductPage from "./pages/DetailedProductPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Header}>
          <Route index Component={Homepage} />
          <Route path="/AboutUs" Component={AboutUs} />
          <Route path="/ProductPage" Component={ProductPage} />
          <Route path="/ProductPage/:id" Component={DetailedProductPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
