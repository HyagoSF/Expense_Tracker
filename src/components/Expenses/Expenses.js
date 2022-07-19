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

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	// Third way to do the conditional - more readable

	//I create a variable and print it on my return, and if my filteredExpenses has any expense i'm gonna update my expensesContent to be those expenses

	let expensesContent = <p>No expenses found.</p>;

	if (filteredExpenses.length > 0) {
		expensesContent = filteredExpenses.map((expense) => (
			<ExpenseItem
				key={expense.id} //key to identify each element, not to overlay data
				title={expense.title}
				amount={expense.amount}
				date={expense.date}
			/>
		));
	}

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>

				{/* First way to do the conditional */}
				{/* {filteredExpenses.length === 0 ? (
					<p>
						There aren't expenses in this year! Select other please
					</p>
				) : (
					filteredExpenses.map((expense) => (
						<ExpenseItem
							key={expense.id} //key to identify each element, not to overlay data
							title={expense.title}
							amount={expense.amount}
							date={expense.date}
						/>
					))
				)} */}

				{/* Shorter - Second way to do the conditional */}
				{/* if the first one is true, run the paragraph */}
				{/* {filteredExpenses.length === 0 && <p>No expenses found!</p>}
				{filteredExpenses.length > 0 &&
					filteredExpenses.map((expense) => (
						<ExpenseItem
							key={expense.id} //key to identify each element, not to overlay data
							title={expense.title}
							amount={expense.amount}
							date={expense.date}
						/>
					))} */}

				{/* Third way and the best ↓ */}
				{expensesContent}

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
