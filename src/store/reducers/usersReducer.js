import { FETCH_USERS_PENDING, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from '../actions/fetchUsersActions'
import {ADD_USER, ADD_USER_FAILURE, EDIT_USER, EDIT_USER_FAILURE} from '../actions/editUsersActions'

// dummy data
// const initState = {
//     users: [
//         {
//             "name": "Leanne Graham",
//             "email": "test@test.pl",
            
//         },
//         {
//             "name": "Ervin Howell",
//             "email": "Shanna@melissa.tv",
            
//         }
//     ]
// }

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
            console.log('fetch succes')
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
                users: [...state.users.filter(user => user.id !== action.payload.id ), action.payload]
            }

        default:
            return state
    }
}

export default usersReducer