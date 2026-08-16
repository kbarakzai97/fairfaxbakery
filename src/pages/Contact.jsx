import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    pickupDateTime: '',
    message: '',
  })
  const [notRobot, setNotRobot] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="contact">
        <p className="contact-success">
          Thanks for reaching out! We'll get back to you as soon as possible.
        </p>
      </section>
    )
  }

  return (
    <section className="contact">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2 className="contact-title">Reserve a Pastry or Large Order</h2>
        <div className="contact-row">
          <div className="contact-field">
            <label htmlFor="name">
              Name <span className="required">*</span>
            </label>
            <p className="contact-hint">Please enter your full name.</p>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="phone">
              Phone Number <span className="required">*</span>
            </label>
            <p className="contact-hint">Please enter your phone number.</p>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+1"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="contact-field">
          <label htmlFor="email">
            Email <span className="required">*</span>
          </label>
          <p className="contact-hint">Please enter a valid email address.</p>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contact-field">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>

        <div className="contact-field">
          <label htmlFor="pickupDateTime">Request pick up date &amp; Time (Optional)</label>
          <input
            type="datetime-local"
            id="pickupDateTime"
            name="pickupDateTime"
            value={formData.pickupDateTime}
            onChange={handleChange}
          />
        </div>

        <div className="contact-field">
          <label htmlFor="message">
            Message / Special Requests <span className="required">*</span>
          </label>
          <p className="contact-hint">Please describe any special requests.</p>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contact-checkbox">
          <input
            type="checkbox"
            id="notRobot"
            checked={notRobot}
            onChange={(event) => setNotRobot(event.target.checked)}
            required
          />
          <label htmlFor="notRobot">
            I am not a Robot <span className="required">*</span>
          </label>
        </div>
        <p className="contact-hint contact-checkbox-hint">Please confirm you are not a robot.</p>

        <button type="submit" className="contact-submit">
          Submit
        </button>
      </form>
    </section>
  )
}

export default Contact
