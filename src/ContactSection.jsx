import loguito from "./assets/loguito.png"
const ContactSection = () => {
    return (
      <div className="contact-container" id="contact">
            <div className="contact-form">
            <h1 className="contact-title">Let's talk</h1>
            <p>Name:</p>
            <input className="contact-input" name="name"/>
            <p>Message:</p>
            <textarea name="message" className="contact-input contact-textarea"/>
            <p>Mail:</p>
            <input className="contact-input" name="mail"/>
            <div className="contact-button">
            <button>Send</button>
            </div>
            </div>
            <div className="contact-image">
                <img src={loguito} alt="" />
            </div>
        </div>
    )
}

export default ContactSection