const RightItems = () => {
  return (
    <div className="flex flex-1 flex-col lg:flex-row lg:justify-end mt-5 lg:mt-0">
      <button className="navbar-link h-12 border border-gray-400 rounded-full lg:border-transparent order-2 lg:order-1">
        Log in
      </button>
      <button className="button primary-button h-12 hover:bg-gray-800 mb-5 lg:mb-0 lg:order-2">
        Get started
      </button>
    </div>
  );
};

export default RightItems;
