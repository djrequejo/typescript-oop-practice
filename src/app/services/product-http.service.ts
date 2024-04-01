import axios from "axios";
import { UpdateProductDto, CreateProductDto } from "../dtos/product.dto";
import { Product } from "../model/product.model";
import { ProductService } from "./product.service.model";
import { DatabaseModule } from "@faker-js/faker";

export class ProductHttpService implements ProductService {
  private url: string = "https://api.escuelajs.co/api/v1/products";

  async getAll() {
    const { data } = await axios.get<Product[]>(this.url);
    return data;
  }
  async update(id: Product["id"], changes: UpdateProductDto) {
    const { data } = await axios.put<Product>(`${this.url}/${id}`, changes);
    return data;
  }
  async create(dto: CreateProductDto) {
    const { data } = await axios.post<Product>(this.url, dto);
    return data;
  }
  async findOne(id: Product["id"]) {
    const { data } = await axios.get<Product>(`${this.url}/${id}`);
    return data;
  }
}
