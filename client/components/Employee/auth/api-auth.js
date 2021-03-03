const signin = async(employee)=> {
    try {
        let response = await fetch('/api/employee/auth/signin', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(employee)
        })
        return await response.json()
    } catch (e) {
        console.log(e)
    }
}
const signout = async()=>{
    try{
        let response  = await fetch('/api/employee/auth/signout',{
            method:'GET'
        })
        return await response.json()
    }catch (e) {
        console.log(e)
    }
}

export {signin,signout}