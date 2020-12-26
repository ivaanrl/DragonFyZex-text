import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import LeftItems from '../../components/navbar/items/leftItems';
import RightItems from '../../components/navbar/items/rightItems';
import MobileMenuToggle from '../../components/navbar/mobileMenuToggle';

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ isOpen, setIsOpen }: Props) => {
  return (
    <div className="flex flex-row justify-between items-center px-34px h-16 lg:h-96px border-b border-gray-300">
      <div className="hidden lg:block">
        <LeftItems />
      </div>
      <Link href="/">
        <img
          className="h-7 w-auto"
          src="/images/Skupos/logo.svg"
          alt="Skupos logo"
        />
      </Link>
      <div className="hidden lg:block">
        <RightItems />
      </div>
      <MobileMenuToggle isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Navbar;
