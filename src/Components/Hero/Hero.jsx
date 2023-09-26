import { useContext } from "react";
import { SearchContext } from "../Home/Home";

const Hero = () => {
  const [search, setSearch] = useContext(SearchContext);
  console.log(search);
  const handleSearch = (e) => {
    e.preventDefault();

    setSearch(e.target.search.value);
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/src/assets/donation.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-full">
          <h2 className="text-2xl  sm:text-3xl lg:text-5xl font-bold mb-10">
            I Grow By Helping People In Need
          </h2>
          <form onSubmit={handleSearch}>
            <div className="flex">
              <div className="relative w-3/5 mx-auto">
                <input
                  type="search"
                  name="search"
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
