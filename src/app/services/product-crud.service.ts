import { UpdateProductDto } from "../dtos/product.dto";
import { Product } from "../model/product.model";
import { ProductHttpService } from "./product-http2.service";

export class ProductCRUDService {
  private productUrl: string = "https://api.escuelajs.co/api/v1/products";
  private http = new ProductHttpService(this.productUrl);

  async update(id: Product["id"], changes: UpdateProductDto) {
    return this.http.update(id, changes);
  }

}
