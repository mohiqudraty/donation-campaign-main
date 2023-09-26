import { Chart } from "react-google-charts";

const donationData = [
  ["donation", "donated", "Expenses"],
  ["Your Donation", 660, 1120],
  ["Total Donation", 1030, 540],
];

const ChartOption = {
  title: "Donation Analytics",

  slices: [{ color: "#FF444A" }, { color: "#00C49F" }],
};

const Statistics = () => {
  return (
    <div>
      <Chart
        chartType="PieChart"
        data={donationData}
        options={ChartOption}
        width="100%"
        height="600px"
      />
    </div>
  );
};

export default Statistics;
