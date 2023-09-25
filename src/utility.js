const getDonatedData = () => {
  const donatedData = localStorage.getItem("donatedData");
  if (donatedData) {
    return JSON.parse(donatedData);
  }
  return [];
};

const storeDonation = (id) => {
  const donatedData = getDonatedData();
  const isDonated = donatedData.find((donationId) => donationId === id);
  if (!isDonated) {
    donatedData.push(id);
    localStorage.setItem("donatedData", JSON.stringify(donatedData));
  }
};

export { getDonatedData, storeDonation };
