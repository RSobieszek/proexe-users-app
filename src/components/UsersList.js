import React from 'react'
import User from './User'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux'
import { deleteUserOnServer } from '../store/actions/editUsersActions'
import Popup from 'reactjs-popup'

class UsersList extends React.Component {

    state = {
        openModal: false,
        id: null,
        sortUsers: 'default'
    }

    editUser = (e) => {
        e.preventDefault()
        this.props.history.push(`/edit/${e.target.id}`)
    }

    deleteUser = (e) => {
        e.preventDefault()
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

    sortUsers = () => {
        
        switch (this.state.sortUsers) {
            case 'default':
                this.setState({sortUsers: 'A-Z'})
                break;

            case 'A-Z':
                this.setState({sortUsers: 'Z-A'})
                break;

            case 'Z-A':
                this.setState({sortUsers: 'A-Z'})
                break;

            default:
                break;
        }
    }

    renderUsers = () => {
        switch (this.state.sortUsers) {
            case 'default':
                return this.props.users.map((user) => <User key={user.id} user={user} editUser={this.editUser} deleteUser={this.deleteUser} />)
                
            case 'A-Z':
                return this.props.users.sort((a,b) => (a.username > b.username) ? 1 : ((b.username > a.username) ? -1 : 0)).map((user) => <User key={user.id} user={user} editUser={this.editUser} deleteUser={this.deleteUser} />)

            case 'Z-A':
                return this.props.users.sort((a,b) => (a.username < b.username) ? 1 : ((b.username < a.username) ? -1 : 0)).map((user) => <User key={user.id} user={user} editUser={this.editUser} deleteUser={this.deleteUser} />)

            default:
                break;
        }
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
                            <th onClick={this.sortUsers} style={{cursor: 'pointer'}}>Username</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.length
                            ? this.renderUsers()
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