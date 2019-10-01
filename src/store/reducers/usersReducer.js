const initState = {
    users: [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            }
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
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

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        // case 'CREATE_PROJECT':
        //     console.log('created project', action.project)
        //     return state

        // case 'CREATE_PROJECT_ERROR':
        //     console.log('create project error', action.err)
        //     return state

        default:
            return state
    }
}

export default projectReducer