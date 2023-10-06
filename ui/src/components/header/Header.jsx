import React from "react";
import styles from './Header.module.css'

import { Link } from "react-router-dom";

import logo from '../../images/ssilogo.webp';
import icon from "../../icons/icons";
const NavBar = () => {
    return(
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logo} />
            </div>
            <ul>
                <li><Link to={'/news'}>news</Link></li>
                <li><Link to={'/blog'}>blog</Link></li>
                <li><Link to={'/team'}>team</Link></li>
                <li><Link to={'/store'}>store</Link></li>
                <li><Link to={'/courese'}>courses</Link></li>
                <li><Link to={'/specialties'}>specialties</Link></li>
                <li><Link to={'/gallery'}>gallery</Link></li>
                <li><Link to={'/services'}>services</Link></li>
            </ul>
            <div className={styles.searchbar}>
            <form action="" className={styles.form}>
                <input type="text" placeholder="Search.." />
                <button type="submit"><img src={icon} alt="Free Search Icon by Akveo on IconScout" /></button>
            </form>
            </div>
        </nav>
    )
}

export default NavBar;