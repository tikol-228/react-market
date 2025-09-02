import axios from "axios";
import { Product } from "../store/productsSlice";

const API_URL = "http://localhost:3001/products";

export async function fetchProducts(): Promise<Product[]> {
  const res = await axios.get<Product[]>(API_URL);
  return res.data;
}

export async function createProduct(user: Omit<Product, "id">): Promise<Product> {
  const res = await axios.post<Product>(API_URL, user);
  return res.data;
}

export async function updateProduct(
  id: string,
  user: Omit<Product, "id">
): Promise<Product> {
  const res = await axios.put<Product>(`${API_URL}/${id}`, user);
  return res.data;
}

export async function deleteProduct(id: string): Promise<void> {
  await axios.delete(`${API_URL}/${id}`);
}