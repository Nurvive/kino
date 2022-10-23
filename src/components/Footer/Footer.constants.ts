import { SIGN_IN, SIGN_UP } from 'src/constants/links';
import facebook from 'src/assets/img/socials/Facebook.png';
import twitter from 'src/assets/img/socials/Twitter.png';
import youtube from 'src/assets/img/socials/YouTube.png';
import instagram from 'src/assets/img/socials/Instagram.png';

export const FOOTER_LINKS = [
    { text: 'Войти', link: SIGN_IN },
    { text: 'Зарегистрироваться', link: SIGN_UP },
];

export const FOOTER_SOCIALS = [
    {
        img: facebook,
        link: 'https://www.google.com/search?q=facebook&oq=faceb&aqs=chrome.0.0i131i433i512j69i57j0i512l2j0i131i433i512j0i512l2j0i433i512j0i512.2525j0j7&sourceid=chrome&ie=UTF-8',
    },
    {
        img: twitter,
        link: 'https://www.google.com/search?q=twitter&sxsrf=ALiCzsalec3pkEmWmXha1TnD5TfrWMw2bA%3A1664183340226&ei=LGwxY820Da-rrgTf74GICA&gs_ssp=eJzj4tLP1TfIyDMsS05XYDRgdGDwYi8pzywpSS0CAFnOB00&oq=tw&gs_lcp=Cgdnd3Mtd2l6EAEYATIKCAAQsQMQgwEQQzIQCC4QsQMQgwEQxwEQ0QMQQzIKCAAQsQMQgwEQQzILCAAQgAQQsQMQgwEyCwguEIAEELEDEIMBMgQIABBDMgQIABBDMgsILhCABBCxAxCDATIICC4QgAQQsQMyCwguEIAEEMcBEK8BOgQIIxAnOggIABCABBCxA0oECEEYAEoECEYYAFAAWOIBYPQJaABwAXgAgAFmiAHJAZIBAzEuMZgBAKABAcABAQ&sclient=gws-wiz',
    },
    { img: youtube, link: 'https://www.youtube.com' },
    {
        img: instagram,
        link: 'https://www.google.com/search?q=instagram&sxsrf=ALiCzsYMheaoUuxU31rACOZ3CmmyFCLKqg%3A1664183371689&ei=S2wxY8LhKdDmrgT7h5yAAw&oq=in&gs_lcp=Cgdnd3Mtd2l6EAEYAzIECCMQJzIECCMQJzIGCCMQJxATMgoIABCxAxCDARBDMgoIABCxAxCDARBDMgQIABBDMgQIABBDMg4ILhCABBCxAxDHARDRAzIICAAQgAQQsQMyCAgAEIAEELEDOg0ILhDHARDRAxDqAhAnOgcIIxDqAhAnOgsIABCABBCxAxCDAToLCC4QgAQQxwEQrwFKBAhBGABKBAhGGABQmQNYjAVg7w5oAXABeACAAVuIAbEBkgEBMpgBAKABAbABCsABAQ&sclient=gws-wiz',
    },
];
