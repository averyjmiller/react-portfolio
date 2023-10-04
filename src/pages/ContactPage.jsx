import React, { useState } from 'react';
import { ValidationError } from '@formspree/react';

export default function ContactPage() {
  const [emailValid, setEmailValid] = useState(true);
  const [messageEmpty, setMessageEmpty] = useState(false);
  const [nameValid, setNameValid] = useState(true);

  const handelNameBlur = (e) => {
    const nameRegex = /\b([A-ZÀ-ÿ][-,a-z.']+ )*[A-ZÀ-ÿ][-,a-z.']* \b/;
    setNameValid(e.target.value != '');
  };

  const handleEmailBlur = (e) => {
    // Check if the email is empty or invalid and set the emailValid state
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setEmailValid(e.target.value.trim() && emailRegex.test(e.target.value));
  };

  const handleMessageBlur = (e) => {
    setMessageEmpty(!e.target.value.trim());
  };

  if (state.succeeded) {
    return (
      <div className='container page-section'>
        <div className='row d-flex section-name'>
          <h1 className='text-center text-secondary'>
            Message sent! I'll get back to you as soon as I can.
          </h1>
        </div>
      </div>
    );
  }
  return (
    <div className='container page-section'>
      <div className='row d-flex section-name'>
        <h1>Contact</h1>
        <div id="line-break"></div>
        <p>Leave a message for me and I'll get back to you as soon as I can.</p>
      </div>
      <div className='row contact-form justify-content-center'>
        <form className='form-control '>
          <label className='form-label' htmlFor='name'>
            Name
          </label>
          <input
            className='form-control hover-yellowFrame'
            id='name'
            type='name'
            name='name'
            onBlur={handelNameBlur}
            onChange={handelNameBlur}
            placeholder='Enter your name'
          />

          <label className='form-label' htmlFor='email'>
            Email
          </label>

          <input
            className='form-control hover-yellowFrame'
            id='email'
            type='email'
            name='email'
            onBlur={handleEmailBlur}
            onChange={handleEmailBlur}
            required
            placeholder='Enter your email'
          />
          {!emailValid && (
            <p className='text-end text-warning'>
              Please enter a valid email address
            </p>
          )}
          <ValidationError prefix='Email' field='Email' errors={state.errors} />

          <label className='form-label mb-2' htmlFor='message'>
            Message
          </label>
          <textarea
            className='form-control hover-yellowFrame mb-4'
            id='message'
            name='message'
            type='text'
            onBlur={handleMessageBlur}
            onChange={handleMessageBlur}
            placeholder='Leave a message for me'
          />
          {messageEmpty && (
            <p className='text-end text-warning'>
              Please leave a message
            </p>
          )}
          <ValidationError
            prefix='Message'
            field='message'
            required
            errors={state.errors}
          />
          <button
            className='submit-link'
            type='submit'
            disabled={state.submitting || messageEmpty || !emailValid || !nameValid}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}