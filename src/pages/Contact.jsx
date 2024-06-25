import React, { useState } from "react";
//import { useForm } from "react-hook-form";

//function Form() {

//}

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    mode: "onBlur",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    const validationErrors = validateForm(formData);
    console.log(validationErrors);
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const isValidEmail = (email) => {
    // email validation
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  };

  const validateEmail = (data) => {
    const { name, value } = data.target;
    console.log(value);
    let errors = {};

    if (!value.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(value)) {
      errors.email = "Invalid email format";
    }
    setErrors(errors);
    console.log("e" + errors.email);
    return errors;
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.name) {
      errors.name = "Name is required";
    }
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Invalid email format";
    }
    return errors;
  };
  return (
    <form className="contact_form_container ">
      <div className="container ">
        <label
          htmlFor="name"
          className="contact_label d-flex flex-column justify-content-start w-25"
        >
          <span className="text-md">Name</span>
          <input
            type="text"
            className="contact_input text-md"
            name="name"
            id="name"
            required
          />
        </label>

        <div>
          {errors.email && <span className="error">{errors.email}</span>}

          <label
            htmlFor="email"
            className="contact_label d-flex flex-column justify-content-start mt-1 w-25"
          >
            <span className="text-md">Email</span>
          </label>
          <input
            type="email"
            className="contact_input text-md"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={validateEmail}
          />
        </div>

        <label
          htmlFor="message"
          className="contact_label mt-1 d-flex flex-column justify-content-start w-50"
        >
          <span className="text-md">Message</span>
          <textarea
            className="contact_input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>

        <div>
          <button className="btn btn-primary contact--form--btn mt-2">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Contact;
