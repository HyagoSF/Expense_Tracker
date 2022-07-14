import './Card.css';

const Card = (props) => {
	const classes = `card ${props.className}`;
	return <div className={classes}>{props.children}</div>;
	// <div className="card expense-item"></div>;
	// <div className="card expenses"></div>;
}

export default Card;
