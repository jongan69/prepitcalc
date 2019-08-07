import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">Prepit App</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Calculator">Food Budget Calculator</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/LearnMore">Learn More</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

// import React from 'react';
// import { Link } from 'react-router-dom';

// const NavBar = () => (
//   <nav>
//     <ul>
//       <li>
//         <Link to="/"> Home </Link>
//       </li>
//       <li>
//         <Link to="/Calculator"> Calculator </Link>
//       </li>
//     </ul>
//   </nav>
// );

// export default NavBar;