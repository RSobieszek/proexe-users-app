import React from 'react'

const User = ({ user }) => {

    const { id, name, username, email, address: { city } = {}} = user || {}

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>{city}</td>
            <td>
                <button className="btn amber">Edit</button>
            </td>
            <td>
                <button className="btn red">Delete</button>
            </td>
        </tr>
    )
}

export default User