import React from 'react';
function ContactForm() {
  
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    setValues(oldValues => ({
      ...oldValues,
      [e.target.name]: e.target.value
    }));
  }
  

  function handleSubmit(event) {
    event.preventDefault();
    console.log('name:', values.name);
    console.log('email:', values.email);
    console.log('message:', values.message);
  }

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name" value={values.name} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" value={values.email} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" value={values.message} onChange={handleChange}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }

  export default ContactForm;

  