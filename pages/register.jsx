import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import SearchAppBar from "./components/Nav";
import styles from '../styles/Home.module.css';
import Router from 'next/router';
import csrf from '../src/csrf.js';
import axios from 'axios'

const Login = ({csrfToken}) => {
    console.log(csrfToken);


    const [registerError, setRegisterError] = React.useState(false);
    const [err, setErr] = React.useState(null);

    const submitForm = (ev) => {
        ev.preventDefault();
        let formData = {};
        let childNodes = ev.target.childNodes;
        let i;
        let j;
        for (i = 0; i < childNodes.length; i++) {
            let grandChild = childNodes[i].children;
            for (j = 0; j < grandChild.length; j++) {
                if (grandChild[j].nodeName === "INPUT" && grandChild[j].type !== 'checkbox') {
                    formData[grandChild[j].name] = grandChild[j].value;
                }
            }
        }
        const request = new Request('/api/user_creation', {
            headers: {'Content-Type': 'application/json', 'CSRF-Token': csrfToken}
        });
        fetch(request, {
            method: 'POST', mode: 'same-origin', body: JSON.stringify(JSON.stringify(formData))
        }).then(rsp => rsp.json()).then(function (response) {
            const localStyles = {
                float: 'left', fontWeight: "bolder",
            }
            let i;
            let errJsx = [];
            if (response.verification === false) {
                if (typeof (response.message) === 'object') {
                    let errLog = response.message;
                    for (i = 0; i < errLog.length; i++) {
                        let err = errLog[i].message;
                        errJsx.push(<div style={localStyles} key={i}>{err}</div>);
                    }
                    setErr(errJsx);
                    setRegisterError(true);
                } else {
                    setErr(<div style={localStyles} key={'n'}>{response.message}</div>)
                }
            } else {
                Router.push('/verify/' + response.email);
            }
        });
    }

    const RegisterUserError = (params) => {
        if (params.bool === true) {
            return (<div>
                    <center>
                        <div className={styles.errorDiv}>
                            <div className="p-3 mb-2 bg-danger text-white" style={{width: "100%", height: "150px"}}>
                                {params.val}
                            </div>
                        </div>
                    </center>
                </div>)
        }
    }

    return (<div>
            <SearchAppBar/> <br/>
            <center>
                <RegisterUserError bool={registerError} val={err}/>
            </center>
            <br/> <br/>
            <section className="vh-100 bg-image">
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{borderRadius: "15px"}}>
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                                        <form onSubmit={submitForm}>

                                            <div className="form-outline mb-4">
                                                <input name="name" type="text" id="form3Example1cg"
                                                       className="form-control form-control-lg"/>
                                                <label className="form-label" htmlFor="form3Example1cg">Your
                                                    Name</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input name="email" type="email" id="form3Example3cg"
                                                       className="form-control form-control-lg"/>
                                                <label className="form-label" htmlFor="form3Example3cg">Your
                                                    Email</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input name="phone_number" type="phone_number" id="form3Example3cg"
                                                       className="form-control form-control-lg"/>
                                                <label className="form-label" htmlFor="form3Example3cg">Your
                                                    phone number</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input name="password1" type="password" id="form3Example4cg"
                                                       className="form-control form-control-lg"/>
                                                <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input name="password2" type="password" id="form3Example4cdg"
                                                       className="form-control form-control-lg"/>
                                                <label className="form-label" htmlFor="form3Example4cdg">Repeat your
                                                    password</label>
                                            </div>

                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <input className="form-check-input me-2" type="checkbox" value=""
                                                       id="form2Example3cg"/>
                                                <label className="form-check-label" htmlFor="form2Example3g">
                                                    I agree all statements in <a href="#!" className="text-body"><u>Terms
                                                    of
                                                    service</u></a>
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-center">
                                                <button type="submit"
                                                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register
                                                </button>
                                            </div>

                                            <p className="text-center text-muted mt-5 mb-0">Have already an account? <a
                                                href="#!"
                                                className="fw-bold text-body"><u>Login here</u></a></p>

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>)
}

export async function getServerSideProps(context) {
    const {req, res} = context
    await csrf(req, res)
    return {
        props: {csrfToken: req.csrfToken()},
    }
}

export default Login;