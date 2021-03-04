import React from 'react';

// styling
import '../css/login.module.css';

const SignIn = () => {
  return (
      
    <section id="Login" align="center">
        <div>
            
            <form>
                
                <fieldset>
                <h2>SignIn!</h2>
                    <table align="center">
                        
                        <tr>
                            <td>Email:</td>
                            <td><input  type="text" name="Email" placeholder="Enter your Email" /></td>
                        </tr>
                        <tr>
                            <td>password</td>
                            <td><input  type="password" name="Mobile" placeholder="Enter your password" /></td>
                        </tr>
                        
                    </table>
                
         
         </fieldset><br />
       <button type="submit">SignIn</button>
      </form>
        </div>
        </section>
  );
}

export default SignIn;
