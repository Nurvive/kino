import styled from 'styled-components';
import { mediaOtherSize } from 'src/constants/breakpoints';
import { Layout } from 'src/components/Layout';
import { pageContainer } from 'src/mixins';

export const LayoutStyled = styled(Layout)`
    background-color: #ccc;
`;

export const FavoritesPageStyled = styled.div`
    ${pageContainer};
    height: 100vh;
`;

export const CardsWrapper = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    padding: 15px 0;

    ${mediaOtherSize(900)} {
        justify-content: center;
    }
`;
