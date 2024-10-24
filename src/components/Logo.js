import Image from "next/image";

export default function Logo() {
  return (
    <Image
      className="cursor-pointer"
      src="/WhiteLogo.svg"
      width={200}
      height={150}
      alt="Innovatiview India Pvt. Ltd.Logo"
    />
  );
}
