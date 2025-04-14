import React, { useState } from "react";
import BillForm from "../components/BillForm.jsx";
import BillList from "../components/BillList.jsx";
import Notification from "../components/Notification.jsx";

const Home = () => {
  const [bills, setBills] = useState([]);
  const [notification, setNotification] = useState({
    show: false,
    message: "",
  });

  const handleAddBill = (bill) => {
    setBills([...bills, bill]);
  };

  const handleMarkPaid = (id) => {
    setBills(
      bills.map((bill) =>
        bill.id === id ? { ...bill, paid: !bill.paid } : bill
      )
    );
    setNotification({
      show: true,
      message: "Bill marked as paid!",
    });
  };

  const handleDelete = (id) => {
    setBills(bills.filter((bill) => bill.id !== id));
  };

  const handleCloseNotification = () => {
    setNotification({ show: false, message: "" });
  };

  return (
    <div className="app-container">
      <BillForm onSubmit={handleAddBill} />
      <BillList
        bills={bills}
        onMarkPaid={handleMarkPaid}
        onDelete={handleDelete}
      />
      <Notification
        message={notification.message}
        show={notification.show}
        onClose={handleCloseNotification}
      />
    </div>
  );
};

export default Home;
