import React from 'react'

class AddUser extends React.Component {

    state = {
        name: '',
        email: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return(
            <div className="container">
                <h2>Add new user</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <input type="text" id='name' onChange={this.handleChange} />
                        <label htmlFor="name">Name</label>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddUser