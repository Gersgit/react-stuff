import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import ExpenseForm from "./components/NewExpense/ExpenseForm";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    text: "Toilet Paper",
    amount: 94.12,
    date: "2020-7-14",
  },
  { id: "e2", text: "New TV", amount: 799.49, date: "2021-2-12" },
  {
    id: "e3",
    text: "Car Insurance",
    amount: 294.67,
    date: "2021-2-28",
  },
  {
    id: "e4",
    text: "New Desk (Wooden)",
    amount: 450,
    date: "2021-5-12",
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const getExpenses = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random().toString(),
    };

    setExpenses((prevState) => [expenseData, ...prevState]);
  };

  return (
    <div>
      <ExpenseForm getExpenses={getExpenses} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
