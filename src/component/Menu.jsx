import React from 'react'
import { NavLink } from 'react-router-dom'
import {logoutUser}  from '../data/user'
import { toast } from 'react-toastify';

function Menu() {
    let loginStatus = localStorage.getItem('loginStatus')|| false
    // let loginStatus =  false

    const logoutHandler = async () => {
        if(window.confirm("Are you sure to Logout")){
           await logoutUser();
    
        }else{
            toast.warning("Logout terminated")
        }
       
    }

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
        <div className="container">
            <NavLink to={`/`} className="navbar-brand">CRUD APP</NavLink>

            <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#menu">
                <span className='navbar-toggler-icon'></span>
            </button>

            <div className={loginStatus?"collapse navbar-collapse justify-content-between":"collapse navbar-collapse justify-content-end"} id='menu'>
                {
                    loginStatus?(
                        <React.Fragment>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink to={"/"} className="nav-link">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/create"} className="nav-link">Create</NavLink>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink onClick={logoutHandler} className="btn btn-danger">Logout</NavLink>
                                </li>
                            </ul>
                        </React.Fragment>
                    ):(
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to={"/login"} className="nav-link">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/register"} className="nav-link">Register</NavLink>
                            </li>
                        </ul>
                    )
                }
                
                
            </div>
        </div>
    </nav>
  )
}

export default Menu
