export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const fetchUsersPending = () => ({
    type: FETCH_USERS_PENDING
});

export const fetchUsersSuccess = users => ({
    type: FETCH_USERS_SUCCESS,
    payload: users
});

export const fetchUsersFailure = error => ({
    type: FETCH_USERS_FAILURE,
    payload: error
});

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersPending())
        return fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => {
                    dispatch(fetchUsersSuccess(json))
                })
    }
}