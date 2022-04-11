import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const Link = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 25px;
  cursor: pointer;
  :hover {
    color: orangered;
  }
`;
export const Nav = styled.nav`
  padding: 10px 0 10px 0;
`;
export const NavItem = styled.li`
  list-style: none;
  display: inline;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
export const HeaderContainer = styled.header`
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;
