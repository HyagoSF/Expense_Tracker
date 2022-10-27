import React from 'react';

import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = (props) => {
	return (
		<Card className={classes.users}>
			<ul>
				{props.users.map((user) => (
					<li
						key={user.id}
						// passing onClick a function that will return the onDelete property on UserList and define this specific user.id, to be able to delete it after
						onClick={() => {
							props.onDelete(user.id);
						}}>
						{user.name} ({user.age} years old)
					</li>
				))}
			</ul>
		</Card>
	);
};

export default UsersList;
