import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (props.currentUser.name === user.name && props.currentUser.username === user.username) {         
          return
        }
        props.updateUser(user.id, user)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" data-testid="editNameText" value={user.name} onChange={handleInputChange} />
      <label>Username</label>
      <input type="text" name="username" data-testid="editUsernameText" value={user.username} onChange={handleInputChange} />
      <button data-testid="editUserButton">Update user</button>
      <button data-testid="cancelEditButton" onClick={() => props.setEditing(false)} className="button muted-button" >
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm