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
                <div className="col s12">
                    <table className="centered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>City</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <UsersList />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Dashboard