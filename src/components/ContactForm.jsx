import React from 'react'

const ContactForm = () => {
  return (
    <div className = "contactForm">
      <h2>Contact me!</h2>
      <form>
        <input placeholder = "your name / company name"type= "text"></input>
        <input placeholder = "your email" type= "email"></input>
        <input placeholder = "what do you propose?"type= "text"></input>
        <input placeholder = "tell me all about it" type ="text"></input>
      </form>
      <style jsx>
          {`
          .contactForm {
            display: flex;
            flex-direction: column
            width: 90vw;
            heigth: 50vh;
          }`}
      </style>
    </div>
  )
}

export default ContactForm