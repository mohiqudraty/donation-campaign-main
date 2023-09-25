const Hero = () => {
  return (
    <div className="hero min-h-[400px] bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-full">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-10">
            I Grow By Helping People In Need
          </h2>
          <form>
            <div className="flex">
              <div className="relative w-3/5 mx-auto">
                <input
                  type="search"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg  border border-gray-300"
                  placeholder="Health, Education, Food, Clothing....."
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-[#FF444A] rounded-r-lg"
                >
                  <span className="">Search</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
