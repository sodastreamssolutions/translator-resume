import React, { Component } from 'react';

class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="contact">
                <h1 className="contact__header">kontakt</h1>
                <div className="contact-form__wrapper">
                    {/* <form>
                        <p><input type="text" name="name" placeholder="First name" required /></p>
                        <p><input type="text" name="last_name" placeholder="Last name" required /></p>
                        <p><input type="email" name="email" placeholder="Email" required /></p>
                        <p><input type="text" name="company" placeholder="Company name" /></p>
                        <p><input type="text" name="country" placeholder="Country" /></p>
                        <p><button type="submit">Submit</button></p>
                    </form> */}
                </div>
            </div>
         );
    }
}
 
export default ContactPage;