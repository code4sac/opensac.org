/**
 * contact mission section.
 * @returns {JSX.Element}
 */
export default function ContactSectionMission() {
  return (
    <section className={`contact-section-dark contact-section-mission`}>
      <div className={`mission-container`}>
        <div
          className={`contact-dark-heading-container contact-heading-underline contact-underline-alt`}
        >
          <h1 className={`contact-heading-section contact-heading-section-alt`}>CONTACT FORM</h1>
          <h2 className={`contact-heading-section-sub`}>
            Get In Touch
          </h2>
        </div>
        <p className={`contact-section-paragraph`}>
          <span className={`contact-section-paragraph-bold`}>
            Have questions or need assistance? 
          </span> Reach out to us using our form, and we'll get back to you as soon as possible.
          <br></br><br></br>
          Before reaching out, you might find quick answers to your queries in our <a href="/" className="contactActionLinksAnchor">Frequently Asked Questions (FAQs).</a>
          <br></br><br></br>
          Check out our weekly meetings on our <a href="/" className="contactActionLinksAnchor">meetup page.</a>
        </p>
      </div>
          <form>
            <div class='name-holder'>
              <div class='name-input'><lable for='fname'>First Name</lable><input type='text' id='fname' placeholder='John'></input></div>
              <div class='name-input'><lable for='lname'>Last Name</lable><input type='text' id='lname' placeholder='Smith'></input></div>
            </div>
            <div class='name-input'><lable for='email'>Email</lable> <input type='text' id='email' placeholder='example@email.com'></input></div>
            <div class='name-input'><lable for='subject'>Subject</lable> <input type='text' id='subject' placeholder='Write your subject..'></input></div>
            <div class='name-input'><lable for='message'>Message</lable><input type='text' id='message' placeholder='Write your message..'></input></div>
            <input type='submit' value="Submit"></input>
          </form>
    </section>
  )
}