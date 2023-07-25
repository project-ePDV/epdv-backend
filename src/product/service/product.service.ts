import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private usersRepository: Repository<Product>,
  ) {}

  getProducts(page: number, size = 6): Promise<[Product[], number]> {
    return this.usersRepository.findAndCount({
      skip: (page - 1) * size,
      take: size,
    });
  }
}
