import axios from "axios";
import { Product } from "../model/product.model";
import { Category } from "../model/category.model";
import { UpdateProductDto } from "../dtos/product.dto";
import { faker } from "@faker-js/faker";

export class BaseHttpService<TypeClass> {
  // private data: TypeClass[] = [];

  constructor(private url: string) { }

  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }

  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put<TypeClass>(`${this.url}/${id}`, changes);
    return data;
  }
}

// const service = new BaseHttpService<string>();
// service.getAll();

// const service1 = new BaseHttpService<number>();
// service1.getAll();

(async () => {
  console.log("-----".repeat(10));
  const productUrl: string = "https://api.escuelajs.co/api/v1/products";
  const productService = new BaseHttpService<Product>(productUrl);
  const products = await productService.getAll();
  console.log("products:", products.length);

  console.log("-----".repeat(10));
  productService.update<Product["id"], UpdateProductDto>(1, {
    title: faker.commerce.productName(),
  });

  console.log("-----".repeat(10));
  const categoryUrl: string = "https://api.escuelajs.co/api/v1/categories";
  const categoryService = new BaseHttpService<Category>(categoryUrl);
  const categories = await categoryService.getAll();
  console.log("categories:", categories.length);
})();

