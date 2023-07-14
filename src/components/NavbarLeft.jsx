import React from 'react'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMagnifyingGlass, faClapperboard, faUser, faStar} from '@fortawesome/free-solid-svg-icons'
import { Navbar, Nav } from 'react-bootstrap';


const NavbarLeft = () => {
  return (
    <div>

<Navbar expand="lg" variant="dark" className='navbar-menu-toggler'>
      <Navbar.Toggle aria-controls="basic-navbar-nav"  className='navbar-icon' />
      <Navbar.Brand href="#" className='toggler-heading'>Binge</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/" className='side-nav-links' activeclass='active'>
              <p style={{paddingLeft:"10px"}}>
                Home 
              </p>
          </Nav.Link>
          <Nav.Link href="/shows/:id" className='side-nav-links' activeclass='active'>
          <p style={{paddingLeft:"10px"}}>
                    My Space
                </p>
          </Nav.Link>
          <Nav.Link href="/book/:id" className='side-nav-links' activeclass='active'>
          <p style={{paddingLeft:"10px"}}>
                Search 

                </p>
          </Nav.Link>
          <Nav.Link href="/movies" className='side-nav-links' activeclass='active'>
          <p style={{paddingLeft:"10px"}}>
                     Movies
                </p>
          </Nav.Link>
          <Nav.Link href="/User" className='side-nav-links' activeclass='active'>
          <p style={{paddingLeft:"10px"}}>
                     Account
                </p>
          </Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
 
         <nav className='side-nav'>
                <h1>Binge</h1>
       
        <div className='side-nav-div'>
        <NavLink to='/' className='side-nav-links' activeclass='active'>
                <p style={{paddingLeft:"10px"}}>
                <FontAwesomeIcon icon={faHouse} className='nav-logo'/> Home 
                </p>
            </NavLink>
        <NavLink to='/mySpace' className='side-nav-links' activeclass='active'>
                <p style={{paddingLeft:"10px"}}>
                    <FontAwesomeIcon icon={faStar} className='nav-logo' /> My Space
                </p>
            </NavLink>
            <NavLink to='/search' className='side-nav-links' activeclass='active'>
                <p style={{paddingLeft:"10px"}}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='nav-logo'/> Search 

                </p>
            </NavLink>
           
            <NavLink to='/Movies' className='side-nav-links' activeclass='active'>
                <p style={{paddingLeft:"10px"}}>
                    <FontAwesomeIcon icon={faClapperboard} className='nav-logo'/> Movies
                </p>
            </NavLink>
            <NavLink to='/account' className='side-nav-links' activeclass='active'>
                <p style={{paddingLeft:"10px"}}>
                    <FontAwesomeIcon icon={faUser} className='nav-logo'/>  Account
                </p>
            </NavLink>
            
        </div>
        </nav>

    </div>
  )
}

export default NavbarLeft