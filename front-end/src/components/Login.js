import React, { useEffect } from 'react';
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const naviation = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if(auth){
            naviation('/');
        }
    },[]);

    const login = async () => {
        let result = await fetch('http://localhost:5000/login', {
                method:"post",
                body:JSON.stringify({email,password}),
                headers:{
                    "Content-Type" : "application/json"
                }
        });
        result = await result.json();
        if(result){
            localStorage.setItem("user", JSON.stringify(result));
            naviation('/');
        } else {
            alert("Invalid Email Or Password");
        }
    }

    return (
        <div className='login'>
            <h1>Login Form</h1>
            <input type="text" className="inputBox" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" />
            <input type="password" className="inputBox" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" />
            <button className="appButton" onClick={login} type="button">Login</button>
        </div>
    )
}

export default Login;