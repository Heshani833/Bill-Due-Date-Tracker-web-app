import React, { useState } from "react";

const BillForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && amount && dueDate) {
      onSubmit({
        id: Date.now().toString(),
        name,
        amount: parseFloat(amount),
        dueDate,
        paid: false,
      });
      setName("");
      setAmount("");
      setDueDate("");
    }
  };

  return (
    <form className="bill-form" onSubmit={handleSubmit}>
      <h2>Add New Bill</h2>
      <div className="form-group">
        <label htmlFor="name">Bill Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., Electricity Bill"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="amount">Amount ($)</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          step="0.01"
          min="0"
          placeholder="e.g., 75.50"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="dueDate">Due Date</label>
        <input
          type="date"
          id="dueDate"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Bill</button>
    </form>
  );
};

export default BillForm;
