import React from 'react'

class AddUser extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault()
    }
    render() {
        return(
            <div className="container">
                <h2>Add new user</h2>
                <form onSubmit={this.handleSubmit}>

                </form>
            </div>
        )
    }
}

export default AddUser