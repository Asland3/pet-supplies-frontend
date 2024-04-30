"use client";

export default function Products() {
    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
