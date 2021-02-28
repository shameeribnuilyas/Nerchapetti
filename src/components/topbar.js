import React from 'react';
import classes from '../css/topbar.module.css';

const TopBar = () => {
    return(
    <header className={classes.appHeader}>
    <nav>
      <div>Home</div>
      <div>About Us</div>
      <div>Donate</div>
      <div>Contact Us</div>
      <div className={classes.login}>Login</div>
    </nav>
   </header>
    );
}

export default TopBar;