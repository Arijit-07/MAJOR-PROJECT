import { Link } from "react-router-dom";
import ProductCard from "../components/product-card"; // Ensure correct import

const Home = () => {
  const addToCartHandler = () => {
    console.log("Added to cart");
  };

  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Product
        <Link to="/search" className="findmore">
          more
        </Link>
      </h1>

      <main>
        <ProductCard
          productId="ahhjkjdksa"
          price={60000}
          name="MacBook"
          handler={addToCartHandler}
          photos="https://m.media-amazon.com/images/I/316ArzLeJ2L._SX300_SY300_QL70_FMwebp_.jpg"
        />
      </main>
    </div>
  );
};

export default Home;
