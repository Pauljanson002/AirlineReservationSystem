import React, {useState} from "react";
import "./login.css";
import {Redirect} from "react-router";
import {signin} from "./api-auth";
import auth from "./auth-helper";
import {Link} from "react-router-dom";
export default function (props) {
  const [values,setValues] = useState({
    username:'',
    password:'',
    hashed_password:'',
    error:'',
    redirect:false
  })

  const handleSign = (event)=>{
      event.preventDefault()
      const user = {
        username:values.username||undefined,
        password:values.password||undefined,
        hashed_password: values.hashed_password||undefined
      }
      signin(user).then((data)=>{
        if(data.error){
          setValues({...values,error:data.error})
        }else{
            auth.authenticate(data,()=>{
              setValues({...values,error:'',redirect:true})
            })
        }
      })
  }
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const {from} = props.location.state||{
    from:{
      pathname:'/'
    }
  }
  if(values.redirect){
    return (
        <Redirect to={from}/>
    )
  }
  return (
    <section className="login hero is-success is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-4 is-offset-4">
            <h3 className="title has-text-black">Login</h3>
            <hr className="login-hr" />
            <p className="subtitle has-text-black">Please login to proceed.</p>
            <div className="box">
              <form>
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-large"
                      type="text"
                      placeholder="Your User name"
                      autoFocus=""
                      value={values.username}
                      onChange={handleChange('username')}
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input
                      className="input is-large"
                      type="password"
                      placeholder="Your Password"
                      value={values.password}
                      onChange={(event => {
                        const hashed_password = auth.createHash(event.target.value)
                        console.log(hashed_password)
                        setValues({...values,password:event.target.value,hashed_password: hashed_password})
                      })
                       }
                    />
                  </div>
                </div>
                <button className="button is-block is-info is-large is-fullwidth" onClick={handleSign}>
                  Login <i className="fa fa-sign-in" aria-hidden="true"></i>
                </button>
              </form>
            </div>
            {values.error && <div className="notification is-danger">
              {values.error}
            </div>}
            <p className="has-text-grey">
              <Link to="/registered_user/register">Sign Up</Link> &nbsp;·&nbsp;
              {/*<a href="../">Forgot Password</a> &nbsp;·&nbsp;*/}
              Login as Guest
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}