import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/goldenstein-logo.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Goldenstein Group">
      <Image
        src={logo}
        alt="Goldenstein Group Logo"
        width={150}
        height={28}
      />
    </Link>
  );
}
