import React, { useContext } from 'react'
import { Context } from '../ContextProvider'
import { CustomButton } from './'
import styled from 'styled-components'
import { setStorageItem } from '../utils/BasicFunctions'
import { useNavigate } from 'react-router'

const NavMain = styled.div`
    width: 100%;
    background: #FFC0CB;
    color: #fff;
    margin: 0;
    padding: .8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NavTitle = styled.h2`
    display: inline-block;
`

const Navbar = () => {
    const navigate = useNavigate();
    const { title, path } = useContext(Context);
    let showIconsPath = ['/dashboard'];

    const handleLogout = () => {
        setStorageItem('loggedIn', false);
        navigate('/');
    }

    return (
        <NavMain>
            <NavTitle>{title}</NavTitle>
            {
                showIconsPath.includes(path) ? <CustomButton
                    width="8rem"
                    buttonBackgroundColor="#ffb6c1"
                    onClick={handleLogout}
                >Logout</CustomButton> : null
            }
        </NavMain>
    )
}

export default Navbar
