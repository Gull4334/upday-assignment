import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { actionCreator, State } from '../state';
import { userLoginPayload } from '../state/actions/actions';


const Login = () => {
    debugger;
    const dispatch = useDispatch();

    const myReduxState = useSelector((state:State) => state.user);

    debugger;

    let navigate = useNavigate();
    const { loginUserAction } = bindActionCreators(actionCreator, dispatch);
    
    
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
        else {
            const newUser: userLoginPayload = {
                userName:input.email,
                password:input.password
            }
            loginUserAction(newUser);
            navigate(`/home`);
        }
    }

    return (
        <div className='main-container'>
            <div className='base-color login-container'>
                <div className='custom-block'>
                    <h1>LOGIN</h1>
                    <p>Please login to view boards</p>
                </div>
                <div className='custom-block'>
                    <div className='box'>
                        <input name='email' type='email' value={input.email} onChange={handleChange} />
                    </div>
                    <div className='box'>
                        <input name='password' type='password' value={input.password} onChange={handleChange} />
                    </div>
                    <div className='box'>
                        <button onClick={loginUser}>LOGIN</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Login;