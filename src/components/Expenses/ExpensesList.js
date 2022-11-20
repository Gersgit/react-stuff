import "./styles/ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ filter }) => {
  return (
    <ul className="expenses-list">
      {filter.filteredExpenses.length !== 0 ? (
        filter.filteredExpenses.map((e) => (
          <ExpenseItem
            key={e.id}
            text={e.text}
            amount={e.amount}
            date={e.date}
            filterState={filter.filterState}
          />
        ))
      ) : (
        <h2 className="expenses-list__fallback">
          There are no expenses for {filter.filterState}
        </h2>
      )}
    </ul>
  );
};

export default ExpensesList;
