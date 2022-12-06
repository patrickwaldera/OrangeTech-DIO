import styled from 'styled-components'

export const ButtonContainer = styled.button`
    padding: 10px;
    border: 1px solid #607d8b;
    background-color: ${({color}) => color};
    color: #FFF;
    font-size: 24px;
    font-weight: 700;
    border-radius: 5px;
    margin: 4px;
    flex: ${({flex}) => flex};

    &:hover {
        opacity: 0.6;
    }
    
`