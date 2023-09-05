// TO DO LIST :
// Customer validation (Error & successful message)

const Contact = () => {
  return (
    <section id="contact-container">
      <h2 id="contact">Contact Me</h2>
      <form className="contact-form" method="post">
        <input type="hidden" name="form-name" value="contact-form" />
        <div className="name">
          <label htmlFor="visitor-name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="visitor-name"
            name="name"
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
            name="email"
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
            name="subject"
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
            name="message"
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
