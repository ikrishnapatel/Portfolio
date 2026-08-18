import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';


import profileData from '../../../data/profile.json';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    if (profileData.contact?.emailjsPublicKey) {
      emailjs.init(profileData.contact.emailjsPublicKey);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'message') {
      setCharCount(value.length);
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.match(/^[a-zA-Z\s]{2,50}$/)) {
      newErrors.name = 'Please enter a valid name (2-50 characters, letters only)';
    }

    if (!formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.match(/^\+?[1-9][0-9]{7,14}$/)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        to_name: profileData.contact?.toName || profileData.name,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        reply: formData.email
      };

      await emailjs.send(
        profileData.contact?.emailjsServiceId,
        profileData.contact?.emailjsTemplateId,
        templateParams
      );

      // Show success message
      alert('Message sent successfully!');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setCharCount(0);

    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact-section-wrapper">
      <div className="section-content">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="contact-container">
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                maxLength={50}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                maxLength={15}
                className={errors.phone ? 'error' : ''}
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                minLength={10}
                maxLength={500}
                className={errors.message ? 'error' : ''}
              />
              {errors.message && <span className="error-message">{errors.message}</span>}
              <div className={`char-count ${charCount >= 450 ? 'warning' : ''}`}>
                {charCount}/500
              </div>
            </div>

            <div className="form-group">
              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <i className="fas fa-paper-plane"></i>
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
