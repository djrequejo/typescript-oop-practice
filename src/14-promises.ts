import axios from "axios";

(async () => {
  function delay(time: number) {
    const promise = new Promise<string>((resolver) => {
      setTimeout(() => {
        resolver("true");
      }, time);
    });
    return promise;
  }

  function getProducts() {
    const response = axios.get("https://api.escuelajs.co/api/v1/products");
    return response;
  }

  async function getProductsAsync() {
    const response = await axios.get("https://api.escuelajs.co/api/v1/products");
    return response.data;
  }

  console.log("---".repeat(10));
  const response = await delay(3000);
  console.log(response.toUpperCase());

  console.log("---".repeat(10));
  const products = await getProducts();
  console.log(products.data);

  console.log("---".repeat(10));
  const productsv2 = await getProductsAsync();
  console.log(productsv2);

})();

