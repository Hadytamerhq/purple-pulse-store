
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart, Heart, Menu, Moon } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Cart from "./Cart";

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="py-4 flex flex-col gap-2">
              <Link
                to="/sales"
                className="p-2 hover:bg-accent/10 rounded-lg transition-all"
              >
                Sales
              </Link>
              <Link
                to="/wishlist"
                className="p-2 hover:bg-accent/10 rounded-lg transition-all"
              >
                Wishlist
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        <Link to="/" className="text-xl font-semibold">
          Store
        </Link>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Moon className="h-6 w-6" />
          </Button>
          <Link to="/wishlist">
            <Button variant="ghost" size="icon">
              <Heart className="h-6 w-6" />
            </Button>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent>
              <Cart />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
