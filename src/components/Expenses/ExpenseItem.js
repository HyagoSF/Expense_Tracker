import { useState } from 'react';
import './ExpenseItem.css';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
	//hook to use state, to be able to turn it into another value and refresh the page
	const [title, setTitle] = useState(props.title);
	//the first element is the current state value, and the second, is a FUNCTION for update that

	// console.log('ExpenseItem evaluated by React');
	const clickHandler = () => {
		setTitle('updated!');
		console.log(title);
	};

	return (
		//I have a Card where the props of it is className='expense-item'
		<li>
			<Card className="expense-item">
				<ExpenseDate date={props.date} />

				<div className="expense-item__description">
					<h2>{title}</h2>
					<div className="expense-item__price">${props.amount}</div>
				</div>
				<button onClick={clickHandler}>Change Title</button>
			</Card>
		</li>
	);
};

export default ExpenseItem;
