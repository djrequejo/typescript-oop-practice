import { faker } from "@faker-js/faker";
import { ProductMemoryService } from "./services/product-memory.service";

const productService = new ProductMemoryService();

productService.create({
  title: faker.commerce.productName(),
  price: parseFloat(faker.commerce.price()),
  description: faker.commerce.productDescription(),
  categoryId: faker.number.int({ min: 1, max: 100 }),
  images: []
})

const products = productService.getAll();
console.log(products);

const productId = products[0].id;

productService.update(productId, {
  title: faker.commerce.productName()
})

const response = productService.findOne(productId);
console.log(response);
