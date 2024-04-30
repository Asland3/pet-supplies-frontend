import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import Image from "next/image";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="w-full p-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Pet Supplies
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                We offer a wide range of pet supplies to keep your furry friends
                happy and healthy. Shop our selection of food, toys, and
                accessories today!
              </p>
            </div>
            <Image
              alt="About"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              height="550"
              src="/DogAndCat.png"
              width="550"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Story
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Pet Supplies was founded in 2010. Since its inception, the company
              has been dedicated to providing high-quality products and services
              for pets and their owners. Over the years, Pet Supplies has grown
              into a trusted name in the pet care industry, known for its wide
              range of products and commitment to animal welfare.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meet the Team
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our team of experts is dedicated to providing the best products
              for your pets. With years of experience in the pet care industry,
              we are committed to helping you find the perfect products for your
              furry friends.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
            <div className="flex flex-col items-center space-y-2">
              <Avatar className="h-20 w-20">
                <AvatarImage alt="John Doe" src="/placeholder-avatar.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <div className="font-medium">John Doe</div>
                <div className="text-gray-500 dark:text-gray-400">
                  Co-founder
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Avatar className="h-20 w-20">
                <AvatarImage alt="Jane Smith" src="/placeholder-avatar.jpg" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <div className="font-medium">Jane Smith</div>
                <div className="text-gray-500 dark:text-gray-400">
                  Chief Technology Officer
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Avatar className="h-20 w-20">
                <AvatarImage alt="Bob Johnson" src="/placeholder-avatar.jpg" />
                <AvatarFallback>BJ</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <div className="font-medium">Bob Johnson</div>
                <div className="text-gray-500 dark:text-gray-400">
                  Head of Engineering
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Avatar className="h-20 w-20">
                <AvatarImage alt="Sarah Lee" src="/placeholder-avatar.jpg" />
                <AvatarFallback>SL</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <div className="font-medium">Sarah Lee</div>
                <div className="text-gray-500 dark:text-gray-400">
                  Product Manager
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
