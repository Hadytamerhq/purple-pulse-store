
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";

const saleProducts: Product[] = [
  {
    id: 4,
    name: "Gaming Mouse RGB Pro",
    price: 79.99,
    discounted: true,
    discountedPrice: 49.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80",
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    price: 159.99,
    discounted: true,
    discountedPrice: 129.99,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&q=80",
  },
];

export default function Sales() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-2xl font-semibold mb-6">Special Offers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {saleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
