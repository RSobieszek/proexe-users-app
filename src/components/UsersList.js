import React from 'react'
import User from './User'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux'
import { deleteUserOnServer } from '../store/actions/editUsersActions'

class UsersList extends React.Component {

    // const users = props.users.map((user) => <User key={user.id} user={user} />)
    // const users = props.users.map((user) => <User key={user.id} user={user} delUser={this.delUser}/>)
    editUser = (e) => {
        e.preventDefault()
        console.log(e.target.id)
        this.props.history.push(`/edit/${e.target.id}`)
    }

    deleteUser = (e) => {
        e.preventDefault()
        this.props.deleteUserOnServer(e.target.id)
    }

    render() {
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
                    {this.props.users.length
                        ? this.props.users.map((user) => <User key={user.id} user={user} editUser={this.editUser} deleteUser={this.deleteUser} />)
                        : <tr><th>No users to display.</th></tr>}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserOnServer: (user) => dispatch(deleteUserOnServer(user))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(UsersList)