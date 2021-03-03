import React, {useState} from 'react'
import Menu from "../core/Menu";
import {Link, Redirect} from "react-router-dom";
import {update} from "../../api-access/registered_user_api";
import sha1 from "crypto-js/sha1";
import auth from "../user/auth/auth-helper";

export default function RegisteredUserProfileEditPage() {
    const [values, setValues] = useState({
        first_name: "",
        last_name:"",
        email:"",
        telephone:"",
        hashed_password: "",
        error:'',
        redirect:false
    });
    const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value });
    };
    const setPassword = (event) => {
        const hash = createHash(event.target.value);
        setValues({ ...values, ["hashed_password"]: hash });
    };
    const createHash = (plainText) => {
        if (!plainText) return "";
        try {
            let hash = sha1(plainText);
            console.log(hash.toString());
            return hash.toString();
        } catch (e) {
            console.log(e);
            return "";
        }
    };
    const handleSubmit = (event)=>{
        event.preventDefault()
        const id = auth.isAuthenticated().user.id;
        const user = {
            user_id:id,
            first_name:values.first_name,
            last_name:values.last_name,
            email:values.email,
            telephone:values.telephone,
            hashed_password:values.hashed_password,
        }
        update(user).then((data)=>{
            if(data.error){
                setValues({...values,error:data.error})
            }else{
                setValues({...values,error: '',redirect:true})
            }
        })

    }

    if(values.redirect){
        return (
            <Redirect to={"registered_user/profile"}/>
        )
    }
    return(
        <div>
           <Menu/>
           <div className={"section content"}>
              <div className={"container"}>
                  <form className="form pt-1" onSubmit={handleSubmit}>
                      <div className="field">
                          <label className="label">First Name</label>
                          <div className="control">
                              <input
                                  className="input"
                                  type="text"
                                  required
                                  pattern="^[a-zA-Z\s]+$"
                                  placeholder="Your First Name"
                                  title="You should provide a valid name"
                                  onChange={handleChange('first_name')}
                              />
                          </div>
                      </div>

                      <div className="field">
                          <label className="label">Last Name</label>
                          <div className="control">
                              <input
                                  className="input"
                                  type="text"
                                  required
                                  pattern="^[a-zA-Z\s]+$"
                                  placeholder="Your Last Name"
                                  title="You should provide a valid name"
                                  onChange={handleChange('last_name')}
                              />
                          </div>
                      </div>
                      <div className="field">
                          <label className="label">Email</label>
                          <div className="control has-icons-left has-icons-right">
                              <input
                                  required
                                  className="input"
                                  type="email"
                                  placeholder="Email input"
                                  title="Please use a correct email"
                                  onChange={handleChange('email')}
                              />
                              <span className="icon is-small is-left">
                <i className="fa fa-envelope"></i>
              </span>
                          </div>
                      </div>

                      <div className="field">
                          <label className="label">Password</label>
                          <div className="control has-icons-left has-icons-right">
                              <input
                                  required
                                  className="input"
                                  type="password"
                                  onChange={setPassword}
                              />
                              <span className="icon is-small is-left">
                <i className="fa fa-lock"></i>
              </span>
                          </div>
                      </div>

                      <div className="field">
                          <label className="label">Telephone</label>
                          <div className="control has-icons-left has-icons-right">
                              <input
                                  required
                                  className="input"
                                  type="tel"
                                  placeholder="Telephone"
                                  onChange={handleChange('telephone')}
                              />
                              <span className="icon is-small is-left">
                <i className="fa fa-phone"></i>
              </span>
                          </div>
                      </div>
                      {values.error && (
                          <div className="notification is-danger">
                              {values.error}
                          </div>
                      )}
                      <div className="field is-grouped">
                          <div className="control">
                              <button className="button is-link" type="submit">Submit</button>
                          </div>
                          <div className="control">
                              <Link to="/registered_user/profile">
                                  <button className="button is-link is-light">Cancel</button>
                              </Link>
                          </div>
                      </div>
                  </form>
              </div>
           </div>
        </div>
    )
}