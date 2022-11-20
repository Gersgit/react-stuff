const ExpenseDate = ({ date }) => {
  const setDate = new Date(date);

  const month = setDate.toLocaleString("en-US", { month: "long" });
  const day = setDate.toLocaleString("en-US", { day: "2-digit" });
  const year = setDate.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
