import Link from "next/link";
import Logo from "./Logo";
const Navbar = () => {
  return (
    <nav className=" px-4  sm:px-0 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="flex space-x-4">
          <button className="border border-white text-blue-500  py-2 px-4 sm:px-8 rounded-full hover:bg-opacity-80 hover:text-white transition duration-300">
            <Link href="/contact" className="text-white hover:text-gray-300">
              Contact Us
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
