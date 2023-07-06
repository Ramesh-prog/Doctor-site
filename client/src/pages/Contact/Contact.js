import React from 'react';
import './contact.css';

import clinicImg from '../../assets/doc/doc_seventeen.jpg';
import doctorImg from '../../assets/doc/doc_nine.jpg';

const Contact = () => {

  return (
    <div className='parent_contact'>
      <div className='text_contact'>
        <h1>CONTACT DETAILS</h1>
        <div className='contact_docImg_div'>
          <img src={clinicImg} />
          <img src={doctorImg} />
        </div>
        <div className='contact_number_div'>
          <p>Dr. Bishnu's Homeopathy Clinic, New bus Stand Road, Brahmapur - 760001.</p>
          <div className='link_div'>
            <tr>
              <td><i className="fas fa-phone-square-alt"></i></td>
              <td>+91 9861032409</td>
            </tr>
            <tr>
              <td><i className="fas fa-phone-square-alt"></i></td>
              <td>+91 9438430338</td>
            </tr>
            <tr>
              <td><i className="fas fa-mail-bulk"></i></td>
              <td>drbishnuprasad@gmail.com</td>
            </tr>
          </div>
        </div>

      </div>
      <div className='map_contact'>
        <h1>OUR LOCATION</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319" width="100%" height="200" ></iframe>
      </div>
    </div>
  )
}

export default Contact