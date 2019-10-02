import React from 'react'
import User from './User'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux'

class UsersList extends React.Component {

    // const users = props.users.map((user) => <User key={user.id} user={user} />)
    // const users = props.users.map((user) => <User key={user.id} user={user} delUser={this.delUser}/>)
    editUser = (e) => {
        e.preventDefault()
        console.log(e.target.id)
        this.props.history.push(`/edit/${e.target.id}`)
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
                        ? this.props.users.map((user) => <User key={user.id} user={user} editUser={this.editUser} />)
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

export default compose(
                connect(mapStateToProps), 
                withRouter
)(UsersList)