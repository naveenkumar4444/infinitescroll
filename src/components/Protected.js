import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function Protected() {

    var user = localStorage.getItem("loggedIn")

    if (user) {
        user = JSON.parse(localStorage.getItem("loggedIn"))        
    } 

    return (
        user ? <Outlet /> : <Navigate to="/" />
    )
}

export default Protected;