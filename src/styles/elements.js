import styled from 'styled-components';
import { media } from '.';
import mixins from './mixins';

export const Wrapper = styled.div`
    padding: 0 20px;

    ${media.laptop} {
        margin: 0 auto;
        max-width: 1240px;
        padding: 0;
    }
`;

export const Grid = styled.section`
    display: flex;
    flex-wrap: wrap;
    display: grid;
    align-items: center;
    gap: 0 24px;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

const titles = {
    h2: 'font-size: 40px;',
    h3: 'font-size: 30px;',
    h4: 'font-size: 24px;',
    h5: 'font-size: 20px;',
    h6: 'font-size: 18px;',
    p: 'font-size: 22px;',
};

export const Title = styled.h1`
    ${(props) => (props.as in titles ? titles[props.as] : 'font-size: 50px;')};
    font-family: var(--font-secondary);
    font-weight: 700;
    letter-spacing: 0;
    line-height: 30px;
    margin-bottom: ${(props) => props.marginBottom || '10px'};
`;

export const Text = styled.p`
    color: ${(props) => (props.secondary ? 'var(--primary-color)' : 'var(--primary-text-color)')};
    display: ${(props) => props.display};
    font-size: ${(props) => (props.bold ? 'var(--font-size-xl)' : 'var(--font-size-md)')};
    font-weight: ${(props) => props.bold && '700'};
    line-height: 24px;
    margin-bottom: 10px;
    width: ${(props) => props.width};
`;

export const Anchor = styled.a`
    display: block;
    text-transform: capitalize;
`;

export const Button = styled.button`
    ${mixins.button}
`;

export const List = styled.ul`
    margin-bottom: 20px;
`;

export const ListItem = styled.li`
    font-size: 14px;
    letter-spacing: 0;
    line-height: 26px;

    &::before {
        ${mixins.inlineBlock}
        background-color: var(--primary-color);
        border-radius: 50%;
        content: '';
        height: 6px;
        margin-right: 7px;
        width: 6px;
    }
`;
