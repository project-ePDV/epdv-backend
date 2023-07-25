import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column({ length: 50, nullable: false })
  name: string;

  @Column({ nullable: false })
  amount: number;

  @Column({ length: 50, nullable: true })
  brand: string;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0,
    nullable: false,
  })
  price: number;

  @Column({ type: 'tinyint', default: 1, nullable: false })
  status: number;
}
