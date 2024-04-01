import { faker } from "@faker-js/faker";
import { ProductHttpService } from "./services/product-http.service"


(async () => {
  const productService = new ProductHttpService();

  try {
    console.log("-----".repeat(10));
    const products = await productService.getAll();
    console.log(products.length);
    console.log(products.map(item => item.price));

    console.log("-----".repeat(10));
    console.log(products[6]);
    const productId = products[6].id;
    await productService.update(productId, {
      price: parseFloat(faker.commerce.price()),
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
    })

    console.log("-----".repeat(10));
    const product = await productService.findOne(productId);
    console.log(product);
  } catch (error) {
    console.error(error);
  }

})();
