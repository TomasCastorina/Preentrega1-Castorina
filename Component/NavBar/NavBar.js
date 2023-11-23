import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from 'Component\NavBar\Logo.js';


function ColorSchemesExample() {
  return (
    <>
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#logo"> <Logo /> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#tienda">Tienda</Nav.Link>
            <Nav.Link href="#sobremi">Sobre mi</Nav.Link>
            <Nav.Link href="#cartwidget"> <CartWidget/> </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
       );
     }

     export default ColorSchemesExample;