import Link from "next/link";
import Logo from "./Logo";

const Navbar = ({ logo, contact }) => {
  return (
    <nav className="px-4 sm:px-0 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link href="/">
            <Logo logo={logo} />
          </Link>
        </div>

        {contact && (
          <div className="flex cursor-pointer">
            <Link href="/contact">
              <button className="border border-white text-white py-3 px-4 sm:px-8 rounded-none hover:bg-white hover:text-black transition duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
