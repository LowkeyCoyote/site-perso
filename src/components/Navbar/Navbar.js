import React from 'react'
import styles from './Navbar.module.css'
import { NavLink, Link } from 'react-router-dom'

import NavbarLogo from '../../assets/icons/icon-site.png'

export default function Navbar() {
    return (
      <header className={styles.header}>
        <Link to="/">
            <img src={NavbarLogo} alt="logo du site" />
        </Link>
        <nav className={styles.links}>
            <NavLink
            to="/"
            className={({isActive}) => isActive ? styles.active : undefined}
            end>
                Accueil
            </NavLink>
            <NavLink
            to="/contact"
            className={({isActive}) => isActive ? styles.active : undefined}
            end>
                Contact
            </NavLink>



        </nav>
      </header>
    )
  }