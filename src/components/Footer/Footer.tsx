import React from 'react';
import {
    CopyrightStyled,
    FooterStyled,
    InnerStyled,
    LinksStyled,
    LinkStyled,
    NavStyled,
    SocialWrapperStyled,
} from './Footer.style';
import { FOOTER_LINKS, FOOTER_SOCIALS } from './Footer.constants';
import { Link } from 'react-router-dom';
import { LANDING } from '../../constants/links';

export const Footer = () => {
    return (
        <FooterStyled>
            <InnerStyled>
                <NavStyled>
                    <LinksStyled>
                        {FOOTER_LINKS.map(({ link, text }) => (
                            <LinkStyled key={link}>
                                <Link to={link}>{text}</Link>
                            </LinkStyled>
                        ))}
                    </LinksStyled>
                </NavStyled>
                <Link to={LANDING}>
                    <img src="/img/footerLogo.png" alt="logo" />
                </Link>
                <SocialWrapperStyled>
                    {FOOTER_SOCIALS.map(({ img, link }) => (
                        <Link to={link} key={link}>
                            <img src={img} alt="social" />
                        </Link>
                    ))}
                </SocialWrapperStyled>
            </InnerStyled>
            <CopyrightStyled>Copyright © 2022 MOVIE. All Rights Reserved</CopyrightStyled>
        </FooterStyled>
    );
};
