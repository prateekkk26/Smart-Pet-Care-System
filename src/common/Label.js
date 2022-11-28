import styled from 'styled-components'

export const CustomLabel = styled.label`
    font-weight: bold;
    font-size: ${p => p.fontSize ? p.fontSize : '1rem'};
    margin: ${p => p.margin ? p.margin : '1rem 0'};
    width: 100%;
    color: #888888;
`