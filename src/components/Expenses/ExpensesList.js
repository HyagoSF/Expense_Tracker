import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
	//1st way to do:

	// let expensesContent = (
	// 	<p className="expenses-list__fallback">No expenses found.</p>
	// );

	// if (props.items.length > 0) {
	// expensesContent = props.items.map((expense) => (
	// 	<ExpenseItem
	// 		className="expenses-list"
	// 		key={expense.id} //key to identify each element, not to overlay data
	// 		title={expense.title}
	// 		amount={expense.amount}
	// 		date={expense.date}
	// 	/>
	// ));
	// }

	// return expensesContent;
	// ------------------------------------------------------
	// 2nd way to do:

	if (props.items.length === 0) {
		return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
	}

	return (
		<ul className="expenses-list">
			{props.items.map((expense) => (
				<ExpenseItem
					className="expenses-list"
					key={expense.id} //key to identify each element, not to overlay data
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}
		</ul>
	);
};

export default ExpensesList;
