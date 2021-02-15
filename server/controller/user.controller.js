
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
        console.log(e)
        return res.status(400).json({
            error:"Cannot create a new user "
        })

    }
}

export default {create}