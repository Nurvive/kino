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
