import PetShopIcon from "@/public/Icons/PetShopIcon";
import Link from "next/link";
import { ModeToggle } from "./DarkMode";

export default function Header() {
  return (
    <nav className="flex h-20 w-full items-center px-4 gap-4 justify-between">
      <Link className="flex items-center py-2 text-lg font-semibold" href="/">
        <PetShopIcon className="w-16 h-16" />
        Pet Supplies
      </Link>
      <div className="flex gap-4 py-6">
        <Link
          className="flex items-center py-2 text-lg font-semibold hover:text-primary"
          href="/"
        >
          Home
        </Link>
        <Link
          className="flex items-center py-2 text-lg font-semibold hover:text-primary"
          href="About"
        >
          About
        </Link>
        <div className="flex items-center gap-2">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
