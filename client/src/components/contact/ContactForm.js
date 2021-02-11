/* eslint-disable global-require */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import ErrorMessage from './ErrorMessage';
import Heading from '../layout/Heading';

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required('First name is required')
    .min(2, 'Your first name must contain at least 2 characters'),

  lastName: yup
    .string()
    .required('Last name is required')
    .min(2, 'Your last name must contain at least 2 characters'),

  email: yup
    .string()
    .email('Invalid email')
    .required('A valid Email is required'),

  subjectField: yup
    .string()
    .required('Subject is required')
    .min(4, 'Your subject must contain at least 4 characters'),

  messageField: yup
    .string()
    .required('Message is required')
    .min(10, 'Your message must contain at least 10 characters'),
});

function ContactForm() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [sent, setSent] = React.useState(false);
  const [responseObj, setResponseObj] = React.useState(true);

  function ValidationMessage(props) {
    if (responseObj.success) {
      return (
        <div className="validationMessage">
          <h3>Thank you!</h3>
          <p>{responseObj.message}</p>
        </div>
      );
    }
    return (
      <div className="validationMessage">
        <h3>Sorry,</h3>
        <p>{responseObj.message}</p>
      </div>
    );
  }

  function onSubmit(data) {
    console.log(data);
    const raw = {
      yourEmail: 'felixwittig@wittignotes.com',
      yourName: 'Felix',
      replyEmail: data.email,
      replyName: `${data.firstName} ${data.lastName}`,
      subject: data.subjectField,
      content: data.messageField,
    };

    axios
      .post('/sendmail', raw, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        setResponseObj({
          success: response.data.success,
          message: response.data.message,
        });
        console.log(responseObj);
      })
      .catch((error) => {
        setResponseObj({
          success: false,
          message: error.response.data.message,
        });
      });
    setSent(true);
  }

  return (
    <div className="contact">
      <Form
        className="contact__form"
        onSubmit={handleSubmit(onSubmit)}
      >
        {sent && <ValidationMessage />}
        <Heading title="Contact Me" />
        <Form.Group>
          <Form.Label>First name:</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            ref={register}
          />
          {errors.firstName && (
            <ErrorMessage>{errors.firstName.message}</ErrorMessage>
          )}
        </Form.Group>

        <Form.Group>
          <Form.Label>Last name:</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            placeholder="Enter your Last name"
            ref={register}
          />
          {errors.lastName && (
            <ErrorMessage>{errors.lastName.message}</ErrorMessage>
          )}
        </Form.Group>

        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="text"
            name="email"
            placeholder="Enter your Email"
            ref={register}
          />
          {errors.email && (
            <ErrorMessage>{errors.email.message}</ErrorMessage>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Subject:</Form.Label>
          <Form.Control
            name="subjectField"
            type="text"
            placeholder="What is your enquiry about"
            ref={register}
          />
          {errors.subjectField && (
            <ErrorMessage>{errors.subjectField.message}</ErrorMessage>
          )}
        </Form.Group>

        <Form.Group>
          <Form.Label>Message:</Form.Label>
          <Form.Control
            as="textarea"
            name="messageField"
            type="text"
            placeholder="Enter your Message"
            ref={register}
          />
          {errors.messageField && (
            <ErrorMessage>{errors.messageField.message}</ErrorMessage>
          )}
        </Form.Group>

        <Button variant="submit" size="lg" type="submit">
          Send
        </Button>
      </Form>
    </div>
  );
}

export default ContactForm;
