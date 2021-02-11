import React from 'react';
import { Helmet } from 'react-helmet';
import ContactForm from '../contact/ContactForm';

export function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact</title>
        <meta
          name="description"
          content="WittigNotes Contact is how you contact Felix Wittig"
        />
      </Helmet>

      <ContactForm />
    </>
  );
}

export default Contact;
