import axios from "axios";
import { Product } from "./model/product.model";

(async () => {
  // async function getProducts(): Promise<Product[]> {
  //   const { data } = await axios.get("https://api.escuelajs.co/api/v1/products");
  //   return data;
  // }

  async function getProducts() {
    const { data } = await axios.get<Product[]>("https://api.escuelajs.co/api/v1/products");
    return data;
  }

  // async function getProductsWihtoutCompatibility() {
  //   const { data } = await axios.get("https://api.escuelajs.co/api/v1/products");
  //   return data as Product[];
  // }

  console.log("---".repeat(10));
  const products = await getProducts();
  console.log(products.map(item => `${item.id} - ${item.title}`));

})();

