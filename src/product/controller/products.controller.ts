import { Controller, Get, Query, Res } from '@nestjs/common';
import { ProductsService } from '../service/product.service';
import { ProductDTO } from '../dto/product.dto';
import { Response } from 'express';
import { ProductResponse } from '../dto/productResponse.dto';
import { ParamsDTO } from '../dto/params.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getProducts(@Query() params: ParamsDTO, @Res() res: Response) {
    const { page, size } = { ...params };

    const [products, total] = await this.productsService.getProducts(params);

    const records = products.map(
      (product) =>
        new ProductDTO(
          product.id,
          product.name,
          product.brand,
          product.price,
          product.amount,
        ),
    );

    return res
      .status(records ? 200 : 204)
      .contentType('application/json')
      .send(new ProductResponse(page, size, total, records));
  }
}
