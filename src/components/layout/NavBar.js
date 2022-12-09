import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Navbar, NavItem} from 'react-bootstrap';
import '../../css/App.css';

const navbar_color = {backgroundColor: '#ABEBFF'};

const tabs = {fontWeight: 'bold'};
const user = {color: 'white'};

function NavBar(prop) {
    return (
    <Navbar style={navbar_color}  variant="dark">
      <Container>
        <Navbar.Brand href="/" className="navbar-brand mb-1 h1 fs-4">Save The Arctic</Navbar.Brand>
        <Nav className="me-auto">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="me-auto" style={tabs}>
              <NavItem >
                <Link to="/education" className="nav-link">Education</Link>
              </NavItem>
              <NavItem>
                <Link to="/quiz" className="nav-link">Quiz</Link>
              </NavItem>
              <NavItem>
                <Link to="/point" className="nav-link">My Points</Link>
              </NavItem>
              <NavItem>
                <Link to="/news" className="nav-link">News</Link>
              </NavItem>
            </Nav>
        </Nav>
        <Nav className='userName'>
          <NavItem style={user}>{prop.userName}</NavItem>
        </Nav>
      </Container>
    </Navbar>
  );

}

export default NavBar;