import React from "react";
import BillItem from "./BillItem";

const BillList = ({ bills, onMarkPaid, onDelete }) => {
  return (
    <div className="bills-list">
      <h3>Bills</h3>
      {bills.length === 0 ? (
        <p className="no-bills">No bills added yet.</p>
      ) : (
        <div className="bills-container">
          {bills.map((bill) => (
            <BillItem
              key={bill.id}
              bill={bill}
              onMarkPaid={onMarkPaid}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BillList;
