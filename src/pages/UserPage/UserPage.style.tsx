import styled from 'styled-components';
import { Layout } from 'src/components/Layout';
import { pageContainer } from 'src/mixins';

export const LayoutStyled = styled(Layout)`
    background-color: #ccc;
`;

export const UserPageStyled = styled.div`
    ${pageContainer};
    height: 100vh;
`;

export const EmailStyled = styled.h2``;

export const LogOutButtonStyled = styled.div`
    background-color: #0aaee4;
    border-radius: 4px;
    font-size: 20px;
    padding: 10px 14px;
    color: white;
    max-width: fit-content;
    cursor: pointer;
`
