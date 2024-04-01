import { faker } from "@faker-js/faker";
import { Product } from "../model/product.model";
import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";
import { ProductService } from "./product.service.model";

export class ProductMemoryService implements ProductService {
  private products: Product[] = [];

  create(data: CreateProductDto): Product {
    const newProduct: Product = {
      ...data,
      id: faker.number.int(),
      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        image: faker.image.url(),
      },
    }
    return this.add(newProduct);
  }

  add(product: Product) {
    this.products.push(product);
    return product;
  }

  update(id: Product["id"], changes: UpdateProductDto): Product {
    const index = this.products.findIndex(item => item.id === id);
    const prevData = this.products[index];
    this.products[index] = {
      ...prevData,
      ...changes,
    }
    return this.products[index];
  }

  findOne(id: Product["id"]) {
    return this.products.find(item => item.id === id);
  }

  getAll() {
    return this.products;
  }
}
