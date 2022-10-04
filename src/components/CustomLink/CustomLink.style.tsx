import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { CustomLinkStyles } from './CustomLink.types';

export const CustomLinkStyled = styled(Link)<{ styles?: CustomLinkStyles }>`
    background-color: #0aaee4;
    border-radius: 4px;
    font-size: 20px;
    padding: 10px 14px;
    color: white;

    ${({ styles }) => {
        switch (styles) {
            case CustomLinkStyles.OUTLINED:
                return css`
                    background-color: transparent;
                    padding: 9px 13px;
                    border: 1px solid white;
                `;
        }
    }}
`;
