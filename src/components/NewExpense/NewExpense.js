import React from 'react';
import ExpenseForm from './ExpenseForm.js';

import './NewExpense.css';

const NewExpense = (props) => {
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		// console.log(ExpenseData);
		props.onAddExpense(expenseData)
	};

	return (
		<div className="new-expense">
			{/* I'm creating a property to be able to get information of my ExpenseForm (name is up to me) */}
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	);
};

export default NewExpense;
