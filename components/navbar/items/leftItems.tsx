import NavbarLinks from './navbarLinks';
import Products from './products/products';

const LeftItems = () => {
  return (
    <div className="flex flex-1 flex-col lg:flex-row">
      <Products />
      <NavbarLinks />
    </div>
  );
};

export default LeftItems;
