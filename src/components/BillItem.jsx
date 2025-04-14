import React from "react";

const BillItem = ({ bill, onMarkPaid, onDelete }) => {
  const isOverdue = new Date(bill.dueDate) < new Date() && !bill.paid;

  return (
    <div className="bill-item">
      <div className="bill-details">
        <span className="bill-name">{bill.name}</span>
        <span className="bill-amount">${bill.amount.toFixed(2)}</span>
        <span className={`bill-due-date ${isOverdue ? "overdue" : ""}`}>
          Due: {bill.dueDate}
        </span>
        <span className="bill-status">{bill.paid ? "Paid" : "Unpaid"}</span>
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
