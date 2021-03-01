import React from 'react';
import { Link } from "react-router-dom";
import classes from '../css/footerNavigation.module.css';

const FooterNavigation = () => {
    return(
       <div className={classes.footerLinks}>
           <Link className={classes.link} exact to='/privacyPolicy'>Privacy Policy</Link>
           <Link className={classes.link} exact to='/termsAndConditions'>Terms and Conditions</Link>
           <Link className={classes.link} exact to='/cancellationAndRefundPolicy'>Cancellation and Refund Policy</Link>
       </div>
    );
}

export default FooterNavigation;

