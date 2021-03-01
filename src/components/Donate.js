import React from 'react';
import SearchBox from './SearchBox';
import classes from '../css/donate.module.css';

const Donate = () => {
    return(
        <section id="donate">
        <div className={classes.donate}>
            <h1>Donate</h1>
            <SearchBox/>
        </div>
        </section>
    );
}

export default Donate;