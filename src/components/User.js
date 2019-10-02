import React from 'react'

const User = (props) => {

    const { id, name, username, email, address: { city } = {}} = props.user || {}
    const editUser = props.editUser
    const deleteUser = props.deleteUser

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>{city}</td>
            <td>
                <button className="btn amber" onClick={editUser} id={id}>Edit</button>
            </td>
            <td>
                <button className="btn red" onClick={deleteUser} id={id}>Delete</button>
            </td>
        </tr>
    )
}

export default User