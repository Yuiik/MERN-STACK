import React from 'react'
import Section from '../components/Section'

const Contact = () => {
  return (
    <Section id='contact' title='Contact'>
      <div className='row'>
        <div className='col-md-5 order-last order-lg-first'>
          <div className='subheading mb-3'>I'd love to hear from you</div>
          <form action='https://formspree.io/f/xjvpwleg' method='POST'>
            <div class='form-group'>
              <label for='username'>Full Name</label>
              <input
                type='text'
                class='form-control'
                id='username'
                name='name'
                aria-describedby='emailHelp'
                placeholder='Enter your name'
              />
            </div>
            <div class='form-group'>
              <label for='email'>Email address</label>
              <input
                type='email'
                class='form-control'
                name='email'
                id='email'
                aria-describedby='emailHelp'
                placeholder='Enter email'
              />
            </div>
            <div class='form-group'>
              <label for='userMessage'>Message</label>
              <textarea
                class='form-control'
                id='userMessage'
                name='message'
                rows='3'
                placeholder='Enter message'
              ></textarea>
            </div>

            <button type='submit' class='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>
        <div className='col-md-1'></div>
        <div className='col-md-6 mb-5 mb-lg-0'>
          <div className='subheading mb-3'>Reach out to me directly</div>
          <div className='contact-direct'>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='item'>
                  <span>
                    <i className='fas fa-envelope'></i>
                  </span>
                  <p>Purano Kalimati, Kathmandu, Nepal</p>
                </div>
              </div>

              <div className='col-sm-6'>
                <div className='item'>
                  <span>
                    <i className='fas fa-phone-alt'></i>
                  </span>
                  <p>+977 9810154589</p>
                </div>
              </div>
            </div>
          </div>
          <div className='contact-map'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.359276980507!2d85.2833091732747!3d27.69906977347229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1860ae22d385%3A0x7c2444e8284cef52!2sKalimati%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1603529732187!5m2!1sen!2snp'
              frameborder='0'
              allowfullscreen=''
              aria-hidden='false'
              tabindex='0'
            ></iframe>
          </div>
        </div>
      </div>

      <p className='py-3 m-0 mt-5 text-center text-secondary'>
        Made with ❤ by Aashish
      </p>
    </Section>
  )
}

export default Contact
