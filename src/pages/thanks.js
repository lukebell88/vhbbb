import React from 'react'
import { navigate } from 'gatsby-link'
import Header from "../components/header"
import Footer from "../components/footer"
import "../sass/main.scss"


function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function ThanksPage() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
      <main>
      <title>Contact</title>
      <Header />
      <div className="wrapper">
      <div className="contact--container">
      <h1>Contact</h1>

      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
                <p>Thank you for your email!</p>
            <p>
                <label>Name: <input type="text" name="name" onChange={handleChange} /></label>   
            </p>
            <p>
                <label>Email: <input type="email" name="email" onChange={handleChange} /></label>
            </p>
            <p>
                <label>Message: <textarea name="message" onChange={handleChange}></textarea></label>
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
