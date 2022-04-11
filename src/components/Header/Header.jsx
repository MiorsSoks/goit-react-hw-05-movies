import { Link, Nav, NavItem, HeaderContainer } from './HeaderStyled';

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <Nav>
          <ul>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/movies">Movies</Link>
            </NavItem>
          </ul>
        </Nav>
      </HeaderContainer>
    </>
  );
}
