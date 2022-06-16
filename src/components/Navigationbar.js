import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
import { Link, Button} from 'react-scroll'



const Navigationbar = () => { 
    return(
        <>
                <Navbar bg="light" expand="lg">
                <Container>
                <Navbar.Brand href="#home">Frank Ocean</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                    <Nav.Link href="#home" >Home</Nav.Link>
                    <Nav.Link href="#link">Albums</Nav.Link>
                    <Nav.Link href="#link" >About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
        </Navbar>
        </>
    );
 }

 export default Navigationbar;
