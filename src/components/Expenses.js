import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';

function Expenses(props) {
	return (
		<Card className="expenses">
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
}

export default Expenses;