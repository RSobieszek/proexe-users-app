import React from 'react'
import { connect } from 'react-redux'
import { editUserOnServer } from '../store/actions/editUsersActions'

class EditUser extends React.Component {
    
    state = {
        name: this.props.user.filter(user => user.id === parseInt(this.props.match.params.id))[0].name,
        email: this.props.user.filter(user => user.id === parseInt(this.props.match.params.id))[0].email
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
        console.log('submitted edit')

        // Original user data updated with data from form (component state)
        const userData = this.props.user.filter(user => user.id === parseInt(this.props.match.params.id))[0]
        userData.name = this.state.name
        userData.email = this.state.email
        
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
                            className="validate"
                            type="text" 
                            id='name' 
                            value={this.state.name}
                            onChange={this.handleChange} 
                            required />
                        <label htmlFor="name" className="active">Name</label>
                        <span class="helper-text" data-error="You must enter name" data-success=""></span>
                    </div>
                    <div className="input-field">
                        <input 
                            className='validate'
                            type="email" 
                            id='email' 
                            onChange={this.handleChange} 
                            value={this.state.email} 
                            required />
                        <label htmlFor="email" className="active">Email</label>
                        <span class="helper-text" data-error="Wrong email format" data-success=""></span>
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
        user: state.users.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editUserOnServer: (user) => dispatch(editUserOnServer(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser)