import MobileProducts from './products/mobileProducts';
import NavbarLinks from './navbarLinks';
import RightItems from './rightItems';

const MobileOptions = () => {
  return (
    <div className="flex flex-1 flex-col lg:flex-row">
      <MobileProducts />
      <NavbarLinks />
      <RightItems />
    </div>
  );
};

export default MobileOptions;
