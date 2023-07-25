export class ProductDTO {
  constructor(
    public id: number,
    public name: string,
    public brand: string,
    public price: number,
    public amount: number,
  ) {}
}
