import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
	const [usersList, setUsersList] = useState([]);

	const addUserHandler = (uName, uAge) => {
		setUsersList((prevUsersList) => {
			return [
				...prevUsersList,
				{ name: uName, age: uAge, id: Math.random().toString() },
			];
		});
	};

	const deleteUserHandler = (id) => {
		setUsersList(usersList.filter((user) => user.id !== id));
	};

	return (
		<div>
			<AddUser onAddUser={addUserHandler} />
			<UsersList users={usersList} onDelete={deleteUserHandler} />
		</div>
	);
}

export default App;

// remove_post_on_list = (deletePostId) => {
// 	this.setState({
// 		postList: this.state.postList.filter(
// 			(item) => item.post_id != deletePostId
// 		),
// 	});
// };
