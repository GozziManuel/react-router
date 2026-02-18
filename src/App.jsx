import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ProductPage from "./pages/ProductPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index Component={Homepage} />
        <Route path="/AboutUs" Component={AboutUs} />
        <Route path="/ProductPage" Component={ProductPage} />
      </Routes>
    </BrowserRouter>
  );
}
