import Image from "next/image";

const Logo = ({ logo }) => {
  return (
    <Image
      className="cursor-pointer"
      src={logo}
      width={240}
      height={240}
      alt="Zora Logo"
    />
  );
};

export default Logo;
