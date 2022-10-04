import styled from 'styled-components';
import { COLORS } from 'src/constants/colors';

export const RatingStyled = styled.div`
    text-align: left;
    display: flex;
    gap: 8px;
    align-items: center;
`;

export const NumberStyled = styled.div`
    padding: 5px 10px;
    border: 1px solid ${COLORS.Blue};
    border-radius: 4px;
    color: white;
`;
