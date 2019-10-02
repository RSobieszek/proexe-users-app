import React from 'react'
import { connect } from 'react-redux'
import { addUserToServer } from '../store/actions/editUsersActions'

class AddUser extends React.Component {

    state = {
        id: Math.floor(Math.random() * 100) + 11,
        name: '',
        email: ''
    }

    handleClick = (e) => {
        e.preventDefault()
        // console.log(this.props.history)
        this.props.history.push('/')
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted')
        this.props.addUserToServer(this.state)
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="container">
                <h2>Add new user</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <input type="text" id='name' onChange={this.handleChange} required />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-field">
                        <input type="email" id='email' onChange={this.handleChange} required/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">
                        <div className="row">
                            <div className="col">
                                <button className="btn light-green">Add user</button>
                            </div>
                            <div className="col">
                                <button
                                    className="btn grey lighten-1"
                                    onClick={this.handleClick}
                                >Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUserToServer: (user) => dispatch(addUserToServer(user))
    }
}

export default connect(null, mapDispatchToProps)(AddUser)