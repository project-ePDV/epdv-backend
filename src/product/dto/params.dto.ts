import { IsNotEmpty, IsNumberString, IsOptional } from 'class-validator';

export class ParamsDTO {
  @IsNotEmpty()
  @IsNumberString()
  page: number;

  @IsOptional()
  @IsNumberString()
  size: number;

  @IsOptional()
  @IsNumberString()
  minPrice: number;

  @IsOptional()
  @IsNumberString()
  maxPrice: number;
}
