
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";

export default function Wishlist() {
  const { wishlistItems } = useCart();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-2xl font-semibold mb-6">My Wishlist</h1>
        {wishlistItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              Your wishlist is empty. Start adding some items!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
