
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";

// Mock products data
const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    image: "https://placehold.co/400x400",
  },
  {
    id: 2,
    name: "Smart Watch Series 5",
    price: 399.99,
    image: "https://placehold.co/400x400",
  },
  {
    id: 3,
    name: "Laptop Pro 16",
    price: 1999.99,
    image: "https://placehold.co/400x400",
  },
  // Add more products as needed
];

export default function Shop() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
