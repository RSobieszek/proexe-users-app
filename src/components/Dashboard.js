import React from 'react'
import UsersList from './UsersList'
import { NavLink } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className="container">
            <div className="row">
                <h1>Dashboard</h1>
                <NavLink to='/add' className="waves-effect waves-light btn">
                    Add user
                </NavLink>
            </div>
            <div className="row">
                <UsersList />
            </div>
        </div>
    )
}

export default Dashboard