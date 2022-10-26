import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const Backdrop = (props) => {
	// this div is what makes my modal show up, because
	return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
	return (
		<Card className={classes.modal}>
			<header className={classes.header}>
				<h2>{props.title}</h2>
			</header>
			<div className={classes.content}>
				<p>{props.message}</p>
			</div>
			<footer className={classes.actions}>
				<Button onClick={props.onConfirm}>Okay</Button>
			</footer>
		</Card>
	);
};

const ErrorModal = (props) => {
	return (
		<Fragment>
			{/* I'll have to pass the property onConfirm in my ErrorModal, cause doing it, I'll pass onConfirm property(this will activate the onConfirmHandler on the parent component) to Backdrop, and this will activate the props.onConfirm of the Backdrop, and then will activate the onClick property */}
			{ReactDOM.createPortal(
				<Backdrop onConfirm={props.onConfirm} />,
				document.getElementById('backdrop-root')
			)}
			{ReactDOM.createPortal(
				<ModalOverlay
					// Everything that depends on props on my ModalOverlay I have to pass here to make sure everything is going to work well
					title={props.title}
					message={props.message}
					onConfirm={props.onConfirm}
				/>,
				document.getElementById('overlay-root')
			)}
		</Fragment>
	);
};

export default ErrorModal;
