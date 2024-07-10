import React, { useState, useRef } from 'react';
import { FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './Resume2.css';

const Template12 = () => {
  const [profileImg, setProfileImg] = useState('');
  const [isEditable, setIsEditable] = useState(false);
  const resumeRef = useRef(null);

  const handleProfileImgChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setProfileImg(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const downloadPDF = () => {
    const element = resumeRef.current;
    html2canvas(element).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('resume.pdf');
    });
  };

  const toggleEdit = () => {
    setIsEditable(!isEditable);
  };

  const changeFont = (font) => {
    const elements = resumeRef.current.querySelectorAll('.template-12-resume-container *');
    elements.forEach(el => {
      el.style.fontFamily = font;
    });
  };

  const changeBgColor = (color) => {
    resumeRef.current.querySelector('.template-12-resume-right').style.backgroundColor = color;
  };

  return (
    <div className='template-3-main-wrapper'>
      <div className="buttons">
        <button onClick={toggleEdit} className="edit-save-btn">
          {isEditable ? 'Save' : 'Edit'}
        </button>
        <button onClick={downloadPDF} className="download-btn">Download as PDF</button>
        <div className="options">
          <div className="option">
            <button className="option-btn">Fonts</button>
            <div className="dropdown-content">
              <button onClick={() => changeFont('Arial')}>Arial</button>
              <button onClick={() => changeFont('Verdana')}>Verdana</button>
              <button onClick={() => changeFont('Times New Roman')}>Times New Roman</button>
              <button onClick={() => changeFont('Courier New')}>Courier New</button>
              <button onClick={() => changeFont('Georgia')}>Georgia</button>
              <button onClick={() => changeFont('Comic Sans MS')}>Comic Sans MS</button>
            </div>
          </div>
          <div className="option">
            <button className="option-btn">Colors</button>
            <div className="dropdown-content">
              <button onClick={() => changeBgColor('rgb(25, 25, 112, 1)')}>Midnight Blue</button>
              <button onClick={() => changeBgColor('rgb(54, 69, 79, 1)')}>Charcoal</button>
              <button onClick={() => changeBgColor('rgb(128, 0, 0, 1)')}>Dark Maroon</button>
              <button onClick={() => changeBgColor('rgb(0, 0, 139, 1)')}>Dark Blue</button>
              <button onClick={() => changeBgColor('rgb(0, 0, 0, 1)')}>Black</button>
              <button onClick={() => changeBgColor('rgb(0, 64, 64, 1)')}>Deep Teal</button>
            </div>
          </div>
        </div>
      </div>
      <div className="template-12-resume-container" contentEditable={isEditable} ref={resumeRef}>
        <div className="template-12-resume-left">
          <header className="template-12-resume-header">
            <h1>CARMEN BELLET</h1>
            <h2>SAP Consultant</h2>
          </header>
          <section className="template-12-profile">
            <h3>PROFILE</h3>
            <p>SAP Consultant with 5+ years of experience in developing, managing, and optimizing SAP solutions. Skilled in developing and deploying innovative solutions to drive business growth.</p>
          </section>
          <section className="template-12-work-experience">
            <h3>WORK EXPERIENCE</h3>
            <div className="template-12-job">
              <div className='template-12-job-head'>
                <p className="template-12-date-location">March 2023 - Present</p>
                <div>
                  <h4> Senoir SAP Consultant</h4>
                  <p className="template-12-company">SAP Consulting Group</p>
                </div>
              </div>
              <ul>
                <li>Provided SAP consulting services to multiple clients, helping to identify and address SAP system issues and process improvements.</li>
                <li>Developed custom reports and interfaces between SAP and other systems to assist with data integration.</li>
                <li>Led the design, development and implementation of complex SAP solutions to meet business objectives.</li>
              </ul>
            </div>
            <div className="template-12-job">
              <div className='template-12-job-head'>
                <p className="template-12-date-location">May 2019 - February 2023</p>
                <div>
                  <h4>SAP Consultant</h4>
                  <p className="template-12-company"> Consulting Group</p>
                </div>
              </div>
              <ul>
                <li>Collaborated with stakeholders to understand functional and technical requirements for SAP projects.</li>
                <li>Ensured compliance with SAP standards, best practices, and change management policies.</li>
                <li>Conducted system testing and user acceptance testing of SAP solutions.</li>
              </ul>
            </div>
          </section>
        </div>
        <div className='template-12-rightside-divs'>
          <div className="template-12-resume-right">
            <section className="template-12-contacts">
              <div className="template-12-photo">
                <img
                  src={profileImg || 'https://via.placeholder.com/150'}
                  alt="Profile"
                  onClick={() => document.getElementById('profilePhotoInput').click()}
                />
                <input
                  type="file"
                  id="profilePhotoInput"
                  accept="image/*"
                  onChange={handleProfileImgChange}
                  style={{ display: 'none' }}
                />
              </div>
              <h3>CONTACTS</h3>
              <p><FaPhone /> +012 3456 789</p>
              <p><FaEnvelope /> Car@gmail.com</p>
              <p><FaGlobe /> example.website.com</p>
              <p><FaMapMarkerAlt /> Your street address here</p>
            </section>
            <section className="template-12-education">
              <h3>EDUCATION</h3>
              <p>2017 - 2019</p>
              <p>Master of Science in Business Analytics</p>
              <p className="template-12-institute">University of California, Berkeley</p>
              <p>2014 - 2017</p>
              <p>Bachelor of Science in Business Analytics</p>
              <p className="template-12-institute">University of California, Berkeley</p>
            </section>
            <section className="template-12-skills">
              <h3>SKILLS</h3>
              <ul>
                <li>SAP Configuration </li>
                <li>Business Analysis </li>
                <li>Project Management </li>
                <li>ABAP Programming </li>
                <li>Data Migration </li>
                <li>System Integration </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template12;
