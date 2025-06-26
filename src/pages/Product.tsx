import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div>
      <h1>Product Page</h1>
      <p>ID: {id}</p>
    </div>
  );
};

export default Product;