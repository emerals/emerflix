import React from 'react';
import Logo from '../../assets/Logo.png'
import './Menu.css'
import ButtonLink from '../ButtonLink';
import { Link } from 'react-router-dom'

function Menu () {

    return(
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Logo Emerflix" />
            </Link>
            
            <ButtonLink as={Link} className="ButtonLink" to ="/cadastro/video">
                novo item
            </ButtonLink>
        </nav>
    );
} 

export default Menu