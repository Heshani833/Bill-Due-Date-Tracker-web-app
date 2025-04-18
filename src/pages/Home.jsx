import React, { useState, useEffect } from "react";
import BillForm from "../components/BillForm.jsx";
import BillList from "../components/BillList.jsx";
import Notification from "../components/Notification.jsx";

const Home = () => {
  const [bills, setBills] = useState([]);
  const [notifications, setNotifications] = useState([]);

  const handleAddBill = (bill) => {
    setBills([...bills, bill]);
  };

  const handleMarkPaid = (id) => {
    setBills(
      bills.map((bill) =>
        bill.id === id ? { ...bill, paid: !bill.paid } : bill
      )
    );
    if (!bills.find((bill) => bill.id === id).paid) {
      addNotification("Bill marked as paid!", "success");
    }
  };

  const handleDelete = (id) => {
    setBills(bills.filter((bill) => bill.id !== id));
  };

  const addNotification = (message, type) => {
    const id = Date.now().toString();
    setNotifications((prev) => [...prev, { id, message, type, show: true }]);
  };

  const closeNotification = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, show: false } : n))
    );
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 300);
  };

  useEffect(() => {
    const checkDueBills = () => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      bills.forEach((bill) => {
        if (bill.paid) return;
        const dueDate = new Date(bill.dueDate);
        dueDate.setHours(0, 0, 0, 0);
        const diffTime = dueDate - today;
        const diffDays = diffTime / (1000 * 60 * 60 * 24);
        if (diffDays <= 1 && diffDays >= 0) {
          addNotification(
            `Warning: "${bill.name}" is due ${
              diffDays === 0 ? "today" : "tomorrow"
            }!`,
            "warning"
          );
        }
      });
    };

    checkDueBills();
  }, [bills]);

  return (
    <div className="app-container">
      <BillForm onSubmit={handleAddBill} />
      <BillList
        bills={bills}
        onMarkPaid={handleMarkPaid}
        onDelete={handleDelete}
      />
      {notifications.map((notif) => (
        <Notification
          key={notif.id}
          message={notif.message}
          type={notif.type}
          show={notif.show}
          onClose={() => closeNotification(notif.id)}
        />
      ))}
    </div>
  );
};

export default Home;
