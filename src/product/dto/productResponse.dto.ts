import { ProductDTO } from './product.dto';

export class ProductResponse {
  constructor(
    public page: number,
    public size: number,
    public total: number,
    public records: ProductDTO[],
  ) {}
}
