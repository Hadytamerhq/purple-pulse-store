
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();

  return (
    <div className="product-card animate-scale-in">
      <img
        src={product.image}
        alt={product.name}
        className="w-full aspect-square object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-medium line-clamp-1">{product.name}</h3>
            <div className="flex items-center gap-2">
              {product.discounted ? (
                <>
                  <span className="text-sm line-through text-muted-foreground">
                    ${product.price}
                  </span>
                  <span className="font-medium text-primary">
                    ${product.discountedPrice}
                  </span>
                </>
              ) : (
                <span className="font-medium">${product.price}</span>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => toggleWishlist(product)}
              className={cn(
                "btn-icon",
                isInWishlist(product.id) && "text-accent"
              )}
            >
              <Heart className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => addToCart(product)}
              className="btn-icon"
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
