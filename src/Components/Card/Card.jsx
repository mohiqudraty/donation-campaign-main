import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const { id, picture, title, category, bg_color, card_color, text_color } =
    card;
  // console.log(text_color);

  return (
    <Link to={`/${id}`}>
      <div
        className={`card  shadow-xl h-96  rounded-lg cursor-pointer 
        
        `}
        style={{
          backgroundColor: bg_color,
        }}
      >
        <figure>
          <img className="w-full" src={picture} alt={title} />
        </figure>
        <div className="card-body">
          <div className="flex">
            <h2
              className={` text-sm font-medium py-1 px-2 rounded `}
              style={{
                backgroundColor: card_color,
              }}
            >
              {category}
            </h2>
          </div>
          <h3
            className={`text-xl font-semibold 
          `}
            style={{
              color: text_color,
            }}
          >
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
};
Card.propTypes = {
  card: PropTypes.object.isRequired,
};

export default Card;
