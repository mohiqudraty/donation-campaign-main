/* eslint-disable react/prop-types */
const DonationCards = ({ info }) => {
  const {
    picture_hr,
    category,
    title,
    price,
    bg_color,
    card_color,
    text_color,
  } = info;

  // console.log(info);
  return (
    <div
      className={`flex flex-col max-w-[600px] items-center rounded-lg shadow


`}
      style={{ backgroundColor: bg_color }}
    >
      <div className="flex  flex-col gap-6 items-center  sm:justify-start sm:flex-row  p-4">
        <img className="w-5/12" src={picture_hr} alt="" />
        <div>
          <div className="flex">
            {" "}
            <h3
              className={`text-sm py-1 px-2 rounded
  
  `}
              style={{ backgroundColor: card_color }}
            >
              {category}
            </h3>
          </div>
          <h2 className="text-2xl font-semibold my-2">{title}</h2>
          <h3
            className={`font-semibold mb-5
  

  
  `}
            style={{ color: text_color }}
          >
            ${price}.00
          </h3>
          <button
            style={{ backgroundColor: text_color }}
            className={`text-lg font-semibold text-white py-2 px-4 rounded
  
  
  
  `}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationCards;

// ${category === "health" && "bg-[#0052FF]"}
// ${category === "education" && "bg-[#FF444A]"}
// ${category === "clothing" && "bg-[#79C23F]"}
// ${category === "food" && "bg-[#F87147]"}
