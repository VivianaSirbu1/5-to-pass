import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  UncontrolledDropdown,
} from 'reactstrap';
 import './NavbarMenu.css';

export default function NavbarMenu({ useAuthHandler })
{
  const [isCollapsed, toggleCollapse] = useState(true);
  const toggle = () => toggleCollapse(!isCollapsed);
  const authHandler = useAuthHandler();

  const logout = () => authHandler.logout();

  return (
    <Navbar className="color-nav" expand="md" id="navbar-color">
      <NavbarBrand href="/" className="mr-auto">5 To Pass</NavbarBrand>
      <NavbarToggler className="mr-2" onClick={toggle}  />
      { authHandler.isAuthenticated()
      ? (<Collapse isOpen={!isCollapsed} navbar>
          <Nav navbar className="mr-auto">
            <NavItem className="mx-2">
              <Link to="/" className="text-light nav-link">Acasa</Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar className="mx-2">
              <DropdownToggle nav caret className="text-light">Acordare Note</DropdownToggle>
              <DropdownMenu right className="color-nav">
                <DropdownItem tag={Link} to="/teams" className="color-nav">Echipe</DropdownItem>
                <DropdownItem tag={Link} to="/students" className="color-nav">Studenti</DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag={Link} to="/grade" className="color-nav">Note</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem className="mx-2">
              <Link to="/professors" className="text-light nav-link">Profesori</Link>
            </NavItem>
          </Nav>
          <UncontrolledDropdown inNavbar className="mr-2">
            <DropdownToggle nav caret className="text-light">Bine ai venit, {authHandler.getUsername()}!</DropdownToggle>
            <DropdownMenu  right className="color-nav">
              <DropdownItem tag={Link} to={`/user/${authHandler.getUsername()}`} className="color-nav">Profil</DropdownItem>
              <DropdownItem divider />
              <DropdownItem className="color-nav" onClick={logout}>Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Collapse>)
        : (<Collapse isOpen={!isCollapsed} navbar>
          <Nav navbar className="mr-auto">
            <NavItem className="mx-2 px-2 border border-white rounded">
              <Link to="/login" className="text-light">Login</Link>
            </NavItem>
            <NavItem className="mx-2">
              <Link to="/sign-up" className="text-light">Creeaza un cont</Link>
            </NavItem>
          </Nav>
        </Collapse>)}
    </Navbar>
  );
}
