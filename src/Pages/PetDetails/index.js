import React, { useState, useContext, useEffect } from 'react'
import { CustomButton, CustomInput, CustomLabel } from '../../common'
import { PetDetailsBox, PetDetailsContainer, PetDetailsForm, PetDetailsHeading, Logo } from './style'
import LogoImg from '../../images/logo.jpeg'
import { Context } from '../../ContextProvider'
import Axios from 'axios'

const PetDetails = () => {
    const { contextOnChange } = useContext(Context);
    const [petName, setPetName] = useState('');
    const [petAge, setPetAge] = useState(0);

    useEffect(() => {
        contextOnChange('path', '/pet/add');
    }, [])


    const onChangeHandler = (e, type) => {
        if (type === 'petName') {
            setPetName(e.target.value);
        } else if (type === 'petAge') {
            setPetAge(e.target.value);
        }
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let payload = {
            pet_name: petName,
            pet_age: +petAge // convert to number
        }

        console.log(payload);
        return;

        let URL = 'https://weak-taxis-hunt-174-88-36-247.loca.lt/user/add';
        let headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
            // "Authorization" : `Bearer ${getToken()}` || null,
        }
        Axios(URL, {
            method:'POST',
            headers,
            data: payload
        }).then(response => response)
        .catch(error => {
            
        })
    }

    return (
        <PetDetailsContainer>
            <PetDetailsHeading>Smart Pet Care System</PetDetailsHeading>
            <Logo src={LogoImg} alt="Pet Care Logo" />
            <PetDetailsForm onSubmit={onSubmitHandler}>
                <PetDetailsBox>
                    <CustomLabel>Enter Pet Name</CustomLabel>
                    <CustomInput 
                        type="text"
                        margin=".7rem 0"
                        value={petName}
                        onChange={(e) => onChangeHandler(e, 'petName')}
                    />
                </PetDetailsBox>
                <PetDetailsBox>
                    <CustomLabel>Enter Pet Age</CustomLabel>
                    <CustomInput 
                        type="number"
                        margin=".7rem 0"
                        value={petAge}
                        onChange={(e) => onChangeHandler(e, 'petAge')}
                    />
                </PetDetailsBox>
                <CustomButton
                    type="submit"
                    width="7rem"
                >Add</CustomButton>
            </PetDetailsForm>
        </PetDetailsContainer>
    )
}

export default PetDetails