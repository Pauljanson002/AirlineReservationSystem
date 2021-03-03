import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import config from "../../config/config";
import registered_user_db from "../db/registered_user.db"
import user_db from "../db/user_db";

const signin = async (req,res)=>{
    try{
        let registered_user = await registered_user_db.selectWithUsername(req.body.username)
        if(!registered_user){
            return res.status('401').json({
                error:"User not found"
            })
        }
        if(req.body.hashed_password.trim() !== registered_user.hashed_password.trim()){
            return res.status('401').json({
                error:"Username and password does not match"
            })
        }

        const token = jwt.sign({
            id:registered_user.id
        },config.jwtSecret)

        res.cookie('t',token,{expire:new Date()+9999})
        return res.json({
            token:token,
            user:{
                id:registered_user.user_id,
                first_name:registered_user.first_name,
                last_name:registered_user.last_name,
                username:registered_user.user_name,
                email:registered_user.email,
                telephone:registered_user.telephone,
                type:registered_user.reg_user_type,
                discount:registered_user.discount_percentage,
                booking_count:registered_user.booking_count
            }

        })
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({
            error:"Error occurred"
        })
    }


}
const signInAsGuest = async (req,res)=>{
    try{
        let guestUser = await user_db.selectGuestUser()
        const token = jwt.sign({
            id:guestUser.user_id,
        },config.jwtSecret)
        res.cookie('t',token,{expire:new Date()+9999})
        return res.status(200).json(
            {
                token:token,
                user:{
                    id:guestUser.user_id,
                    first_name:guestUser.first_name,
                    last_name:guestUser.last_name,
                    username:'guestuser123456',
                    email:guestUser.email,
                    telephone:guestUser.telephone,
                    type:'guest',
                    discount:'0',
                    booking_count:0,
                }
            }
        )
    }
    catch (e) {
       console.log(e)
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
export default {signin,signout,signInAsGuest }