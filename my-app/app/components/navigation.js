// navigation bar
'use client'
// bootstrap components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
// my components
import Navmedialinks from './navmedialinks';
// images
import Logo from './imgs/logo'
import User from './imgs/user';

function OffcanvasExample() {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="border-bottom mb-3 mx-3 py-3 py-lg-4 " data-bs-theme="dark">
          <Container fluid className='justify-content-start flex-nowrap px-0'>
            {/* button */}
            <Navbar.Toggle className='border-0 p-0' aria-controls={`offcanvasNavbar-expand-${expand}`} />
            {/* logo */}
            <Navbar.Brand className='me-0 flex-grow-1 flex-lg-grow-0 p-0' href="#"> <Logo /></Navbar.Brand>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="ms-5">
                  <Nav.Link className='d-flex d-lg-none text-warning' href="#action1"><User /><p className='mb-0 ms-2'>Log In</p></Nav.Link>
                  <Nav.Link className='text-white fw-lighter' href="#action2" style={{ fontSize: '14px' }}>Home</Nav.Link>
                  <Nav.Link className='text-white fw-light' href="#action3" style={{ fontSize: '14px' }}>Benefits</Nav.Link>
                  <Nav.Link className='text-white fw-light' href="#action4" style={{ fontSize: '14px' }}>Reviews</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            {/* login button */}
            <Nav.Link id='loginButton' className='d-flex d-none d-lg-flex text-white' href="#action1"><User /> <p className='ms-2 mb-0 fw-light text-warning' style={{ fontSize: '12px' }}>Login</p></Nav.Link>
            {/* Order now button */}
            <Nav.Link className='d-flex d-none d-lg-block mx-3 icon-link-hover' href="#action1"> <Button variant="outline-warning" style={{ fontSize: '12px' }}>Order Now</Button>{' '}</Nav.Link>
            {/* social media links */}
            <Navmedialinks />
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;