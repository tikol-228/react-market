import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Product Page</h1>
      <p>Product ID: <b>{id}</b></p>
    </div>
  );
};

export default ProductDetails;