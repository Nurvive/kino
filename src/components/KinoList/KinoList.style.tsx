import styled from 'styled-components';
import { mediaOtherSize } from 'src/constants/breakpoints';

export const CardsWrapper = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    padding: 15px 0;

    ${mediaOtherSize(900)} {
        justify-content: center;
    }
`;
