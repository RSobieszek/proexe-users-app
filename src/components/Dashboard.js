import React from 'react'
import UsersList from './UsersList'
import { NavLink } from 'react-router-dom'
import { fetchUsers } from '../store/actions/fetchUsersActions'
import { connect } from 'react-redux'

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.fetchUsers()
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h1>Dashboard</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <NavLink to='/add' className="waves-effect waves-light btn right">
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
        error: state.users.error
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)