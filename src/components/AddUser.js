import React from 'react'
import { connect } from 'react-redux'
import { addUserToServer } from '../store/actions/editUsersActions'

class AddUser extends React.Component {

    state = {
        // i would normally use library to generate unique id's (e.g. uuid), but in this app 
        // we are showing id's in users list. Below is a workaround for the purpose of this exercise
        id: Math.floor(Math.random() * 100) + 11,
        name: '',
        email: ''
    }

    handleClick = (e) => {
        e.preventDefault()
        this.props.history.push('/')
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addUserToServer(this.state)
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="container">
                <h2>Add new user</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <input 
                            className='validate'
                            type="text" 
                            id='name' 
                            onChange={this.handleChange} 
                            required />
                        <label htmlFor="name">Name</label>
                        <span 
                            class="helper-text" 
                            data-error="You must enter name" 
                            data-success="">
                        </span>
                    </div>
                    <div className="input-field">
                        <input 
                            className='validate'
                            type="email" 
                            id='email' 
                            onChange={this.handleChange} 
                            required/>
                        <label htmlFor="email">Email</label>
                        <span 
                            class="helper-text" 
                            data-error="Wrong email format" 
                            data-success="">
                        </span>
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