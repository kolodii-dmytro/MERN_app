import React, {useState } from "react";

const LoginForm = (props) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const { submitLoginForm, errors } = props
    const isErrors = !!errors.length
    const submitForm = e => submitLoginForm({login,password})
    const onInputChange = e => {
        const {target:{name,value}} = e;
        
        switch (name) {
            case 'login' :{
                setLogin(value);
            }
            case 'Password': {
                setPassword(value);
            }
        }
    }
    return (
        <div>
            <span>Login form</span> <br/>
            <input 
            type={'text'}
            name ={'login'}
            onChange = {onInputChange}
            /> <br/>
            <input type={'text'}
            name ={'Password'}
            onChange = {onInputChange}/> <br/>
            <button onClick={submitForm}>Login</button> <br/>
            {isErrors ? (
                <ul>
                    {
                        errors.map((item, index) => (<li key={index}>Error: {item}</li>))
                    }
                </ul>
            ) : null}
        </div>
    )
}
export default LoginForm 