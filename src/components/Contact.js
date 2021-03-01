import React from 'react';
import classes from '../css/contact.module.css';

import FooterNavigation from './FooterNavigation'

const Contact = () => {
    return(
        <section id="contact">
        <div className={classes.contact}>
            <h2>Get in Touch</h2>
            <FooterNavigation/>
            <hr></hr>
            <h3>Copyright © 2021, made by Nerchapetti. All Rights Reserved.</h3>
        </div>
        </section>
    );
}

export default Contact;
