import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mediaTablet } from 'src/constants/breakpoints';
import { CustomLink } from 'src/components/CustomLink';

export const SignInStyled = styled(Link)`
    color: white;
    font-size: 20px;

    ${mediaTablet()} {
        font-size: 16px;
    }
`;

export const SignUpStyled = styled(CustomLink)`
    ${mediaTablet()} {
        font-size: 16px;
        padding: 8px 10px;
    }
`;
