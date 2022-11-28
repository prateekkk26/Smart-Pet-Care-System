import styled from 'styled-components';

export const CustomButton= styled.button`
    color: ${p => p.buttonColor || 'white'};
    background: ${p => p.buttonBackgroundColor || '#FFC0CB'};
    border: none;
    padding: ${p => p.padding};
    margin: ${p => p.margin || "5px"};
    font-size: ${p => p.fontSize || '16px'};
    width: ${p => p.width};
    box-shadow: 3px 4px 7px 0px rgba(22,32,61, 0.42);
    height: ${p => p.height || '34px'};
    min-height: 34px;
    font-weight: bold;
    border-radius: 15px;

    &:hover {
        ${'' /* box-shadow: -1px -2px 1px 0px rgba(0,0,0, 0.36); */}
        opacity: .8;
        cursor: ${p => p.cursor || 'pointer'};
        outline: none;
    } 
    
    &:disabled {
        pointer-events: none;
        background: #dddddd;
    }

    &:focus {
        outline: none;
    }
`;