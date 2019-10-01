import React from 'react'
import User from './User'
import { connect } from 'react-redux'

const UsersList = (props) => {

    // const users = props.users.map((user) => <User key={user.id} user={user} />)
    // const users = props.users.map((user) => <User key={user.id} user={user} delUser={this.delUser}/>)

    return (
        <table className="centered">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {props.users.length 
                    ? props.users.map((user) => <User key={user.id} user={user} />)
                    : <tr>No users to display.</tr>}
            </tbody>
        </table>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
}

export default connect(mapStateToProps)(UsersList)