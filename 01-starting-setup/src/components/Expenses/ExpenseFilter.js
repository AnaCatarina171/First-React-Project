import React from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {

  const yearSelectedHandler = (event) => {

    const selectedYear = event.target.value;

    props.onYearSelected(selectedYear);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={yearSelectedHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          <option value='0'>All</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;