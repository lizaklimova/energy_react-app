import {
  Nav,
  NavList,
  NavItem,
  NavigLink,
} from '../Navigation/Navigation.styled';

const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavigLink to="/">Home</NavigLink>
        </NavItem>
        <NavItem>
          <NavigLink to="/favourites">Favourites</NavigLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;
