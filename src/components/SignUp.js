import React from 'react';

// styling
import '../css/login.module.css';

const SignUp = () => {

  return (
    <section id="Login" align="center">
        <div>
            
            <form>
                
                <fieldset>
                <h2>SignUp!</h2>
                    <table align="center">
                       
                        <tr>
                            <td>Email:</td>
                            <td><input  type="text" name="Email" placeholder="Enter your Email" /></td>
                        </tr>
                        <tr>
                            <td>Mobile:</td>
                            <td><input  type="text" name="Mobile" placeholder="Enter your Mobile" /></td>
                        </tr>
                        <tr>
                            <td>Password:</td>
                            <td><input  type="password" name="Password" placeholder="Enter your Password" /></td>
                        </tr>
                    </table>
                
                    <button type="submit">SignUp</button>
         </fieldset><br />
       <button type="submit">Submit</button>
      </form>
        </div>
        </section>
  );
}

export default SignUp;
