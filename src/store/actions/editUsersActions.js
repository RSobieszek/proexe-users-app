import handleErrors from '../errors/handleHTTPErrors'

export const ADD_USER = 'ADD_USER'
export const ADD_USER_FAILURE = 'ADD_USER_FAILURE'
export const EDIT_USER = 'EDIT_USER'
export const EDIT_USER_FAILURE = 'EDIT_USER_FAILURE'

export const addUser = (user) => ({
    type: ADD_USER, 
    payload: user
})

export const addUserFailure = (error) => ({
    type: ADD_USER_FAILURE,
    payload: error
})

export const addUserToServer = (user) => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(user)
        })
        // .then(res => console.log(res))
        .then(handleErrors)
        .then(() => {
            dispatch(addUser(user))
        }).catch((err) => {
            dispatch(addUserFailure(err))
        })
    }
}

export const editUser = (user) => ({
        type: EDIT_USER,
        payload: user
})

export const editUserFailure = (error) => ({
    type: EDIT_USER_FAILURE,
    payload: error
})

export const editUserOnServer = (user) => {
    return (dispatch) => fetch(`https://jsonplaceholder.typicode.com/users`, {
        method: 'PATCH',
        body: JSON.stringify(user)
    })
    .then(handleErrors)
    .then(() => {
        dispatch(editUser(user))
    }).catch((err) => {
        dispatch(editUserFailure(err))
    })
}