import { FETCH_USERS_PENDING, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from '../actions/userActions'

const initState = {
    users: [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "email": "Shanna@melissa.tv",
            "address": {
                "street": "Victor Plains",
                "suite": "Suite 879",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",
                "geo": {
                    "lat": "-43.9509",
                    "lng": "-34.4618"
                }
            }
        }
    ]
}

// const initState = {
//     isFetching: false,
//     errors: null,
//     users: []
// }

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

        default:
            return state
    }
}

export default usersReducer