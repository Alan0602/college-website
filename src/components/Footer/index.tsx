
const Footer = () => {
  return (
    <>
      <div className="footer-left">
        <img src="college_logo.png" alt="College Logo" />

        <p>College Name</p>

        <div className="social-media">
          <img src="facebook_logo.png" alt="Facebook" className="social-icon" />
          <img src="twitter_logo.png" alt="Twitter" className="social-icon" />
          <img src="google_logo.png" alt="Google" className="social-icon" />
          <img src="instagram_logo.png" alt="Instagram" className="social-icon" />
        </div>
      </div>

      <div className="footer-middle">
        <h3>Contact Us</h3>
        <hr />
        <p><img src="phone_logo.png" alt="Phone" className="icon" /> 123456789</p>
        <p><img src="location_logo.png" alt="Location" className="icon" /> dsgsfgfgsgf</p>
        <p><img src="email_logo.png" alt="Email" className="icon" /> edwin@gmai.com</p>
      </div>

      <div className="footer-right">
        <h3>Newsletter</h3>
        <hr />
        <p>Enter your email address to get the latest University news, special events and student activities delivered right to your inbox.</p>
        <form>
          <input type="email" placeholder="Enter your email address" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </>
  );
};

export default Footer;