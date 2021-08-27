import React ,{ useState } from 'react';

// export default function Contact() {
//   return (
//     <div>
//       <h1>Contact Page</h1>

//     </div>
//   );
// }


// Here we import a helper function that will check if the email is valid
import {validateEmail } from '../utils/helper';

function Form() {
  const [email, setEmail] = useState('');
  const [message, setmessage] = useState('');
  const [name, setname] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'message') {
      setmessage(inputValue);
    } else {
      setname(inputValue);
    }
  };

  const handleFormSubmit = (e) => {

    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');

      return;
  
    }
    alert(`Your contact information has been submitted`);
    setmessage('');
    setname('');
    setEmail('');
  };

  return (
    <div>
      <form className="form">
        <div class = "container">
          <div class = "row">
            <p>Name:</p>
      <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="name"
          class = "name"
        />
        </div>
        <div class = "row">
        <p>Email:</p>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          class = "email"
        />
        </div>
        <div class = "row">
        <p>Message:</p>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          class = "message"
          rows="4"
          cols="80%"
        />
        </div>
        </div>

        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
