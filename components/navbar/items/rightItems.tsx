const RightItems = () => {
  return (
    <div className="flex flex-1 flex-col lg:flex-row lg:justify-end mt-5 lg:mt-0">
      <button className="navbar-link h-12 remove-button-outline border border-gray-400 rounded-full mb-5 lg:mb-0 lg:border-transparent order-2 lg:order-1">
        Log in
      </button>
      <button className="button primary-button remove-button-outline h-12 mb-5 lg:mb-0 lg:order-2">
        Get started
      </button>
    </div>
  );
};

export default RightItems;
