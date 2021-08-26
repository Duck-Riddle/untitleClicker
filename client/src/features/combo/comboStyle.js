import styled from "styled-components"

export const StyledThermometer = styled.div`
    display: flex;
    flex-flow: column-reverse nowrap;
    height: 200px;
    width: 40px;
    border: 2px solid black;
`

export const ThermometerFill = styled.span`
    background-color: red;
    height: ${({combo}) => combo };
`