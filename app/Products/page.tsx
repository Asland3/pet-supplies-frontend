"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    fetch("https://pet-supplies-laravel-production.up.railway.app/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-44">
      <h1 className="text-3xl font-bold text-center">Laravel Api</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 md:p-8 lg:p-10">
        {products.map((product: any) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-900"
          >
            <Image
              alt={product.name}
              className="w-full h-60 object-cover"
              height="300"
              src={product.image}
              width="400"
            />
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {product.description}
              </p>
              <span className="text-lg font-semibold">${product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

// Products:1 Access to fetch at 'https://pet-supplies-laravel-production.up.railway.app/products' from origin 'http://localhost:3000' has
// been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs,
// set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
