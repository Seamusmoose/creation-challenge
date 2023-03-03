import Image from "next/image";
import Logo from "../../public/creaition_logo.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex space-bt">
      <Image src={Logo} height={100} width={100} alt="logo" />
      <ul className="nav">
        <Link
          style={{ textDecoration: "none" }}
          href={"https://www.creaition.io/"}
        >
          <li className="button grid">HomePage</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
