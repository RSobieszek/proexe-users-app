import handleErrors from '../errors/handleHTTPErrors'

export const ADD_USER = 'ADD_USER'
export const ADD_USER_FAILURE = 'ADD_USER_FAILURE'

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