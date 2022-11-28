import React, { useState, useEffect, useContext } from 'react'
import { CustomButton, CustomInput, CustomLabel } from '../../common'
import { LoginBox, LoginContainer, LoginForm, LoginHeading, Logo, ParagraphItem, SignUpLink } from './style'
import LogoImg from '../../images/logo.jpeg'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../../ContextProvider'
import { setStorageItem } from '../../utils/BasicFunctions'
import Axios from 'axios'

const Login = () => {
    const navigate = useNavigate();
    const { contextOnChange } = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        contextOnChange('path', '/');
    }, [])

    const onChangeHandler = (e, type) => {
        if (type === 'email') {
            setEmail(e.target.value);
        } else if (type === 'password') {
            setPassword(e.target.value);
        }
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        console.log({ email, password });
        // let url = 'https://weak-taxis-hunt-174-88-36-247.loca.lt/user/logins'
        // Axios(URL, {
        //     params,
        //     method:'GET',
        //     headers: getHeader()
        // }).then(response => response)
        setStorageItem('loggedIn', true);
        navigate('/dashboard');
    }

    return (
        <LoginContainer>
            <LoginHeading>Smart Pet Care System</LoginHeading>
            <Logo src={LogoImg} alt="Pet Care Logo" />
            <LoginForm onSubmit={onSubmitHandler}>
                <LoginBox>
                    <CustomLabel>Enter Email</CustomLabel>
                    <CustomInput 
                        type="text"
                        margin=".7rem 0"
                        value={email}
                        onChange={(e) => onChangeHandler(e, 'email')}
                    />
                </LoginBox>
                <LoginBox>
                    <CustomLabel>Enter Password</CustomLabel>
                    <CustomInput 
                        type="password"
                        margin=".7rem 0"
                        value={password}
                        onChange={(e) => onChangeHandler(e, 'password')}
                    />
                </LoginBox>
                <CustomButton
                    type="submit"
                    width="7rem"
                >Login</CustomButton>
            </LoginForm>
            <ParagraphItem>
                Create an Account ? <Link 
                    to="signup"
                    style={{
                        textDecoration: 'none'
                    }}
                >Signup</Link>
            </ParagraphItem>
        </LoginContainer>
    )
}

export default Login
