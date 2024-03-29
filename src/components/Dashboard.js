import React from 'react'
import UsersList from './UsersList'
import { NavLink } from 'react-router-dom'
import { fetchUsers } from '../store/actions/fetchUsersActions'
import { connect } from 'react-redux'

class Dashboard extends React.Component {

    componentDidMount() {
        // simple workaround to stop spamming app with unnecessary api calls
        // this should be upgraded once connected to api capable of updating database with new users
        if (this.props.users.length === 0) {
            this.props.fetchUsers()
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h1>Dashboard</h1>
                        <p>you can sort users by clicking username</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <NavLink to='/add' className="waves-effect waves-light btn-large right">
                            Add user
                        </NavLink>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        {
                            this.props.error
                                ? <h4 className='center red-text'>Error loading users!</h4>
                                : this.props.isFetching
                                    ? <h4 className='center'>Loading users...</h4>
                                    : <UsersList />
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.users.isFetching,
        error: state.users.error,
        users: state.users.users
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)