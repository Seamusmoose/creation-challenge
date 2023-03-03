import Image from "next/image";
import Logo from "../../public/creaition_logo.svg";

const Navbar = () => {
  return (
    <div className="flex space-bt">
      <Image src={Logo} height={100} width={100} alt="logo" />
      <ul className="nav">
        <li>HomePage</li>
      </ul>
    </div>
  );
};

export default Navbar;
