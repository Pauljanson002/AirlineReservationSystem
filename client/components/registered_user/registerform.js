import React, { useState } from "react";
import sha1 from "crypto-js/sha1";
import {checkUsernameAvailability, create} from "../../api-access/registered_user_api"
import {Redirect} from "react-router";
import _ from 'lodash'
import {Link} from "react-router-dom";
const RegisterForm = () => {
  const [values, setValues] = useState({
    first_name: "",
    last_name:"",
    user_name: "",
    email:"",
    telephone:"",
    hashed_password: "",
    possible:false,
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
  const handleUsernameAvailability = _.debounce((event)=>{
    checkUsernameAvailability(event.target.value).then((data)=>{
      const possible = data.possible
      if(possible){
        console.log("Here")
        setValues({...values,['user_name']:event.target.value,['possible']:true})
      }else{
        setValues({...values,['possible']:false,['user_name']:event.target.value})
      }
    })
  },1000)
  // const handleUsernameAvailability =  (event) => {
  //     checkUsernameAvailability(event.target.value).then((data)=>{
  //       const possible = data.possible
  //       if(possible){
  //         console.log("Here")
  //         setValues({...values,['username']:event.target.value,['possible']:true})
  //       }else{
  //         setValues({...values,['possible']:false})
  //       }
  //     })
  //
  // }

  const handleSubmit = (event)=>{
      event.preventDefault()
      // if(!values.possible){
      //   setValues({...values,error:"Username is not available"});
      //   return
      // }
      const user = {
        first_name:values.first_name,
        last_name:values.last_name,
        user_name:values.user_name,
        email:values.email,
        telephone:values.telephone,
        hashed_password:values.hashed_password,
      }
      create(user).then((data)=>{
        if(data.error){
          setValues({...values,error:data.error})
        }else{
          setValues({...values,error: '',redirect:true})
        }
      })

  }
  if(values.redirect){
    return (
        <Redirect to="/"/>
    )
  }
  return (
    <div className="container is-fluid">
      <div className="box mt-0">
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
            <label className="label">Username</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="text"
                placeholder="Text input" onChange={handleUsernameAvailability} required
              />
              <span className="icon is-small is-left">
                <i className="fa fa-user"></i>
              </span>
              <span className="icon is-small is-right">
                {values.possible && (<i className="fa fa-check"></i>)}
                {!values.possible && (<i className="fa fa-times"></i>)}
              </span>
            </div>
            {values.possible && (<p className="help is-success">This username is available</p>)}
            {!values.possible && (<p className="help is-danger">This username is not available</p>)}
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



          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input type="checkbox" required />I agree to the{" "}
                <a href="#">terms and conditions</a>
              </label>
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
              <Link to="/">
                <button className="button is-link is-light">Cancel</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default RegisterForm