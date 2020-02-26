import React from 'react';

import ContactForm from '../../components/ContactForm/ContactForm';

import { ContactPageContainer } from './ContactPageStyles';

const ContactPage = () => (
  <ContactPageContainer>
    <h2>Contact us</h2>
    <ContactForm />
  </ContactPageContainer>
)

export default ContactPage;