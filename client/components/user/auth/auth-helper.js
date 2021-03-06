import { signout } from './api-auth.js'
import sha1 from "crypto-js/sha1";

const auth = {
    isAuthenticated() {
        if (typeof window == "undefined")
            return false

        if (sessionStorage.getItem('currentUser'))
            return JSON.parse(sessionStorage.getItem('currentUser'))
        else
            return false
    },
    authenticate(currentUser, cb) {
        if (typeof window !== "undefined")
            sessionStorage.setItem('currentUser', JSON.stringify(currentUser))
        cb()
    },
    clearCurrentUser(cb) {
        if (typeof window !== "undefined")
            sessionStorage.removeItem('currentUser')
        cb()
        //optional
        signout().then((data) => {
            document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        })
    },
    createHash(plainText) {
        if (!plainText) return "";
        try {
            let hash = sha1(plainText);
            return hash.toString();
        } catch (e) {
            console.log(e);
            return "";
        }
    }
}

export default auth