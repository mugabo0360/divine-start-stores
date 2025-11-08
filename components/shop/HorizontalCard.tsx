import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function HorizontalProductCard({ Product }: { Product: any }) {
  return (
    <div
      key={Product.id}
      className="border border-gray-200 p-4 rounded-lg bg-white flex items-center gap-6 hover:shadow-lg transition-shadow duration-300"
    >
      {/* Product Image */}
      <div className="flex-shrink-0">
        <Image
          src={Product.image}
          alt={Product.name}
          width={160}
          height={160}
          className="object-contain w-40 h-40 rounded-md"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{Product.name}</h2>
          <p className="text-gray-600 text-sm mb-1">In stock: {Product.Stock}</p>
          <p className="text-blue-600 text-base font-semibold">${Product.Price}</p>
        </div>

        {/* Order Button at the bottom */}
        <div className="mt-3">
          <Button className="w-36">Order Now</Button>
        </div>
      </div>
    </div>
  );
}
