import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import config from "../../config/config";
import registered_user_db from "../db/registered_user.db"

const signin = async (req,res)=>{
    try{
        let registered_user = await registered_user_db.selectWithUsername(req.body.username)
        if(!registered_user){
            return res.status('401').json({
                error:"User not found"
            })
        }
        if(req.body.hashed_password !== registered_user.hashed_password){
            return res.status('401').json({
                error:"Username and password doesnot match"
            })
        }

        const token = jwt.sign({
            id:registered_user.id
        },config.jwtSecret)

        res.cookie('t',token,{expire:new Date()+9999})
        return res.json({
            token:token,
            user:{
                id:registered_user.id,
                name:registered_user.name,
                username:registered_user.username,
            }

        })
    }
    catch (e) {
        return res.status(400).json({
            error:"Error occurred"
        })
    }


}

const signout = (req,res) => {
    res.clearCookie("t")
    return res.status('200').json({
        message:"signed out"
    })
}

const requireSignin = expressJwt({
    secret:config.jwtSecret,
    userProperty:'auth',
    algorithms:['RS256']
})

const hasPersonalAuthorization = (req,res,next) =>{
    const authorized = req.profile && req.auth && req.profile.id == req.auth.id
    if(!(authorized)){
        return res.status('403').json({
            error:"User is not authorized",
        })
    }
    next()
}
export default {signin,signout }