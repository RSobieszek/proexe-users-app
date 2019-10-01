import React from 'react'
import UsersList from './UsersList'
import { NavLink } from 'react-router-dom'
import { fetchUsers } from '../store/actions/userActions'
import { connect } from 'react-redux'

class Dashboard extends React.Component {
    componentDidMount(){
        this.props.fetchUsers()
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1>Dashboard</h1>
                    <NavLink to='/add' className="waves-effect waves-light btn">
                        Add user
                    </NavLink>
                </div>
                <div className="row">
                    <div className="col s12">
                        {this.props.isFetching ? <p>Loading</p> : <UsersList />}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.users.isFetching
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)