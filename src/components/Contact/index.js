import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './index.scss'

const Contact = () => {
  const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_oo96lwa', 'template_mdtojc7', refForm.current, 'TPusuV24gQkg12h6j')
      .then(
        () => {
          alert('Message sent successfully!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            Contact Me
          </h1>
          <p>
            Currently I have not had any previous experiences. I hope you can be my first!
            Fill out the contact form below to contact me via email.
            Alternatively, you can click the links in the bottom left to contact me via
            anything else.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" id="from_name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="line-scale" />
    </>
  )
}

export default Contact
