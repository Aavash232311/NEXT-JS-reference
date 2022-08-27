import * as React from "react";
import Router from "next/router";

export default function SearchAppBar() {

    const nav = {
        width: "100%", backgroundColor: "#1c54b2", height: "60px",
    };

    const companyLogo = {
        color: "white",
        userSelect: "none",
        fontWeight: "bold",
        position: "absolute",
        top: "10px",
        left: "10px",
        fontSize: "20px",
    };

    const rightFloatClasses = {
        float: "right", color: "white", marginTop: "15px", marginRight: "10px", userSelect: "none",
    };

    const AuthenticationMenu = (params) => {
        if (params.bool) {
            return <span style={rightFloatClasses}>Logout</span>;
        } else {

            return (
                <div>
                    <span style={rightFloatClasses}>
            Login
          </span>
                    <span onClick={()=> {Router.push('/register')}} style={rightFloatClasses}>
            Register
          </span>
                </div>
            );
        }
    };

    const [user, setUser] = React.useState(false);
    return (<div style={nav}>
        <span onClick={() => {
            Router.push('/')
        }} style={companyLogo}>Food portal</span>
        <AuthenticationMenu bool={user}/>
        <span style={rightFloatClasses}>
            Menu
        </span>
        <span onClick={() => {
            Router.push('/restaurant')
        }} style={rightFloatClasses}>
            my restaurant
        </span>
    </div>);
}
