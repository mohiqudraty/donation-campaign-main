import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonatedData } from "../../utility";
import DonationCards from "./DonationCards";

const Donation = () => {
  const donation = useLoaderData();
  const [donationInfo, setDonationInfo] = useState([]);
  const [showAllData, setShowAllData] = useState(4);

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
    <section className="mb-10 px-4">
      <div className="container mx-auto grid gap-6 sm:grid-cols-2 ">
        {donationInfo.slice(0, showAllData).map((info) => (
          <DonationCards key={info.id} info={info}></DonationCards>
        ))}
      </div>

      {donationInfo.length === 0 && (
        <div className="flex justify-center mt-20">
          <h2 className="text-3xl">Data Not Found</h2>
        </div>
      )}

      <div
        className={`${donationInfo.length === showAllData && "hidden"} 
${donationInfo.length < 4 && "hidden"}
        
        `}
      >
        {" "}
        <button
          onClick={() => setShowAllData(donationInfo.length)}
          className="py-4 px-8 text-white font-semibold bg-[#009444] block mx-auto rounded-lg my-8 
        "
        >
          See All
        </button>
      </div>
    </section>
  );
};

export default Donation;
