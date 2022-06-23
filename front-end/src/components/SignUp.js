import React,{useState , useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation =  useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem("user");
        if(auth){
            navigation('/')
        }
    },[])

    const register = async () => {
        let result = await fetch("http://localhost:5000/register", {
                method:'post',
                body: JSON.stringify({name,email,password}),
                headers:{
                    "Content-Type" : 'application/json'
                }
        });
        result = await result.json()
        if(result){
            localStorage.setItem("user", JSON.stringify(result));
            navigation('/');
        }
    }

    return (
        <div className='register'>
            <h1>Register Form</h1>
            <input type="text" className="inputBox" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" />
            <input type="text" className="inputBox" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" />
            <input type="password" className="inputBox" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" />
            <button className="appButton" onClick={register} type="button">Submit</button>
        </div>
    );
}
export default SignUp;