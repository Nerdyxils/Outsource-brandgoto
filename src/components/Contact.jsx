import { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    estimatedBudget: '',
    projectDescription: '',
    howDidYouHear: '',
    consentPersonalData: false,
    signNDA: false,
    receiveTechDigest: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Validate form
    if (!formData.fullName || !formData.workEmail || !formData.companyName || !formData.projectDescription) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.workEmail)) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      // For now, we'll use mailto as specified, but this can be replaced with actual API call
      const subject = 'New Project Request - BrandGoto Tech Outsourcing';
      const body = `
Name: ${formData.fullName}
Work Email: ${formData.workEmail}
Company: ${formData.companyName}
Estimated Budget: ${formData.estimatedBudget}
Project Description: ${formData.projectDescription}
How did you hear about us: ${formData.howDidYouHear}
Consent to Privacy Terms: ${formData.consentPersonalData ? 'Yes' : 'No'}
Sign NDA: ${formData.signNDA ? 'Yes' : 'No'}
Receive Tech Digest: ${formData.receiveTechDigest ? 'Yes' : 'No'}
      `;
      
      const mailtoLink = `mailto:silas@brandgoto.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Log the form data for now (can be replaced with actual submission)
      console.log('Form submitted:', formData);
      
      // Open email client
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        workEmail: '',
        companyName: '',
        estimatedBudget: '',
        projectDescription: '',
        howDidYouHear: '',
        consentPersonalData: false,
        signNDA: false,
        receiveTechDigest: false
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-content">
          {/* Left Column - Contact Form */}
          <div className="contact-form-container">
            <div className="contact-form-header">
              <h2>Get in touch with us</h2>
              <p>
                <a href="mailto:silas@brandgoto.com" className="book-call-link">Book a call</a> or fill out the form below and we'll get back to you once we've processed your request.
              </p>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">Full name*</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="form-input"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="workEmail" className="form-label">Work email*</label>
                  <input
                    type="email"
                    id="workEmail"
                    name="workEmail"
                    className="form-input"
                    value={formData.workEmail}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="companyName" className="form-label">Company name*</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    className="form-input"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="estimatedBudget" className="form-label">Estimated budget</label>
                  <select
                    id="estimatedBudget"
                    name="estimatedBudget"
                    className="form-select"
                    value={formData.estimatedBudget}
                    onChange={handleInputChange}
                  >
                    <option value="">Select budget range</option>
                    <option value="Under $10k">Under $10k</option>
                    <option value="$10k - $25k">$10k - $25k</option>
                    <option value="$25k - $50k">$25k - $50k</option>
                    <option value="$50k - $100k">$50k - $100k</option>
                    <option value="$100k - $250k">$100k - $250k</option>
                    <option value="Over $250k">Over $250k</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="projectDescription" className="form-label">Tell us about your project / challenge</label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  className="form-textarea"
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                  rows="6"
                  required
                ></textarea>
              </div>
              
              <div className="form-group">
                <label htmlFor="howDidYouHear" className="form-label">How did you hear about us?</label>
                <input
                  type="text"
                  id="howDidYouHear"
                  name="howDidYouHear"
                  className="form-input"
                  value={formData.howDidYouHear}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="consentPersonalData"
                    checked={formData.consentPersonalData}
                    onChange={handleInputChange}
                    required
                  />
                  <span className="checkmark"></span>
                  I consent to the processing of my personal data as outlined in the <a href="#" className="privacy-link">Privacy Terms</a>.
                </label>
              </div>
              
              <div className="form-row checkbox-row">
                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="signNDA"
                      checked={formData.signNDA}
                      onChange={handleInputChange}
                    />
                    <span className="checkmark"></span>
                    I want to protect my data by signing an NDA.
                  </label>
                </div>
                
                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="receiveTechDigest"
                      checked={formData.receiveTechDigest}
                      onChange={handleInputChange}
                    />
                    <span className="checkmark"></span>
                    I want to receive a monthly tech digest.
                  </label>
                </div>
              </div>
              
              <button 
                type="submit" 
                className={`contact-submit-btn ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'SEND REQUEST'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="form-message success">
                  Thank you! Your message has been sent. We'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="form-message error">
                  Please fill in all required fields and ensure your email is valid.
                </div>
              )}
            </form>
          </div>
          
          {/* Right Column - Process Timeline & Contact Info */}
          <div className="contact-info-container">
            <div className="process-timeline">
              <h3>What happens next?</h3>
              
              <div className="timeline">
                <div className="timeline-step">
                  <div className="timeline-node"></div>
                  <div className="timeline-content">
                    <p>An expert contacts you after thoroughly reviewing your requirements.</p>
                  </div>
                </div>
                
                <div className="timeline-step">
                  <div className="timeline-node"></div>
                  <div className="timeline-content">
                    <p>If necessary, we provide you with a Non-Disclosure Agreement (NDA) and initiate the Discovery phase, ensuring maximum confidentiality and alignment on project objectives.</p>
                  </div>
                </div>
                
                <div className="timeline-step">
                  <div className="timeline-node"></div>
                  <div className="timeline-content">
                    <p>We provide a project proposal, including estimates, scope analysis, CVs, and more.</p>
                  </div>
                </div>
              </div>
            </div>
            

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 