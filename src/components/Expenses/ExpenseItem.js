import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../Ui/Card";
import "./styles/ExpsenseItem.css";

const ExpenseItem = ({ date, text, amount, filterState }) => {
  const changeTitleBtn = () => {
    setCurrentTitle("new Title");
  };

  const [currentTitle, setCurrentTitle] = useState(text);

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{currentTitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={changeTitleBtn}>Change title?</button>
    </Card>
  );
};

export default ExpenseItem;
