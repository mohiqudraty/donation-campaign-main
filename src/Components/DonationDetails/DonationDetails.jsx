import { useLoaderData, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { storeDonation } from "../../utility";

const DonationDetails = () => {
  const donationDetails = useLoaderData();

  const { id } = useParams();
  const idInt = parseInt(id);

  const details = donationDetails.find((details) => details.id === idInt);
  const { picture_hr, title, description, price, category } = details;

  const handleDonation = (price) => {
    storeDonation(idInt);

    toast.success(`You Have Successfully Donated $${price}`);
  };

  return (
    <section className="container mx-auto mb-10 px-4">
      <div className="relative">
        <img
          className=" w-full h-[450px] rounded-lg  object-cover"
          src={picture_hr}
          alt={title}
        />
        <div className="absolute bottom-0 left-0 right-0 rounded-bl-lg rounded-br-lg bg-black opacity-60 h-24 flex items-center"></div>
        <button
          onClick={() => handleDonation(price)}
          className={`py-4 px-7 text-xl font-semibold text-white absolute bottom-0 left-0  sm:bottom-5 sm:left-6 right-0 sm:w-56
            ${category === "health" && "bg-[#0052FF]"}
           ${category === "education" && "bg-[#FF444A]"}
           ${category === "clothing" && "bg-[#79C23F]"}
           ${category === "food" && "bg-[#F87147]"}
          
          `}
        >{`Donate $${price}`}</button>
      </div>
      <div>
        <div className="text-4xl font-bold mt-14 mb-6">{title}</div>
        <div className="text-justify">{description}</div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default DonationDetails;
