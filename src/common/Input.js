import React from 'react';
import styled from 'styled-components';

const InputStyle = styled.input`
    ${'' /* box-shadow: 1px 1px 8px 0px rgba(38,42,148); */}
    height: ${p => p.height || '20px'};
    width: ${p => p.width || '100%'};
    margin: ${p => p.margin || '10px'};
    padding: ${p => p.padding || '10px 10px 10px 10px'};
    color: #888888;
    border: 2px solid #d3d3d3;
    box-sizing: content-box!important;
    font-size: ${p => p.fontSize || '12px'};
    
    &:focus {
        outline: none;
    }

    &::-webkit-input-placeholder {
        color: #888888;
    }
`;

const EventHandler = (e) => {
    e.stopPropagation();
}

export const CustomInput = ({...props }) => {
    return <InputStyle
        onKeyUp={EventHandler} onKeyDown={EventHandler} onKeyPress={EventHandler} {...props} />
}

const InputWithoutBoxStyle = styled.input`
    border: none;
    border-bottom: 1px solid #262a94;
    margin: ${p => p.margin};
    width: ${p => p.width};
    padding: ${p => p.padding};
    color: #262a94;
    background: ${p => p.background};
    outline: none;
    box-sizing: border-box;

    &:focus {
        border: none;
        outline: none;
        border-bottom: 1px solid #262a94;
    }
`;

export const InputWithoutBox = ({ name, onChange, ...args }) => {
    return <InputWithoutBoxStyle
        onChange={(e) => onChange(name, e.target.value, e)}
        onKeyUp={EventHandler} onKeyDown={EventHandler} onKeyPress={EventHandler} {...args} />
}