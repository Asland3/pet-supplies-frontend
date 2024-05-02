"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const apiUrl =
  "https://primary-production-60cc.up.railway.app/wp-json/wc/v3/products";
const consumerKey = "ck_b46f27d236468c6f3a7fcd0fa4a28b91cafff9cc";
const consumerSecret = "cs_34386a69ecccd88fbdcddba9a2dba1594911e8ad";

export default function Home() {
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
    <main className="flex flex-col h-screen justify-center items-center ">
      <h1 className="text-4xl font-bold pb-10">Go to your desired api</h1>
      <div className="flex gap-5">
        <Button asChild size={"lg"}>
          <Link href={"/Wordpress"}>Wordpress</Link>
        </Button>
        <Button asChild size={"lg"}>
          <Link href={"/Laravel"}>Laravel</Link>
        </Button>
      </div>
    </main>
  );
}
