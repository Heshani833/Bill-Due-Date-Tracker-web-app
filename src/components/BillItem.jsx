import React from "react";

const BillItem = ({ bill, onMarkPaid, onDelete }) => {
  const isOverdue = new Date(bill.dueDate) < new Date() && !bill.paid;

  const getDaysRemaining = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dueDate = new Date(bill.dueDate);
    dueDate.setHours(0, 0, 0, 0);
    const diffTime = dueDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 0) return `${diffDays} day${diffDays === 1 ? "" : "s"} left`;
    if (diffDays === 0) return "Due today";
    return "Overdue";
  };

  return (
    <div className="bill-item">
      <div className="bill-details">
        <span className="bill-name">{bill.name}</span>
        <span className="bill-amount">${bill.amount.toFixed(2)}</span>
        <span className={`bill-due-date ${isOverdue ? "overdue" : ""}`}>
          Due: {bill.dueDate}
        </span>
        <span className="bill-remaining">{getDaysRemaining()}</span>
        <span className={`bill-status ${bill.paid ? "" : "unpaid"}`}>
          {bill.paid ? "Paid" : "Unpaid"}
        </span>
      </div>
      <div className="bill-actions">
        <button
          className="mark-paid-btn"
          onClick={() => onMarkPaid(bill.id)}
          disabled={bill.paid}
        >
          {bill.paid ? "Paid" : "Mark as Paid"}
        </button>
        <button className="delete-btn" onClick={() => onDelete(bill.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BillItem;
