import React from 'react'
import User from './User'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux'
import { deleteUserOnServer } from '../store/actions/editUsersActions'
import Popup from 'reactjs-popup'

class UsersList extends React.Component {

    // const users = props.users.map((user) => <User key={user.id} user={user} />)
    // const users = props.users.map((user) => <User key={user.id} user={user} delUser={this.delUser}/>)
    state = {
        openModal: false,
        id: null
    }

    editUser = (e) => {
        e.preventDefault()
        console.log(e.target.id)
        this.props.history.push(`/edit/${e.target.id}`)
    }

    deleteUser = (e) => {
        e.preventDefault()
        // this.props.deleteUserOnServer(parseInt(e.target.id))
        this.setState({
            openModal: true,
            id: parseInt(e.target.id)
        })
    }

    deleteUserConfirm = () => {
        this.setState({ openModal: false })
        this.props.deleteUserOnServer(this.state.id)
    }

    closeModal = () => {
        this.setState({ openModal: false })
    }

    render() {
        return (
            <React.Fragment>
                <Popup
                    open={this.state.openModal}
                    closeOnDocumentClick
                    onClose={this.closeModal}
                >
                    <div className="container">
                        <div className="row">
                            <h2>Are you sure?</h2>
                        </div>
                        <div className="row">
                            <div className="col">
                                <button className="btn red" onClick={this.deleteUserConfirm}>Delete</button>
                            </div>
                            <div className="col">
                                <button className="btn grey lighten-1" onClick={this.closeModal}>Cancel</button>
                            </div>
                        </div>

                    </div>
                </Popup>
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
            </React.Fragment>
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