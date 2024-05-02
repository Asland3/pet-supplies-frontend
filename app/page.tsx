"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
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
