/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const { id, picture, title, category } = card;

  return (
    <Link to={`/${id}`}>
      <div
        className={`card  shadow-xl h-96  rounded-lg cursor-pointer 
        ${category === "health" && "bg-[#0052FF26]"}
         ${category === "education" && "bg-[#FF444A26]"}
         ${category === "clothing" && "bg-[#79C23F26]"}
         ${category === "food" && "bg-[#F8714726]"}
        
        `}
      >
        <figure>
          <img className="w-full" src={picture} alt={title} />
        </figure>
        <div className="card-body">
          <div className="flex">
            <h2
              className={` text-sm font-medium py-1 px-2 rounded 
              ${category === "health" && "bg-[#0052FF33]"}
              ${category === "education" && "bg-[#FF444A33]"}
              ${category === "clothing" && "bg-[#79C23F33]"}
              ${category === "food" && "bg-[#F871472D]"}
            
            
            `}
            >
              {category}
            </h2>
          </div>
          <h3
            className={`text-xl font-semibold 
           ${category === "health" && "text-[#0052FF]"}
           ${category === "education" && "text-[#FF444A]"}
           ${category === "clothing" && "text-[#79C23F]"}
           ${category === "food" && "text-[#F87147]"}
          
          `}
          >
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
