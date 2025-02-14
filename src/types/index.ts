
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  discounted?: boolean;
  discountedPrice?: number;
}

export interface CartItem extends Product {
  quantity: number;
}
