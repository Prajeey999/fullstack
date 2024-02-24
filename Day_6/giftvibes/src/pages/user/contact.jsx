import React from 'react'
import '../../assets/css/contact.css'
const Contact = () => {
  return (
    <>
  <meta charSet="UTF-8" />
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:100,200,300,400,500,600,700,800,900"
    rel="stylesheet"
  />
  <div className="contact-us" id="contact-div" style={{height:'100lvh', display:'flex',justifyContent:'center',alignItems:'center'}}>
    <form id="contact" action="" method="post">
      <div className="div-heading">
        <h2>Contact us</h2>
        <br></br>
      </div>
      <div className="inputField">
        <input
          type="name"
          name="name"
          id="name"
          placeholder="Your name"
          autoComplete="on"
          required=""
        />
        <span className="valid_info_name" />
      </div>
      <div className="inputField">
        <input
          type="Email"
          name="email"
          id="email"
          placeholder="Your email"
          required=""
        />
        <span className="valid_info_email" />
      </div>
      <div className="inputField">
        <textarea
          name="message"
          id="message"
          placeholder="Your message"
          defaultValue={""}
        />
        <span className="valid_info_message" />
      </div>
      <div className="inputField btn">
        <button
          type="submit"
          id="form-submit"
          className="main-gradient-button"
          disabled=""
        >
          Send a message
        </button>
      </div>
    </form>
  </div>
</>

  )
}

export default Contact
