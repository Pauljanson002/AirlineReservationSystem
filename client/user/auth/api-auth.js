const signin = async(user)=>{
    try{
        let response = await fetch('/api/auth/signin',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            credentials:'include',
            body:JSON.stringify(user)
        })
        return await response.json()
    }catch (e) {
       console.log(e)
    }
}

const signout = async()=>{
    console.log("Not implemented yet")
}
export {
    signin,signout
}