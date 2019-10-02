import { FETCH_USERS_PENDING, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from '../actions/fetchUsersActions'
import {ADD_USER, ADD_USER_FAILURE, EDIT_USER, EDIT_USER_FAILURE, DELETE_USER, DELETE_USER_FAILURE} from '../actions/editUsersActions'

const initState = {
    isFetching: false,
    errors: null,
    users: []
}

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_USERS_PENDING:
            console.log('starting fetch')
            return {
                ...state,
                isFetching: true
            }

        case FETCH_USERS_SUCCESS:
            console.log('fetch success')
            return {
                ...state,
                isFetching: false,
                users: action.payload,
                error: null
            }

        case FETCH_USERS_FAILURE:
            console.log('fetch failure')
            return {
                ...state,
                error: action.payload
            }

        case ADD_USER:
            console.log('user added!')
            return {
                ...state,
                users: [...state.users, action.payload]
            }

        case ADD_USER_FAILURE:
            console.log('Error adding user: ', action.payload)
            return state

        case EDIT_USER:
            console.log('editing user')
            return {
                ...state,
                users: [...state.users.filter(user => user.id !== action.payload.id), action.payload]
            }

        case EDIT_USER_FAILURE:
            console.log('Error editing user: ', action.payload)
            return state

        case DELETE_USER:
            console.log('deleting user')
            return {
                ...state,
                users: [...state.users.filter(user => user.id !== action.payload)]
            }
        
        case DELETE_USER_FAILURE:
            console.log('Error deleting user: ', action.payload)
            return state

        default:
            return state
    }
}

export default usersReducer