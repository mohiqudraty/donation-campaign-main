import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";
import Hero from "../Hero/Hero";
import { createContext, useState } from "react";

export const SearchContext = createContext("");

const Home = () => {
  const [search, setSearch] = useState("");

  const cardsData = useLoaderData();
  return (
    <SearchContext.Provider value={[search, setSearch]}>
      <div className="container mx-auto px-4">
        <Hero></Hero>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 my-20  ">
          {" "}
          {cardsData
            .filter((c) =>
              search.toLowerCase() === ""
                ? c
                : c.category.toLowerCase().includes(search)
            )
            .map((card) => (
              <Card card={card} key={card.id}></Card>
            ))}
        </div>
      </div>
    </SearchContext.Provider>
  );
};

export default Home;
