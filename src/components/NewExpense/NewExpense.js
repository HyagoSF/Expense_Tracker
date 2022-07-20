import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm.js';

import './NewExpense.css';

const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false);

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		// console.log(ExpenseData);
		props.onAddExpense(expenseData);
		setIsEditing(false);
	};

	const startEditingHandler = () => {
		setIsEditing(true);
	};

	const stopEditingHandler = () => {
		setIsEditing(false);
	};

	return (
		<div className="new-expense">
			{/* BOTH BELOW METHODS WORKS WELL, JUST DIFFERENT SYNTAX */}

			{/* {!isEditing && (
				<button onClick={startEditingHandler}> Add New Expense</button>
			)}
			{isEditing && (
				<ExpenseForm
					onCancel={stopEditingHandler}
					onSaveExpenseData={saveExpenseDataHandler}
					on
				/>
			)} */}

			<div>
				{isEditing === false ? (
					<button onClick={startEditingHandler}>
						Add New Expense
					</button>
				) : (
					<ExpenseForm
						onCancel={stopEditingHandler}
						onSaveExpenseData={saveExpenseDataHandler}
						on
					/>
				)}
			</div>
		</div>
	);
};

export default NewExpense;
