import { Category } from "../model/category.model";
import { Product } from "../model/product.model";

export interface CreateProductDto extends Omit<Product, "id" | "createdAt" | "updatedAt" | "category"> {
  categoryId: Category["id"];
}

export interface UpdateProductDto extends Partial<CreateProductDto> { }
