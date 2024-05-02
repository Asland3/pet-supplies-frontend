"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const apiUrl =
  "https://primary-production-60cc.up.railway.app/wp-json/wc/v3/products";
const consumerKey = "ck_b46f27d236468c6f3a7fcd0fa4a28b91cafff9cc";
const consumerSecret = "cs_34386a69ecccd88fbdcddba9a2dba1594911e8ad";

function Wordpress() {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    fetch(apiUrl, {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${consumerKey}:${consumerSecret}`
        ).toString("base64")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-10">
      <h1 className="text-3xl font-bold text-center ">WordPress Api</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 md:p-8 lg:p-10">
        {products.map((product: any) => (
          <div
            className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-900"
            key={product.id}
          >
            <Image
              alt={product.name}
              className="w-full h-60 object-cover"
              height="300"
              src={product.images[0].src}
              width="400"
            />
            <div className="p-4 space-y-2">
              <h3
                className="text-lg font-semibold"
                dangerouslySetInnerHTML={{ __html: product.name }}
              ></h3>
              <p
                className="text-gray-500 dark:text-gray-400 text-sm"
                dangerouslySetInnerHTML={{ __html: product.description }}
              ></p>
              <span className="text-lg font-semibold">{`$${product.price}`}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Wordpress;
