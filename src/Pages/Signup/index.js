import React, { useState, useContext, useEffect } from 'react'
import { CustomButton, CustomInput, CustomLabel } from '../../common'
import { SignupBox, SignupContainer, SignupForm, SignupHeading, Logo } from './style'
import LogoImg from '../../images/logo.jpeg'
import { Context } from '../../ContextProvider'
import Axios from 'axios'
import { useNavigate } from 'react-router'

const Signup = () => {
    const { contextOnChange } = useContext(Context);
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        contextOnChange('path', '/signup');
    }, [])


    const onChangeHandler = (e, type) => {
        if (type === 'fullName') {
            setFullName(e.target.value);
        } else if (type === 'email') {
            setEmail(e.target.value);
        } else if (type === 'password') {
            setPassword(e.target.value);
        }
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let payload = {
            full_name: fullName,
            email_id: email,
            password
        }

        console.log(payload);

        let URL = 'https://solid-horses-grin-184-147-189-249.loca.lt/user/add';
        let headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
        Axios(URL, {
            method:'POST',
            mode: 'no-cors',
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
            },
            credentials: 'same-origin',
            data: payload
        }).then(response => {
            console.log(response);
            navigate('/dashboard');
        })
        .catch(error => {
            
        })
    }

    return (
        <SignupContainer>
            <SignupHeading>Smart Pet Care System</SignupHeading>
            <Logo src={LogoImg} alt="Pet Care Logo" />
            <SignupForm onSubmit={onSubmitHandler}>
                <SignupBox>
                    <CustomLabel>Enter Full Name</CustomLabel>
                    <CustomInput 
                        type="text"
                        margin=".7rem 0"
                        value={fullName}
                        onChange={(e) => onChangeHandler(e, 'fullName')}
                    />
                </SignupBox>
                <SignupBox>
                    <CustomLabel>Enter Email</CustomLabel>
                    <CustomInput 
                        type="text"
                        margin=".7rem 0"
                        value={email}
                        onChange={(e) => onChangeHandler(e, 'email')}
                    />
                </SignupBox>
                <SignupBox>
                    <CustomLabel>Enter Password</CustomLabel>
                    <CustomInput 
                        type="password"
                        margin=".7rem 0"
                        value={password}
                        onChange={(e) => onChangeHandler(e, 'password')}
                    />
                </SignupBox>
                <CustomButton
                    type="submit"
                    width="7rem"
                >Signup</CustomButton>
            </SignupForm>
        </SignupContainer>
    )
}

export default Signup