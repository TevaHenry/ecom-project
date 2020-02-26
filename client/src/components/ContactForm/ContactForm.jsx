import React, { useState } from 'react';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { ContactFormContainer } from './ContactFormStyles'

const ContactForm = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    window.alert(`This is just a dummy form. But thank you for trying, ${name}`)
  }

  return (
    <ContactFormContainer onSubmit={handleSubmit} >
        <FormInput 
          name='name' 
          type='text' 
          value={name} 
          handleChange={event => setName(event.target.value)} 
          label='name' 
          required 
        />
        <FormInput 
          name='email'
          type='email' 
          value={email} 
          handleChange={event => setEmail(event.target.value)} 
          label='email' 
          required 
        />
        <textarea
          name="message"
          rows="8"
          placeholder="Enter Your Message..."
        ></textarea>
        <CustomButton type='submit'> Send </CustomButton>
      </ContactFormContainer>
  );
};

export default ContactForm;