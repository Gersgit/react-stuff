import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ getExpenses }) => {
  const formObj = {
    text: "",
    amount: "",
    date: "",
  };

  const [formState, setFormState] = useState(formObj);

  const handleInputValue = (key, value) => {
    setFormState((prevState) => {
      return { ...prevState, [`${key}`]: value };
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    getExpenses(formState);
    setShowForm(false);
    setFormState(formObj);
  };

  const [showForm, setShowForm] = useState(false);

  return (
    <form onSubmit={submitForm}>
      {showForm && (
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              onChange={(e) => {
                handleInputValue(e.target.type, e.target.value);
              }}
              value={formState.text}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={(e) => {
                handleInputValue("amount", e.target.value);
              }}
              value={formState.amount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={(e) => {
                handleInputValue(e.target.type, e.target.value);
              }}
              value={formState.date}
            />
          </div>
        </div>
      )}

      {showForm ? (
        <div className="new-expense__actions">
          <button
            type="button"
            onClick={() => {
              setShowForm(false);
              setFormState(formObj);
            }}
          >
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      ) : (
        <div>
          <button type="button" onClick={() => setShowForm(true)}>
            Add New Expense
          </button>
        </div>
      )}
    </form>
  );
};

const NewExpense = ({ getExpenses }) => {
  return (
    <div className="new-expense">
      <ExpenseForm getExpenses={getExpenses} />
    </div>
  );
};

export default NewExpense;
