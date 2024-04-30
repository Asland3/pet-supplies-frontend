"use client";
// import { useEffect, useState } from "react";

// const apiUrl = "https://localhost/wordpress/wp-json/wc/v3/products";
// const consumerKey = "ck_3c269c0076474e1bbad34177cfde9c31d65b9c48";
// const consumerSecret = "cs_efc8a1fba8e80d2005175ed6bebd11fff72f64a0";

export default function Home() {
  // const [products, setProducts] = useState<any>([]);

  // useEffect(() => {
  //   fetch(apiUrl, {
  //     headers: {
  //       Authorization: `Basic ${Buffer.from(
  //         `${consumerKey}:${consumerSecret}`
  //       ).toString("base64")}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* {products.map((product: any) => (
        <div key={product.id}>
          <h1 dangerouslySetInnerHTML={{ __html: product.name }}></h1>
          <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
          <img
            style={{ width: "auto", height: "200px" }}
            src={product.images[0].src}
            alt=""
          />
          <p>Price: {product.price}</p>
        </div>
      ))} */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 md:p-8 lg:p-10">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-900">
          <img
            alt="Product 1"
            className="w-full h-60 object-cover"
            height="300"
            src="/DogAndCat.png"
            width="400"
          />
          <div className="p-4 space-y-2">
            <h3 className="text-lg font-semibold">Stylish Sunglasses</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Protect your eyes in style
            </p>
            <span className="text-lg font-semibold">$29.99</span>
          </div>
        </div>
      </div>
    </main>
  );
}
