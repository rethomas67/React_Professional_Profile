import React from "react";

const Contact = () => {
  return (
    <form className="contact_form_container">
      <div className="container">
        <label htmlFor="name" className="contact_label">
          <span className="text-md">Name</span>
          <input
            type="text"
            className="contact_input text-md"
            name="name"
            id="name"
            required
          />
        </label>

        <label htmlFor="email" className="contact_label">
          <span className="text-md">Email</span>
          <input
            type="email"
            className="contact_input text-md"
            name="email"
            id="email"
            required
          />
        </label>

        <label htmlFor="message" className="contact_label">
          <span className="text-md">Message</span>
          <textarea
            className="contact_input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>

        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default Contact;
