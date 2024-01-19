import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

/**
 * contact mission section.
 * @returns {JSX.Element}
 */
export default function ContactSectionMission() {
  return (
    // <section className={`contact-section-dark contact-section-mission`}>
    <section className={`contact-section-mission`}>
      <div className={`contact-mission-container contact-mission-padding`}>
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
          Before reaching out, you might find quick answers to your queries in our <a href="/"
                                                                                      className="contactActionLinksAnchor">Frequently
          Asked Questions (FAQs).</a>
          <br></br><br></br>
          Check out our weekly meetings on our <a href="/" className="contactActionLinksAnchor">meetup page.</a>
        </p>
      </div>
      <div className='form-holder mission-container'>
        <form>
          {/* <div className='name-holder'>
            <div className='form-input name-input'>
            <lable for='fname'>First Name</lable>
            <input type='text' id='fname' placeholder='John'></input></div>
            <div className='form-input'>
            <lable for='lname'>Last Name</lable>
            <input type='text' id='lname' placeholder='Smith'></input></div>
            </div>
            <div className='form-input'>
            <lable for='email'>Email</lable>
            <input type='text' id='email' placeholder='example@email.com'></input></div>
            <div className='form-input'>
            <lable for='subject'>Subject</lable>
            <input type='text' id='subject' placeholder='Write your subject..'></input></div>
            <div className='form-input'>
            <lable for='message'>Message</lable>
            <input type='text' id='message' placeholder='Write your message..'></input></div>
          <input className='form-submit' type='submit' value="Send Message"></input> */}

          <div className='name-holder form-input' >
            <TextField
              id="standard-helperText"
              label="First Name"
              // defaultValue="John"
              placeholder='John'
              variant="standard"
              margin='dense'
              sx={{
                width: '45%',
                marginRight: '10%',
                '& .MuiInputLabel-root': {
                  color: 'white'
                },
                '& .MuiInput-input': {
                  color: 'white'
                },
                '& .MuiInput-underline:before': {
                  borderBottom: '2px solid white', // Default underline color
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'white', // Label color when input is focused
                },
                '& .MuiInput-underline.Mui-focused:after': {
                  borderBottom: '2px solid white', // Underline color when input is focused
                },
              }}
              />
              <TextField
              id="standard-helperText"
              label="Last Name"
              // defaultValue="John"
              placeholder='Smith'
              variant="standard"
              margin='dense'
              sx={{
                width: '45%',
                '& .MuiInputLabel-root': {
                  color: 'white'
                },
                '& .MuiInput-input': {
                  color: 'white'
                },
                '& .MuiInput-underline:before': {
                  borderBottom: '2px solid white', // Default underline color
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'white', // Label color when input is focused
                },
                '& .MuiInput-underline.Mui-focused:after': {
                  borderBottom: '2px solid white', // Underline color when input is focused
                },
              }}
              />
            </div>
            <div className='form-input'>
              <TextField
              id="standard-helperText"
              label="Email"
              // defaultValue="John"
              placeholder='Example@email.com'
              variant="standard"
              margin='dense'
              fullWidth
              sx={{
                '& .MuiInputLabel-root': {
                  color: 'white'
                },
                '& .MuiInput-input': {
                  color: 'white'
                },
                '& .MuiInput-underline:before': {
                  borderBottom: '2px solid white', // Default underline color
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'white', // Label color when input is focused
                },
                '& .MuiInput-underline.Mui-focused:after': {
                  borderBottom: '2px solid white', // Underline color when input is focused
                },
              }}
              />
            </div>
            <div className='form-input'>
              <TextField
              id="standard-helperText"
              label="Subject"
              // defaultValue="John"
              placeholder='Write  your subject...'
              variant="standard"
              margin='dense'
              fullWidth
              sx={{
                '& .MuiInputLabel-root': {
                  color: 'white'
                },
                '& .MuiInput-input': {
                  color: 'white'
                },
                '& .MuiInput-underline:before': {
                  borderBottom: '2px solid white', // Default underline color
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'white', // Label color when input is focused
                },
                '& .MuiInput-underline.Mui-focused:after': {
                  borderBottom: '2px solid white', // Underline color when input is focused
                },
              }}
              />
          </div>
            <div className='form-input'>
              <TextField
              id="standard-multiline-static"
              label="Body"
              multiline
              rows={1}
              placeholder="Write your message..."
              variant="standard"
              margin='dense'
              fullWidth
              sx={{
                '& .MuiInputLabel-root': {
                  color: 'white',
                },
                '& .MuiInput-input': {
                  color: 'white',
                },
                '& .MuiInput-underline:before': {
                  borderBottom: '2px solid white', // Default underline color
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'white', // Label color when input is focused
                },
                '& .MuiInput-underline.Mui-focused:after': {
                  borderBottom: '2px solid white', // Underline color when input is focused
                },
              }}
            />
        </div>
        <Button variant="contained" size="large" sx={{
          background: 'white',
          color: 'black',
          marginLeft:'80%'
        }}>
          Send Message
        </Button>

        </form>
      </div>
    </section>
  )
}