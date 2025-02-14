
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export default function Cart() {
  const { cartItems, removeFromCart, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="h-full flex flex-col items-center justify-center">
        <p className="text-lg font-medium mb-4">Your cart is empty</p>
        <p className="text-muted-foreground">Add some items to get started!</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <h2 className="text-lg font-semibold mb-4">Shopping Cart</h2>
      <div className="flex-1 overflow-auto">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 p-4 border-b animate-fade-in"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-16 w-16 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-muted-foreground">
                {item.quantity} × ${item.price}
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeFromCart(item.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
      <div className="border-t pt-4 mt-auto">
        <div className="flex justify-between mb-4">
          <span className="font-medium">Total</span>
          <span className="font-medium">${cartTotal.toFixed(2)}</span>
        </div>
        <Button className="w-full">Checkout</Button>
      </div>
    </div>
  );
}
