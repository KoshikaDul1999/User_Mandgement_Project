import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from 'axios';

export default function AddUser() {

    let navigate = useNavigate()

    const [user,setUser] = useState({
        name:"",
        email:"",
        address:"",
        mobile:"",
    });

    const {name, email, address, mobile} = user;

    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    const onSubmit=async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/users",user)
        navigate("/")
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register User</h2>
                    <form onSubmit={(e)=>onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Name
                            </label>
                            <input type="text" className="form-control" placeholder="enter your name" value={name} onChange={(e)=>onInputChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">
                                E-mail
                            </label>
                            <input type="text" className="form-control" placeholder="enter your email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Address" className="form-label">
                                Address
                            </label>
                            <input type="text" className="form-control" placeholder="enter your address" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Mobile" className="form-label" >
                                Contact Number
                            </label>
                            <input type="text" className="form-control" placeholder="enter your mobile number" />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">
                            Submit
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}