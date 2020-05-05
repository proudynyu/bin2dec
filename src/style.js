import styled from 'styled-components';

export const Container = styled.div`
    width: 70vw;
    height: 80vh;
    margin: 40px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    width: 80%;
    height: 50vh;
    justify-content: space-between;
    margin: auto;
    margin-top: 15vh;
    padding: 3.5rem;
    align-items: center;
    border-radius: 10px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
`;

export const Label = styled.label`
    text-align: left;
    font-size: 22px;
    font-weight: 52;
`;

export const Input = styled.input`
    width: 100%;
    height: 5vh;
    padding: 10px;
    border-radius: 8px;
`;

export const Button = styled.button`
    width: 20%;
    height: 20px;
    margin-top: 10px;
`;

