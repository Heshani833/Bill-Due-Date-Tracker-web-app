// src/pages/Home.jsx
import React from "react";
import BillForm from "../components/BillForm.jsx";

const Home = () => {
  const handleAddBill = (bill) => {
    console.log("New bill added:", bill);
  };

  return (
    <div>
      <BillForm onSubmit={handleAddBill} />
    </div>
  );
};

export default Home;
