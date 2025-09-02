import React, { useState, useRef } from "react";
import Input from "./Input";
import { memo } from "react";
import Button from "./Button";

interface AddProductModalProps {
  onClose: () => void;
  onAddProduct: (product: {
    id: number;
    name: string;
    category: string;
    discountPercent: number;
    imageSrc: string;
    isNew: boolean;
    oldPrice: number;
    price: number;
    rating: number;
  }) => void;
}

const AddProductModal: React.FC<AddProductModalProps> = ({ onClose, onAddProduct }) => {
  const [product, setProduct] = useState({
    name: "",
    img: "",
    price: "",
    oldPrice: "",
    discount: "",
    isNew: false,
    category: "",
    rating: "",
  });

  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (field: string, value: any) => {
    setProduct((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPhotoPreview(url);
    handleChange("img", url);
  };


  const addProductBtnClick = () => {
    if (!product.name || !product.price) {
      alert("Name and price are required");
      return;
    }

    const id = Date.now();

    const newProduct = {
      id,
      name: product.name,
      category: product.category,
      discountPercent: Number(product.discount) || 0,
      imageSrc: product.img,
      isNew: product.isNew,
      oldPrice: Number(product.oldPrice) || 0,
      price: Number(product.price) || 0,
      rating: Number(product.rating) || 0,
    };

    onAddProduct(newProduct);
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: 48,
          borderRadius: 16,
          minWidth: 500,
          maxWidth: 700,
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <h2>Add Product</h2>

        <Input
          type="text"
          placeholder="name"
          value={product.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />

        <Input
          type="text"
          placeholder="category"
          value={product.category}
          onChange={(e) => handleChange("category", e.target.value)}
        />

        <Input
          type="text"
          placeholder="discount"
          value={product.discount}
          onChange={(e) => handleChange("discount", e.target.value)}
        />

        {/* Кнопка загрузки фото */}
        <div style={{ marginBottom: 16 }}>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handlePhotoChange}
          />
          <Button onClick={() => fileInputRef.current?.click()}>
            Upload Image
          </Button>
          {photoPreview && (
            <img
              src={photoPreview}
              alt="Preview"
              style={{ display: "block", marginTop: 10, maxWidth: "100%", maxHeight: 150 }}
            />
          )}
        </div>

        <label style={{ display: "block", marginBottom: 16 }}>
          <input
            type="checkbox"
            checked={product.isNew}
            onChange={(e) => handleChange("isNew", e.target.checked)}
            style={{ marginRight: 8 }}
          />
          New
        </label>

        <Input
          type="text"
          placeholder="old price"
          value={product.oldPrice}
          onChange={(e) => handleChange("oldPrice", e.target.value)}
        />

        <Input
          type="text"
          placeholder="price"
          value={product.price}
          onChange={(e) => handleChange("price", e.target.value)}
        />

        <Input
          type="number"
          placeholder="rating"
          value={product.rating}
          onChange={(e) => handleChange("rating", e.target.value)}
        />

        <Button onClick={addProductBtnClick}>Add</Button>
        <Button onClick={onClose} style={{ marginTop: 16 }}>
          Close
        </Button>
      </div>
    </div>
  );
};

export default AddProductModal;