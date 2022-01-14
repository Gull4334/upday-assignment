import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
    let navigate = useNavigate();
    const [input, setInput] = useState({ email: "", password: "", isEmailValidated: false });

    const validateEmail = (email: string): boolean => {
        const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regularExpression.test(String(email).toLowerCase());
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const loginUser = (): void => {
        if (!validateEmail(input.email)) {
            alert('email not correct');
        }
        else{
            navigate(`/`);
        }
    }

    return (
        <div className='main-container'>
            <div className='login-container'>
                <div className='custom-block'><h1>LOGIN</h1></div>
                <div className='custom-block'>
                    <div>
                        <input name='email' type='email' value={input.email} onChange={handleChange} />
                        <input name='password' type='password' value={input.password} onChange={handleChange} />
                    </div>
                    <div>
                        <button onClick={loginUser}>LOGIN</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;