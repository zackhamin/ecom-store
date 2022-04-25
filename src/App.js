import Home from "./routes/home";
import Shop from "./routes/shop/shop";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navbar/navbar";
import Authentication from "./routes/authentication/authentication";
import Checkout from "./routes/checkout/checkout";

const App = () => {
  return (
    <div className="categories-container">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
