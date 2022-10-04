import styled from 'styled-components';
import { COLORS } from 'src/constants/colors';

export const ListNavStyled = styled.ul`
    display: flex;
    gap: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(36, 43, 45, 0.1);
`;

export const ItemStyled = styled.li`
    color: ${COLORS.Blue};
    cursor: pointer;
`;
