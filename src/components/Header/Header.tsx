import React from 'react';
import { HeaderStyled, LogoStyled, NavStyled } from './Header.style';
import { LANDING, USER_PAGE } from 'src/constants/links';
import { Link } from 'react-router-dom';
import logo from 'src/assets/img/logo.png';
import { HeaderAuth } from './HeaderAuth';
import { useAppSelector } from 'src/store';
import { CustomLink, CustomLinkStyles } from 'src/components/CustomLink';

export const Header = () => {
    const { email } = useAppSelector((state) => state.auth);
    return (
        <HeaderStyled>
            <Link to={LANDING}>
                <LogoStyled src={logo} alt="logo" />
            </Link>
            <NavStyled>
                {email ? (
                    <CustomLink href={USER_PAGE} styles={CustomLinkStyles.OUTLINED}>
                        {email}
                    </CustomLink>
                ) : (
                    <HeaderAuth />
                )}
            </NavStyled>
        </HeaderStyled>
    );
};
