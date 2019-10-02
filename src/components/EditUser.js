import React from 'react'
import { connect } from 'react-redux'
import { addUserToServer, editUserOnServer } from '../store/actions/editUsersActions'

// const userZ = this.props.user.filter(user => user.id == this.props.match.params.id)[0]

class EditUser extends React.Component {
    
    state = {
        name: this.props.user.filter(user => user.id == this.props.match.params.id)[0].name,
        email: this.props.user.filter(user => user.id == this.props.match.params.id)[0].email,
        // user: this.props.user.filter(user => user.id == this.props.match.params.id)[0]
        // userName: userZ
    }

    // handleClickTest = (e) => {
    //     e.preventDefault()
    //     // console.log(this.props.user.filter(user => user.id == this.props.match.params.id))
    //     console.log(this.state.name, this.state.email)
    // }

    handleClick = (e) => {
        e.preventDefault()
        // console.log(this.props.history)
        // console.log(this.props.match.params.id)
        // console.log(this.state)
        this.props.history.push('/')
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted edit')
        const userData = this.props.user.filter(user => user.id == this.props.match.params.id)[0]
        userData.name = this.state.name
        userData.email = this.state.email
        // console.log(userData)
        this.props.editUserOnServer(userData)
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="container">
                <h2>Edit user</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <input 
                            type="text" 
                            id='name' 
                            value={this.state.name}
                            onChange={this.handleChange} 
                            required />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-field">
                        <input 
                            type="email" 
                            id='email' 
                            onChange={this.handleChange} 
                            value={this.state.email} 
                            required />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">
                        <div className="row">
                            <div className="col">
                                <button className="btn light-green">Edit user</button>
                            </div>
                            <div className="col">
                                <button
                                    className="btn grey lighten-1"
                                    onClick={this.handleClick}
                                >Cancel
                                </button>
                                {/* <button
                                    className="btn grey lighten-1"
                                    onClick={this.handleClickTest}
                                >refresh test
                                </button> */}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // user: state.users.users.filter(user => user.id === this.props.match.params.id)
        user: state.users.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUserToServer: (user) => dispatch(addUserToServer(user)),
        editUserOnServer: (user) => dispatch(editUserOnServer(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser)