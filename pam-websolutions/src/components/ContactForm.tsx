import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";

interface FormData {
  user_name: string;
  user_email: string;
  subject: string;
  contact_number?: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    user_name: "",
    user_email: "",
    subject: "",
    contact_number: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      user_name: formData.user_name,
      user_email: formData.user_email,
      subject: formData.subject,
      contact_number: formData.contact_number,
      message: formData.message,
    };

    emailjs
      .send(
        "service_cb03fgg",
        "template_hkew12c",
        templateParams, 
        "BQDIVoHiRDuMGG9Y-" 
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmissionMessage("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          setSubmissionMessage("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      {/* Name input */}
      <div className="mb-3">
        <label htmlFor="user_name" className="form-label">
          Full Name:
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Full Name"
          id="user_name"
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
          required
        />
      </div>
      {/* Email input */}
      <div className="mb-3">
        <label htmlFor="user_email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className="form-control"
          placeholder="email"
          id="user_email"
          name="user_email"
          value={formData.user_email}
          onChange={handleChange}
          required
        />
      </div>
      {/* Subject input */}
      <div className="mb-3">
        <label htmlFor="subject" className="form-label">
          Subject:
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="subject"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>
      {/* Contact Number input */}
      <div className="mb-3">
        <label htmlFor="contact_number" className="form-label">
          Contact Number:
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="contact number"
          id="contact_number"
          name="contact_number"
          value={formData.contact_number}
          onChange={handleChange}
          required
        />
      </div>
      {/* Message textarea */}
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message:
        </label>
        <textarea
          className="form-control"
          placeholder="Your message here"
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      {/* Submit button */}
      <input
        type="submit"
        id="button"
        className="btn contact-submit-btn"
        value={isSubmitting ? "Sending..." : "Send Message"}
        disabled={isSubmitting}
      />
      {submissionMessage && <p>{submissionMessage}</p>}
    </form>
  );
};

export default ContactForm;
