const Hero = () => {
  return (
    <div className="container flex flex-col mx-auto max-w-screen-xl relative py-16 lg:py-28 px-6">
      <div className="w-full lg:w-110 ">
        <h1 className="font-semibold text-5xl lg:text-5xl mb-5  max-w-lg lg:w-full">
          Connecting the convenience retail industry
        </h1>
        <h3 className="mb-10 text-xl max-w-lg lg:w-full">
          Skupos powers smarter, more profitable retail by connecting
          independent stores, brands, and distributors on one platform.
        </h3>
        <div className="mb-16 flex flex-col w-full lg:flex-row lg:w-auto ">
          <button className="button primary-button big-button mb-5 lg:mb-0 remove-button-outline">
            I'm a Retailer
          </button>
          <button className="button secondary-button big-button lg:ml-24px remove-button-outline">
            I'm a Brand
          </button>
        </div>
        <div>
          <p className="text-gray-500 font-semibold text-sm mb-7">
            Over 14,000 retailers & brands use Skupos
          </p>
          <div className="flex flex-row items-center">
            <img
              className="hero-brand-logo"
              src="/images/brandLogos/Juul_logo.svg"
              alt="juul logo"
            />
            <img
              className="hero-brand-logo ml-48px"
              src="/images/brandLogos/cocaCola_logo.svg"
              alt="cocacola logo"
            />
            <img
              className="hero-brand-logo ml-48px"
              src="/images/brandLogos/hourEnergy_logo.svg"
              alt="5 hour energy logo"
            />
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 h-full mx-auto lg:max-w-1.5xl xl:max-w-4xl lg:py-16 md:py-20 lg:py-28">
        <img src={'/images/hero/homepage-hero.jpg'} alt="skupos illustration" />
      </div>
    </div>
  );
};

export default Hero;
