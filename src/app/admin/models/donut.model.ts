export interface Donut {
  id: string;
  name: string;
  icon: string;
  price: number;
  // ? = optional
  promo?: boolean;
  description: string;
}
