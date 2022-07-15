import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
	//using Multiple states
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	// //using One state instead
	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: '',
	// 	enteredAmount: '',
	// 	enteredDate: '',
	// });

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
		// // if I depend on the previous states, should use this function here, instead of the one above
		// setUserInput((prevState) => {
		// 	return { ...prevState, enteredTitle: event.target.value };
		// });
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);

		// setUserInput((prevState) => {
		// 	return { ...prevState, enteredAmount: event.target.value };
		// });
	};

	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);

		// setUserInput((prevState) => {
		// 	return { ...prevState, enteredDate: event.target.value };
		// });
	};

	const submitHandler = (event) => {
		event.preventDefault(); //prevents page to reload on submit

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate), //to transform date into a new Date object
		};

		//i'm passing the data got here from inputs into the function that I've made as props above in my parent called OnSaveExpenseData
		props.onSaveExpenseData(expenseData)

		//to clear the inputs after submitted the form
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>

				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>

				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2022-12-31"
						value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>

			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;

//I've learned how to pass data from parent to child, using props, but now I'm learning how to pass data from child-to-parent
//to pass from a child to a parent 