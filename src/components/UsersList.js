import React from 'react'
import User from './User'
import {connect} from 'react-redux'

const UsersList = (props) => {

    const users = props.users.map((user) => <User key={user.id} user={user} />)
    // const users = props.users.map((user) => <User key={user.id} user={user} delUser={this.delUser}/>)

    return (
        <React.Fragment>
            {users}
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
}

export default connect(mapStateToProps)(UsersList)