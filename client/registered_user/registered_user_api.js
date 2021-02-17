const checkUsernameAvailability = async (username) =>{
    try{
        let response = await fetch('/api/registered_user/username_check/'+username,{
            method:'GET',
        })
        return await response.json()
    }
    catch (e) {
        console.log(e)
    }
}

const create = async (user) =>{
    try{
        let response = await fetch('/api/registered_user/',{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        return await response.json()
    }
    catch (e) {
       console.log(e)
    }
}
export {
    checkUsernameAvailability,create
}