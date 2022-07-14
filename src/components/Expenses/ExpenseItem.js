import './ExpenseItem.css';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
	return (
		//I have a Card where the props of it is className='expense-item'
		<Card className="expense-item">
			<ExpenseDate date={props.date} />

			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">{props.amount}</div>
			</div>
		</Card>
	);
}

export default ExpenseItem;
