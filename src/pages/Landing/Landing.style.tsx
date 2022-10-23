import styled from 'styled-components';
import { Layout } from 'src/components/Layout';
import { pageContainer } from 'src/mixins';

export const WrapperContent = styled.div`
    ${pageContainer};
    padding-top: 35px;
`;

export const LayoutStyled = styled(Layout)`
    background-color: #f5f6f6;
`;
