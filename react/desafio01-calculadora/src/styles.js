import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    height: 100vh;
    background-color: #263238;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
        color: #fff;
        margin-bottom: 20px;
        font-family: 'Pacifico', cursive;
        font-weight: 200;
    }
`

export const Content = styled.div`
    background-color: #78909c;
    max-width: 300px;
    min-height: 450px;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
`

export const NumbersAndOp = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 4;
    width: 100%;
    align-self: center;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

