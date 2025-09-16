export interface Donut {
  id: string;
  name: string;
  icon: string;
  price: number;
  // ? = optional
  promo?: 'new' | 'limited';
  description: string;
}
