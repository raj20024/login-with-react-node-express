import React, { useState } from 'react'
import axios from 'axios';

function Signup() {
    const[inputValue,setinputValue]=useState({
        name:"",
        email:"",
        password:""
    })
    const inputHandle=(e)=>{
        setinputValue(prev=>({...prev,[e.target.name]:[e.target.value]}))
    }
    const submitHandale=(e)=>{
        e.preventDefault();
        
        axios.post("http://localhost:8082/signup",inputValue)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className='col-md-6 bg-light p-4 shadow-lg'>
                    <form onSubmit={submitHandale}>
                        <div className="mb-3">
                            <p   className="htmlform">Name</p>
                            <input type="text" className="form-control"  name="name" onChange={inputHandle} />

                        </div>
                        <div className="mb-3">
                            <p  className="htmlform">Email address</p>
                            <input type="email" className="form-control" name="email"  onChange={inputHandle} />

                        </div>
                        <div className="mb-3">
                            <p  className="htmlform">Password</p>
                            <input type="password" className="form-control" name="password"  onChange={inputHandle} />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup