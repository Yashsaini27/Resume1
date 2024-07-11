import React, { useState, useRef } from 'react';
import { FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './Resume2.css';
import { connect } from 'react-redux';
import fieldCd from "../Redux/constants/typeCodes";

const Template12 = (props) => {
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

  const getcontactData = (key) => {
    const contactdata = props.contact;
    if (contactdata && contactdata[key]) {
      return contactdata[key];
    }
    return "";
  };

  const geteducationData = (key) => {
    const educationdata = props.education;
    if (educationdata && educationdata[key]) {
      return educationdata[key];
    }
    return "";
  };

  const experienceData = props.experience || {};
  const experienceKeys = Object.keys(experienceData);
  const maxKey = experienceKeys.length ? Math.max(...experienceKeys.map(Number)) : null;

  const skillsData = props.skills || {};

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
            <h1>{getcontactData(fieldCd.FirstName)} {getcontactData(fieldCd.LastName)}</h1>
            <h2>{experienceData[maxKey] && experienceData[maxKey].jobTitle}</h2>
          </header>
          <section className="template-12-profile">
            <h3>PROFILE</h3>
            <p>{getcontactData(fieldCd.Objective)}</p>
          </section>
          <section className="template-12-work-experience">
            <h3>WORK EXPERIENCE</h3>
            {experienceKeys.map((key) => (
              <div key={key} className="template-12-job">
                <div className='template-12-job-head'>
                  <p className="template-12-date-location">{experienceData[key].startYear} - {experienceData[key].endYear}</p>
                  <div>
                    <h4>{experienceData[key].jobTitle}</h4>
                    <p className="template-12-company">{experienceData[key].organizationName}</p>
                  </div>
                </div>
                <ul>
                  {experienceData[key].jobDescription && experienceData[key].jobDescription.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
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
              <p><FaPhone /> {getcontactData(fieldCd.Mobile)}</p>
              <p><FaEnvelope /> {getcontactData(fieldCd.Email)}</p>
              <p><FaGlobe /> {getcontactData(fieldCd.Website)}</p>
              <p><FaMapMarkerAlt /> {getcontactData(fieldCd.Address)}, {getcontactData(fieldCd.City)} - {getcontactData(fieldCd.State)} ({getcontactData(fieldCd.Postal)})</p>
            </section>
            <section className="template-12-education">
              <h3>EDUCATION</h3>
              <p>{geteducationData(fieldCd.Startyear)} - {geteducationData(fieldCd.Endyear)}</p>
              <p>{geteducationData(fieldCd.Degree)} in {geteducationData(fieldCd.Type)}</p>
              <p className="template-12-institute">{geteducationData(fieldCd.University)}</p>
            </section>
            <section className="template-12-skills">
              <h3>SKILLS</h3>
              <ul>
                {Object.keys(skillsData).map((key) => (
                  <li key={key}>{skillsData[key].skill}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    contact: state.contactReducer,
    education: state.educationReducer,
    experience: state.experienceReducer,
    skills: state.keyskillsReducer,
  };
};

export default connect(mapStateToProps)(Template12);
