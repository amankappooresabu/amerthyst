import '../styles/Contact.scss'

const ContactPage = () => {
  return (
    <div className="contact-page-container">
      {/* The main content area */}
      <div className="contact-content">
        
        {/* === LEFT SIDE: Contact Information === */}
        <div className="contact-info-section">
          <div className="contact-heading">
            <p className="contact-title">Contact Us</p>
          </div>
          
          <h1>Get in touch</h1>
          <p className="contact-description">
            Have questions or ready to transform your business with AI automation?
          </p>

          <div className="contact-cards">
            {/* Email Card */}
            <div className="info-card">
              <span className="card-icon">✉️</span>
              <div className="card-details">
                <p className="card-label">Email us</p>
                <p className="card-value">johnny.jorov@gmail.com</p>
              </div>
              <span className="card-arrow">↗</span>
            </div>
            
            {/* Call Card */}
            <div className="info-card">
              <span className="card-icon">📞</span>
              <div className="card-details">
                <p className="card-label">Call us</p>
                <p className="card-value">(901) 123-4567</p>
              </div>
              <span className="card-arrow">↗</span>
            </div>
            
            {/* Location Card */}
            <div className="info-card">
              <span className="card-icon">📍</span>
              <div className="card-details">
                <p className="card-label">Our location</p>
                <p className="card-value">Crosby Street, NY, US</p>
              </div>
              <span className="card-arrow">↗</span>
            </div>
          </div>
        </div>

        {/* === RIGHT SIDE: Contact Form === */}
        <div className="contact-form-section">
          <form className="contact-form">
            <input 
              type="text" 
              placeholder="Name" 
              className="form-input" 
              required 
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="form-input" 
              required 
            />
            <textarea 
              placeholder="Message" 
              className="form-textarea" 
              rows= {10}
              required 
            ></textarea>
            
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;