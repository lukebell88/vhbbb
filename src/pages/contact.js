import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../sass/main.scss"



const ContactPage = () => {
  return (
    <main>
      <title>Contact</title>
      <Header />
      <div className="wrapper">
      <div className="contact--container">
      <h1>Contact</h1>
        <form name="contact" method="POST" action="/thanks" netlify id="contact-form">
            <p>
                <label>Name: <input type="text" name="name" /></label>   
            </p>
            <p>
                <label>Email: <input type="email" name="email" /></label>
            </p>
            <p>
                <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
      </div>
    </div>
    <Footer />
    </main>
  )
}

export default ContactPage