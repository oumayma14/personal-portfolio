import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { Form , Button, Container } from 'react-bootstrap';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const name = formData.get("from_name");
    const email = formData.get("from_email");
    const message = formData.get ("message");

    if (!name || !email || !message ){
      toast.error ("All fields are required! ", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
      return ;
    }
    emailjs
      .sendForm('service_1czjd5n', 'template_x85oeaf', form.current, {
        publicKey: 'QNx3iZHS3x9vr5Nav',
      })
      .then(
        (result) => {
          toast.success("Email sent successfully",{
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        },
        (error) => {
          toast.error(`Failed to send email: ${error.text}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        }
      );
  };

  return (
    <Container className='mt-4'>
      <div className='contact-bx'>
          <form ref={form} onSubmit={sendEmail}>
              <Form.Group controlId="name">
                <Form.Label className='label'>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" name='from_name' />
              </Form.Group>
              <Form.Group controlId="email" className="mt-3">
                <Form.Label  className='label'>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" name='from_email'/>
            </Form.Group>
            <Form.Group controlId="message" className="mt-3">
              <Form.Label  className='label'>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Write your message here..." name='message' />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3" id='send-button'>
              Send
            </Button>
          </form>
      </div>
    </Container>
  );
};