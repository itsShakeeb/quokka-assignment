import React, { useContext } from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { AppContext } from "../../Context/Context";

const Header = () => {
  const context = useContext(AppContext);
  return (
    <div>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#'>
            <img
              alt=''
              src='https://cdn.quokkalabs.com/img/logo.png'
              width='30'
              height='30'
              className='d-inline-block align-top'
            />
            <span className='mx-2'>Quokka Dashboard</span>
          </Navbar.Brand>
          <Button onClick={context.handleLogout} variant='secondary'>
            Logout
          </Button>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
