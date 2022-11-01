import styled from 'styled-components';
import { Layout } from 'src/components/Layout';
import { pageContainer } from 'src/mixins';

export const LayoutStyled = styled(Layout)`
    background-color: #ccc;
`;

export const FilmPageStyled = styled.div`
    ${pageContainer};
    min-height: 100vh;
`;

export const TitleStyled = styled.h1`
    text-align: center;
`;

export const PosterStyled = styled.img`
    max-height: 500px;
`;

export const CustomLinkStyled = styled.a`
    margin-top: 20px;
    display: inline-block;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 4px;
    font-size: 20px;
    padding: 10px 14px;
    color: white;
`;
