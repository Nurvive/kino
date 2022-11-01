import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mediaTablet } from 'src/constants/breakpoints';
import { CustomLink } from 'src/components/CustomLink';

export const SignInStyled = styled(Link)`
    color: white;
    font-size: 16px;

    ${mediaTablet()} {
        font-size: 12px;
    }
`;

export const SignUpStyled = styled(CustomLink)`
    font-size: 16px;

    ${mediaTablet()} {
        font-size: 12px;
        padding: 8px 10px;
    }
`;
