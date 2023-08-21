// TO DO LIST :
// Customer validation (Error & successful message)
// Put info in database once submitted
// Organize label and input code for grid part
//

const Contact = () => {
  return (
    <section id="contact-container">
      <h2 id="contact">Contact Me</h2>
      <form className="form-container">
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

        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          id="message"
          className="input-area"
          rows={4}
          placeholder="Your message..."
        ></textarea>

        <button type="submit" className="form-btn">
          Send Message
        </button>
      </form>
      {/* <form className="form-container">
        <label htmlFor="visitor-name">Name</label>
        <label htmlFor="visitor-email">Email</label>

        <input type="text" id="visitor-name" className="input" required />
        <input type="email" id="visitor-email" className="input" required />

        <label htmlFor="subject" style={{ gridColumnStart: 'span 2' }}>
          Subject
        </label>
        <input
          type="text"
          id="subject"
          className="input"
          required
          style={{ gridColumnStart: 'span 2' }}
        />

        <label htmlFor="message" style={{ gridColumnStart: 'span 2' }}>
          Message
        </label>
        <textarea
          id="message"
          className="input"
          style={{ gridColumnStart: 'span 2' }}
        ></textarea>

        <button type="submit" className="btn">
          Send Message
        </button>
      </form> */}
    </section>
  );
};

export default Contact;
