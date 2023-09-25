import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonatedData } from "../../utility";

const Donation = () => {
  const donation = useLoaderData();
  const [donationInfo, setDonationInfo] = useState([]);

  useEffect(() => {
    const donatedId = getDonatedData();
    if (donation.length > 0) {
      const donatedData = donation.filter((donate) =>
        donatedId.includes(donate.id)
      );
      setDonationInfo(donatedData);
    }
  }, [donation]);

  return (
    <div className="container mx-auto grid sm:grid-cols-2">
      {donationInfo.map((info) => (
        <>
          <div
            className={`flex flex-col items-center rounded-lg shadow
            ${info.category === "health" && "bg-[#0052FF26]"}
         ${info.category === "education" && "bg-[#FF444A26]"}
         ${info.category === "clothing" && "bg-[#79C23F26]"}
         ${info.category === "food" && "bg-[#F8714726]"}
            
            `}
          >
            <div className="flex gap-6 flex-col sm:flex-row  p-4">
              <img className="w-5/12" src={info.picture} alt="" />
              <div>
                <div className="flex">
                  {" "}
                  <h3
                    className={`text-sm py-1 px-2 rounded
                  ${info.category === "health" && "bg-[#0052FF33]"}
                  ${info.category === "education" && "bg-[#FF444A33]"}
                  ${info.category === "clothing" && "bg-[#79C23F33]"}
                  ${info.category === "food" && "bg-[#F871472D]"}
                `}
                  >
                    {info.category}
                  </h3>
                </div>
                <h2 className="text-2xl font-semibold my-2">{info.title}</h2>
                <h3
                  className={`font-semibold mb-5
                
                ${info.category === "health" && "text-[#0052FF]"}
                ${info.category === "education" && "text-[#FF444A]"}
                ${info.category === "clothing" && "text-[#79C23F]"}
                ${info.category === "food" && "text-[#F87147]"}
                
                `}
                >
                  ${info.price}.00
                </h3>
                <button
                  className={`text-lg font-semibold text-white py-2 px-4 rounded
                
                ${info.category === "health" && "bg-[#0052FF]"}
                ${info.category === "education" && "bg-[#FF444A]"}
                ${info.category === "clothing" && "bg-[#79C23F]"}
                ${info.category === "food" && "bg-[#F87147]"}
                
                `}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Donation;
