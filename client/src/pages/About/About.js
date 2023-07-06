import React from 'react'
import './About.css';
import doc_one from '../../assets/doc/doc_nine.jpg';
import doc_two from '../../assets/doc/doc_twelve.jpg';
import doc_three from '../../assets/doc/doc_twentyfour.jpg'


const About = () => {
  return (
    <div className='parent_about'>
      <div className='parent_about_div'>

        <div className='parent_text'>
          <h1>About us</h1>
          <p>Dr Bishnu’s Homeopathy clinic can be accessed from Khordha, Ganjam , Malkanagiri ,  India and worldwide though it is based in Brahampur. Using modern online technology, from the convenience of your home, you can visit Dr Bishnu’s Online Homeopathic Clinic. This Homeo Care Clinic is a solution for all your health issues under one roof. This is the best place if you are seeking treatment for any diseases. This Homeo Clinic provides a remedy for all ailment. Without exception, it emphasises on the well-being of the sick person and hence, it is undoubtedly one of the unrivalled Homeopathy Clinic in Brahampur. </p>
        </div>
        <div className='parent_img'>
          <img src={doc_one} alt='doctor img' />
        </div>

      </div>

      <div className='parent_about_div'>

        <div className='parent_img'>
          <img src={doc_two} alt='doctor img' />
        </div>

        <div className='parent_text'>
          <h1>Our Hospital</h1>
          <p>Dr Bishnu’s Homeopathy clinic can be accessed from Khordha, Ganjam , Malkanagiri ,  India and worldwide though it is based in Brahampur. Using modern online technology, from the convenience of your home, you can visit Dr Bishnu’s Online Homeopathic Clinic. This Homeo Care Clinic is a solution for all your health issues under one roof. This is the best place if you are seeking treatment for any diseases. This Homeo Clinic provides a remedy for all ailment. Without exception, it emphasises on the well-being of the sick person and hence, it is undoubtedly one of the unrivalled Homeopathy Clinic in Brahampur.</p>

        </div>
      </div>
      <div className='parent_about_div'>

        <div className='parent_img'>
          <img src={doc_three} alt='doctor img' />
        </div>

        <div className='parent_text'>
          <h1>Our Achievement</h1>
          <p>Worked as a clinical resident of well equipped multi specialized hospital for 1 year in medical extention & research institute, TUMSAR, Maharastra. Well established private practice in my 3 clinic science 10 years. visiting lecture in para medical institute since 5 years. Consultant for School Aids education programme by state aids cell, organized by NYK, Ganjam.Visiting physician for some reputed NGO's in rural health Camps. working as a lecture in department of medicine, biju pattnaik homeopathic medical college, Berhampur since 10/07/10 till continuning. </p>

        </div>
      </div>
    </div>
  );
};

export default About;