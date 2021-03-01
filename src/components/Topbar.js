import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../css/topbar.module.css';

const TopBar = () => {
    return(
    <div id="home">
    <header className={classes.appHeader}>
    <nav>
    <div className="header">
        <Link exact to='/' className={classes.link}>Home</Link>
        <Link exact to='/about' className={classes.link}>About Us</Link>
        <Link exact to='/donate' className={classes.link}>Donate</Link>
        <Link exact to='/'className={classes.login}>Login</Link>
      </div>
     </nav>
   </header>
   </div>
    );
}

export default TopBar;