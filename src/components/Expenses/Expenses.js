import React, { useState } from 'react';

import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2021');

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>

				<ExpenseItem
					title={props.data[0].title}
					amount={props.data[0].amount}
					date={props.data[0].date}
				/>

				<ExpenseItem
					title={props.data[1].title}
					amount={props.data[1].amount}
					date={props.data[1].date}
				/>

				<ExpenseItem
					title={props.data[2].title}
					amount={props.data[2].amount}
					date={props.data[2].date}
				/>

				<ExpenseItem
					title={props.data[3].title}
					amount={props.data[3].amount}
					date={props.data[3].date}
				/>
			</Card>
		</div>

		// <div className="expenses">
		// 	{props.data.map((e) => {
		// 		return (
		// 			<ExpenseItem
		// 				title={e.title}
		// 				amount={e.amount}
		// 				date={e.date}
		// 			></ExpenseItem>
		// 		);
		// 	})}
		// </div>
	);
};

export default Expenses;
