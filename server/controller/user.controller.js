
import extend from 'lodash/extend'
import registered_user_db from '../db/registered_user.db'

const create = async (req, res, next) => {
    const user = req.body
    try {
        await registered_user_db.insert(user)
        return res.status(200).json({
            message:"Successfully signed up! "
        })
    }catch (e) {
        if(e.code === '23505'){
            return res.status(400).json({
                error:'Username already exists'
            })
        }
        return res.status(400).json({
            error:"Cannot create a new user "
        })

    }
}
const registeredUsernameCheck = async (req,res,next) =>{
    try{
        const username = req.params.username
        const possible = await registered_user_db.RegisteredUsernameCheck(username)
        return res.status(200).json({
            'possible':possible
        })
    }
    catch (e) {
       console.log(e)
    }
}

export default {create,registeredUsernameCheck}