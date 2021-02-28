import React from 'react';
import classes from '../css/contact.module.css';

const Contact = () => {
    return(
        <div className={classes.contact}>
            <h2>Get in Touch</h2>
            <div className={classes.policies}>
                <div>
                    <h4>Privacy Policy</h4>
                </div>
                <div>
                    <h4>Terms & Conditions</h4>
                </div>
                <div>
                    <h4>Cancellation & Refund Policy</h4>
                </div>
            </div>
            <hr></hr>
            <h3>Copyright © 2021, made by Nerchapetti. All Rights Reserved.</h3>
        </div>
    );
}

export default Contact;