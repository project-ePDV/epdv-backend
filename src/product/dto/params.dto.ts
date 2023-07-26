import {
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
} from 'class-validator';

enum filterProperty {
  amount,
  price,
}

export class ParamsDTO {
  @IsNotEmpty()
  @IsNumberString()
  page: number;

  @IsNotEmpty()
  @IsNumberString()
  size: number;

  @IsOptional()
  @IsEnum(filterProperty)
  filter: filterProperty;

  @IsOptional()
  @IsNumberString()
  minValue: number;

  @IsOptional()
  @IsNumberString()
  maxValue: number;
}
