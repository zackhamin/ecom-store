import Home from "./routes/home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navbar/navbar";
import Authentication from "./routes/authentication/authentication";

const Shop = () => {
  return <h2>Shop page</h2>;
};

const App = () => {
  return (
    <div className="categories-container">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
