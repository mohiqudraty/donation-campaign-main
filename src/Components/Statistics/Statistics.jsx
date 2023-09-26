import { Chart } from "react-google-charts";
import { useLoaderData } from "react-router-dom";
import { getDonatedData } from "../../utility";

const Statistics = () => {
  const totalDonation = useLoaderData();

  console.log(totalDonation.length);
  console.log(getDonatedData().length);

  const donationData = [
    ["donation", "donated"],
    ["Your Donation", getDonatedData().length ? getDonatedData().length : 0],
    [
      "Total Donation",
      totalDonation.length ? totalDonation.length - getDonatedData().length : 0,
    ],
  ];

  const ChartOption = {
    title: "Donation Analytics",
    legend: "bottom",
    slices: [{ color: "#FF444A" }, { color: "#00C49F" }],
  };

  return (
    <div className="container mx-auto">
      <Chart
        chartType="PieChart"
        data={donationData}
        options={ChartOption}
        width="100%"
        height="550px"
      />
    </div>
  );
};

export default Statistics;
