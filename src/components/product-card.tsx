import { FaExpandAlt, FaPlus } from "react-icons/fa";
type ProductsProps = {
  productId: string;
  photos: {
    url: string;
    public_id: string;
  }[];
  name: string;
  price: number;
  stock: number;
  handler: () => void;
};
const server="jhajgdhak"

const ProductCard = ({
  productId,
  price,
  name,
  photos,
  stock,
  handler,
}: ProductsProps) => {
  return (
    <div className="product-card">
      <img src={photos} alt={name} />
      <p>{name}</p>
      <span>₹{price}</span>

      <div>
        <button onClick={() => handler()}>
            <FaPlus />

        </button>
      </div>
    </div>
  );
};

export default ProductCard;
