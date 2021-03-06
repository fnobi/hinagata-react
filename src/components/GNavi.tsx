import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.ul`
    margin-top: 1em;
`;

const NavItem = styled.li`
    display: inline-block;
    &:after {
        content: '/';
        padding: 0em 0.5em;
    }
    &:last-child {
        &:after {
            display: none;
        }
    }
    a {
        color: inherit;
    }
`;

export default () => (
    <Wrapper>
        <NavItem>
            <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
            <Link to="/about/">About</Link>
        </NavItem>
        <NavItem>
            <Link to="/users/">Users</Link>
        </NavItem>
    </Wrapper>
);
