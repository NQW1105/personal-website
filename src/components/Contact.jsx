// TO DO LIST :
// Customer validation (Error & successful message)
// Put info in database once submitted
// Email when submit form

const Contact = () => {
  return (
    <section id="contact-container">
      <h2 id="contact">Contact Me</h2>
      <form className="form-container">
        <div className="name">
          <label htmlFor="visitor-name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="visitor-name"
            className="input"
            placeholder="Your name..."
            required
          />
        </div>
        <div className="email">
          <label htmlFor="visitor-email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="visitor-email"
            className="input"
            placeholder="Your email..."
            required
          />
        </div>
        <div className="subject">
          <label htmlFor="subject" className="form-label">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="input"
            placeholder="Your Subject..."
            required
          />
        </div>
        <div className="msg">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            className="input-area"
            rows={4}
            placeholder="Your message..."
          ></textarea>
        </div>
        <button type="submit" className="form-btn">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
