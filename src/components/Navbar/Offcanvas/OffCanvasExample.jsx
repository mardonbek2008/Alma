import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import Menu from './assets/icons/menu.svg'
<link rel="stylesheet" href="./Offcanvas.css" />

function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                <img src={Menu} alt="" className="button-logo" />
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header className="close-button" closeButton>
                    <Offcanvas.Title>Alma</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='linkbox' >
                    <div className="Link-mini-box">
                        <NavLink className="links" to="#" >Get Started</NavLink>
                        <NavLink className="links" to="#" >How It Works</NavLink>
                        <NavLink className="links" to="#" >For Providers</NavLink>
                        <NavLink className="links" to="#" >About Alma</NavLink>
                    </div>
                    <div className="button-box">
                        <NavLink className="button-one" to="" >Login</NavLink>
                        <NavLink className="button-two" to="">Find a Provider</NavLink>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Example;