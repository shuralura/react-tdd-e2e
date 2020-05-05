import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Name</label>
			<input type="text" name="name" data-testid="addNameText" value={user.name} onChange={handleInputChange} />
			<label>Username</label>
			<input type="text" name="username" data-testid="addUsernameText" value={user.username} onChange={handleInputChange} />
			<button data-testid="addNewUserButton">Add new user</button>
		</form>
	)
}

export default AddUserForm