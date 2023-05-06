import React from 'react'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMagnifyingGlass, faClapperboard, faUser, faStar} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div>

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

export default Navbar