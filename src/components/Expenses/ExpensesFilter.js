import React from "react";

import "./styles/ExpenseFilter.css";

const ExpensesFilter = ({ filter }) => {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select
          value={filter.filterState}
          onChange={(e) => {
            filter.setFilterState(e.target.value);
          }}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
