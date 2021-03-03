import React from 'react';
import SearchBox from './SearchBox';
import classes from '../css/donate.module.css';

const Donate = () => {
    return(
        <section id="donate">
        <div className={classes.donate}>
            
            <form>
                
                <fieldset>
                <h2>Donate</h2>
                    <table align="center">
                        <tr>
                            <td>Name:</td>
                            <td><input  type="text" name="name" placeholder="Enter your Name" /></td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td><input  type="text" name="Email" placeholder="Enter your Email" /></td>
                        </tr>
                        <tr>
                            <td>Mobile:</td>
                            <td><input  type="text" name="Mobile" placeholder="Enter your Mobile" /></td>
                        </tr>
                        <tr>
                            <td>NerchapettiID:</td>
                            <td><input  type="text" name="NerchapettiID" placeholder="Enter your Nerchapetti ID" /></td>
                        </tr>
                        <tr>
                            <td>Purpose:</td>
                            <td><input  type="text" name="Purpose" placeholder="For what Purpose" /></td>
                        </tr>
                        <tr>
                            <td>Amount:</td>
                            <td><input  type="text" name="Amount" placeholder="Enter Amount or select below" /></td>
                        </tr>
                        <tr>    
                            <td> {"   "}</td>    
                            <td> or {"   "}</td>
                        </tr>
                        <tr>
                            <td> {"   "}Select Any Amount</td>
                            <td>
                                <button variant="primary"> 10</button>{"   "}
                                <button>20</button>{"   "}<button>50</button>{"   "}
                                <button>100</button><br /><br />{"   "}<button>200</button>{"   "}<button>500</button>{"   "}<button>2000</button>
                            </td>
                        </tr>
                    </table>
                
         
         </fieldset><br />
       <button type="submit">Submit</button>
      </form>
        </div>
        </section>
    );
}

export default Donate;
