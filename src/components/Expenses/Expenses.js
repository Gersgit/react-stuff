import { useState } from "react";
import Card from "../Ui/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ expenses }) => {
  const [filterState, setFilterState] = useState("2020");

  const filteredExpenses = expenses.filter(
    (expense) => new Date(expense.date).getFullYear().toString() === filterState
  );

  return (
    <Card className="expenses">
      <ExpensesFilter filter={{ filterState, setFilterState }} />
      <ExpensesChart filteredExpenses={filteredExpenses} />
      <ExpensesList filter={{ filterState, filteredExpenses }} />
    </Card>
  );
};

export default Expenses;
