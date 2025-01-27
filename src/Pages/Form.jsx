import React, { useState } from 'react';

import styled from 'styled-components';

import emailjs from 'emailjs-com';

import Loader from './Loader'; // Assuming Loader is a component that shows a loading spinner


const Form = () => {

  const [formData, setFormData] = useState({

    name: '',

    email: '',

    message: ''

  });


  const [loading, setLoading] = useState(false); // New loading state


  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({

      ...formData,

      [name]: value

    });

  };


  const handleSubmit = (e) => {

    e.preventDefault();

    setLoading(true); // Set loading to true when submitting


    emailjs.send(import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID, import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID, formData, import.meta.env.VITE_REACT_APP_EMAILJS_USER_ID)

      .then((result) => {

        console.log(result.text); // Successful result

        alert("Message Sent Successfully!");

        setFormData({ name: '', email: '', message: '' }); // Clear form after submission

      })

      .catch((error) => {

        console.error(error.text); // Error handling

        alert("There was an error sending the message.");

      })

      .finally(() => {

        setLoading(false); // Reset loading state

      });

  };


  // Render only the loader if loading is true

  if (loading) {

    return (

      <LoaderWrapper>

        <Loader />

      </LoaderWrapper>

    );

  }


  return (

    <StyledWrapper>

      <form className="form" onSubmit={handleSubmit}>

        <p id="heading">Let's Have a Chat</p>

        <div className="field">

          <input

            autoComplete="off"

            placeholder="Your Name"

            name="name"

            value={formData.name}

            onChange={handleChange}

            className="input-field"

            type="text"

            required

          />

        </div>

        <div className="field">

          <input

            placeholder="Your Email"

            name="email"

            value={formData.email}

            onChange={handleChange}

            className="input-field"

            type="email"

            required

          />

        </div>

        <div className="field mb-6">

          <textarea

            placeholder="Your Message"

            name="message"

            value={formData.message}

            onChange={handleChange}

            className="input-field"

            rows="4"

            required

          />

        </div>

        <button className="button3" type="submit">Send</button>

      </form>

    </StyledWrapper>

  );

};


const LoaderWrapper = styled.div`

  display: flex;

  justify-content: center; /* Center horizontally */

  align-items: center; /* Center vertically */

  height: 63vh; /* Full viewport height */

  background-color: rgba(0, 0, 0, 0.5); /* Optional: semi-transparent background */
  
`;const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    // padding-left: 2em;
    // padding-right: 2em;
    padding-bottom: 0.4em;
    background-color: #171717;
    border-radius: 25px;
    transition: .4s ease-in-out;
  }

  .form:hover {
    transform: scale(1.05);
    border: 1px solid black;
  }

  #heading {
    text-align: center;
    margin: 2em;
    color: rgb(255, 255, 255);
    font-size: 1.2em;
  }

  .field {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    border-radius: 25px;
    padding: 0.6em;
    border: none;
    outline: none;
    color: white;
    background-color: #171717;
    box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
  }

  .input-icon {
    height: 1.3em;
    width: 1.3em;
    fill: white;
  }

  .input-field {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    color: #d3d3d3;
  }

  .form .btn {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-top: 2.5em;
  }

  .button3 {
    margin-bottom: 3em;
    padding: 0.5em;
    border-radius: 5px;
    border: none;
    outline: none;
    transition: .4s ease-in-out;
    background-color: #252525;
    color: white;
  }

  .button3:hover {
    background-color: green;
    color: white;
  }
`;

export default Form;