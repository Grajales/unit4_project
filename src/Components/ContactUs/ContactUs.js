import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

class ContactUs extends Component {
    
    handleFormSubmit = (e) => {
        e.preventDefault();
        // console.log('Contact Us:', e.target.newInquiry.value);
        this.props.createComments(e.target.newInquiry.value, 
                                    5, 
                                    e.target.newName.value,
                                    e.target.newEmail.value
        );
        this.props.history.push('/');
        
    }

    render() {
    
    return (
        <div className='ContactUs'>
            
            <div>Contact Us</div>
   
            <form onSubmit={this.handleFormSubmit}>
                    name: <input type="text" name='newName'/><br />
                    email: <input type="text" name='newEmail'/><br />
                    Inquiry: <textarea type="text" name='newInquiry'/><br />
                    
                    <input type="submit" />
            </form>
          

        </div>
    )};
}

export default ContactUs;