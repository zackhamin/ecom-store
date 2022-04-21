import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.jsx";
import { ProductsContext } from "../../contexts/products.context";
import "./shop.styless.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} products={product} />
      ))}
    </div>
  );
};
export default Shop;
