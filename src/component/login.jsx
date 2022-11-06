import React from 'react';
import './login.css';

const Login = () =>{
  return (
    <div>
        <section className="form my-4 mx-5">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-lg-5 photo" >
                        <img src="https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&w=1000&q=80" className="img-fluid"alt=""/>
                        <div className="photo-text">
                            <h1><b className="t1">S</b>mart<br/><b className="t1">P</b>arking<br/><b className="t1">S</b>ystem</h1>
                        </div>
                    </div>
                    <div className="col-lg-7 px-5 pt-5 content">
                        <h1 className="font-weight-bold py-3">Login</h1>
                        <h4>Sign into your Account</h4>
                        <form>
                            <div className="form-row"> 
                                <div className="col-lg-7">
                                    <input type="email" name="" placeholder="Enter your email" className="form-control my-3 p-4" id="#"/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-7">
                                    <input type="password" name="" placeholder="Password" className="form-control my-3 p-4" id="#"/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-7">
                                    <button type="button" className="btn1 mt-3 mb-5">Log</button>
                                </div>
                            </div>
                            <a href="#">forgot password ?</a>
                            <p>Don't have an Account?<a href="#">Register here.</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Login