import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";
const Cards = () => {
  const cardsData = useLoaderData();

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 my-20 ">
      {" "}
      {cardsData.map((card) => (
        <Card card={card} key={card.id}></Card>
      ))}
    </div>
  );
};

export default Cards;
