import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
import { ParamsDTO } from '../dto/params.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  getProducts(params: ParamsDTO) {
    const { minValue, maxValue, filter } = params;
    const builder = this.productsRepository.createQueryBuilder('product');

    if (minValue) {
      builder.andWhere(`${filter} >= :minValue`, { minValue });
    }

    if (maxValue) {
      builder.andWhere(`${filter} <= :maxValue`, { maxValue });
    }

    return builder
      .skip((params.page - 1) * params.size)
      .take(params.size)
      .getManyAndCount();
  }
}
