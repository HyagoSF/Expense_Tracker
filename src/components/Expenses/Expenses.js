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

				{props.items
					.filter(
						(item) =>
							item.date.getFullYear().toString() === filteredYear
					)
					.map((expense) => (
						<ExpenseItem
							key={expense.id} //key to identify each element, not to overlay data
							title={expense.title}
							amount={expense.amount}
							date={expense.date}
						/>
					))}

				{/* react is capable of rendering it ↓ */}
				{/* {[<Card/>, <Card/>]} */}
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
