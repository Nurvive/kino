import styled from 'styled-components';

export const FormStyled = styled.form`
    display: flex;
    gap: 25px;
    flex-direction: column;
    max-width: 400px;
    padding: 20px 30px;
    background-color: white;
    border: 1px solid #aaa;
    border-radius: 10px;
    margin: 0 auto;
`;

export const TitleStyled = styled.h2`
text-align: center;
`;

export const InputStyled = styled.input`
    border-radius: 10px;
    border: 1px solid #eee;
    transition: 0.3s border-color;
    padding: 15px 10px;

    &:hover {
        border: 1px solid #aaa;
    }
`;

export const LoginButtonStyled = styled.button`
    max-width: 50%;
    background-color: #0aaee4;
    border-radius: 4px;
    font-size: 20px;
    padding: 10px 14px;
    color: white;
    cursor: pointer;
    text-align: center;
    border: none;
`;
