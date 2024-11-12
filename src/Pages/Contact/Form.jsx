import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [phone, setphone] = useState('')

  //  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(name, email, message, phone)

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'OAKPHIN',
      message: message,
      to_phone: phone
    };

    setEmail('')
    setName('')
    setMessage('')
    setphone('')
    
    emailjs
      .send('service_oio28ul', 'template_kdthtto', templateParams, 'gcoMVfsZA68-t4wTg'
    )
      .then(
        () => {
          alert('SUCCESS!');
    
        },
        (error) => {
          alert('FAILED...', error.text);
        },
      );
  };




  return (
    <div className='shadow-lg mt-5 p-5 rounded mb-5'>
        <div className="text-center my-3 fw-bold h5">
            Drop Us A Message For Any Query
        </div>
        <form  onSubmit={sendEmail}>
            {/* email */}
            <div className="form-floating mb-3">
            <input
             type="email" name='user_email' className="form-control" id="floatingInput" 
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             placeholder="name@example.com" required/>
            <label htmlFor="floatingInput">Email address</label>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            {/* name */}
            <div className="form-floating my-3">
            <input type="text"
             value={name}
             onChange={(e) => setName(e.target.value)}
             name='user_name' className="form-control" placeholder="Full name here" id="floatingInput" required/>
            <label htmlFor="floatingInput">Full Name</label>
            </div>
            {/* Phone */}
            <div className="form-floating my-3">
            <input type='number'
            value={phone}
            onChange={(e) => setphone(e.target.value)}
            name='user_number' className="form-control" placeholder="telephone here" id="floatingInput" required/>
            <label htmlFor="floatingInput">Tel</label>
            </div>
            {/* comment */}
            <div className="form-floating">
            <textarea className="form-control" name='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
             placeholder="Leave a comment here" id="floatingTextarea" style={{
                height: '200px'
            }}></textarea>
            <label htmlFor="floatingTextarea">Your Message</label>
            </div>
            <button type="submit" className="btn btn-success my-3">Send Message</button>
        </form>
    </div>
  )
}

export default Form