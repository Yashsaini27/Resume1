import React, { useState, useRef } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaProjectDiagram, FaCertificate, FaLanguage, FaDownload, FaEdit, FaPaintBrush, FaFont, FaSave, FaPlus, FaTrophy, FaHeart, FaGlobe } from 'react-icons/fa';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { connect } from 'react-redux';
import fieldCd from '../Redux/constants/typeCodes';
import './Resume6.css';

function App(props) {
  const [profileImg, setProfileImg] = useState('');
  const [editable, setEditable] = useState(false);
  const resumeRef = useRef(null);
  const [sections, setSections] = useState({
    profile: true,
    skills: true,
    workExperience: true,
    education: true,
    certificates:true,
  });

  const handleEditSave = () => {
    setEditable(!editable);
  };

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
    html2canvas(element, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('resume.pdf');
    });
  };

  const changeFont = (font) => {
    document.documentElement.style.setProperty('--font-family', font);
  };

  const changeBgColor = (color) => {
    resumeRef.current.querySelector('.template-12-resume-right').style.backgroundColor = color;
  };

  const addSection = (section) => {
    setSections({ ...sections, [section]: true });
  };

  const { contact, education, experience, skills,certificates } = props;

  
  // Function to retrieve contact data based on key
  const getContactData = (key) => {
    if (contact && contact[key]) {
      return contact[key];
    }
    return "";
  };

  // Function to retrieve education data based on key
  const geteducationData = (key) => {
    if (education && education[key]) {
      return education[key];
    }
    return "";
  };
  const getCertificateData=(key)=>{
    if (certificates && certificates[key]){
      return certificates[key];
  }
  return "";

  };
 
 
  console.log('Skills:', skills);

  return (
    <div className="App">
      <div className="buttons">
        <button onClick={handleEditSave} className="edit-save-btn"><FaSave /> {editable ? 'Save' : 'Edit'}</button>
        <button onClick={downloadPDF} className="download-btn"><FaDownload /> Download</button>

        {editable && (
          <div className="options">
            <div className="option">
              <button className="option-btn"><FaEdit /> Edit Sections</button>
              <div className="dropdown-content">
                <button onClick={() => setSections({ ...sections, profile: !sections.profile })}>Profile</button>
                <button onClick={() => setSections({ ...sections, skills: !sections.skills })}>Skills</button>
                <button onClick={() => setSections({ ...sections, workExperience: !sections.workExperience })}>Work Experience</button>
                <button onClick={() => setSections({ ...sections, education: !sections.education })}>Education</button>
                <button onClick={() => setSections({ ...sections, projects: !sections.projects })}>Projects</button>
                <button onClick={() => setSections({ ...sections, awards: !sections.awards })}>Awards</button>
                <button onClick={() => setSections({ ...sections, achievements: !sections.achievements })}>Achievements</button>
                <button onClick={() => setSections({ ...sections, certificates: !sections.certificates })}>Certificates</button>
                <button onClick={() => setSections({ ...sections, languages: !sections.languages })}>Languages</button>
              </div>
            </div>
            <div className="option">
              <button className="option-btn"><FaPlus /> Add Sections</button>
              <div className="dropdown-content">
                <button onClick={() => addSection('projects')}>Projects</button>
                <button onClick={() => addSection('awards')}>Awards</button>
                <button onClick={() => addSection('achievements')}>Achievements</button>
                <button onClick={() => addSection('certificates')}>Certificates</button>
                <button onClick={() => addSection('languages')}>Languages</button>
              </div>
            </div>
            <div className="option">
              <button className="option-btn"><FaFont /> Fonts</button>
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
              <button className="option-btn"><FaPaintBrush /> Colors</button>
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
        )}
      </div>

      <div className="template-12-resume-container" contentEditable={editable} ref={resumeRef}>
        <div className="template-12-resume-left">
          <header className="template-12-resume-header">
            <h1>{contact[fieldCd.FirstName]} {contact[fieldCd.LastName]}</h1>
            <h2>SAP Consultant</h2>
          </header>
          {sections.profile && contact && (
            <section className="template-12-profile">
              <h3>PROFILE</h3>
              <p>{contact[fieldCd.Objective]}</p>
            </section>
          )}
          {sections.workExperience && experience && (
            <section className="template-12-work-experience">
              <h3>WORK EXPERIENCE</h3>
              {Object.keys(experience).map(key => (
                <div className="template-12-job" key={key}>
                  <div className='template-12-job-head'>
                    <p className="template-12-date-location">{experience[key].startYear} - {experience[key].endYear}</p>
                    <div>
                      <h4>{experience[key].jobTitle}</h4>
                      <p className="template-12-company">{experience[key].organizationName}</p>
                    </div>
                  </div>
                  <ul>
                    {experience[key].details && experience[key].details.split('\n').map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          )}
          {sections.projects && (
            <section className="template-12-projects">
              <h3><FaProjectDiagram /> Projects</h3>
              <div className="divider"></div>
              <div className="project">
                <h4>Project Title</h4>
                <p>Details about the project.</p>
              </div>
            </section>
          )}
          {sections.achievements && (
            <section className="template-12-achievements">
              <h3><FaHeart /> Achievements</h3>
              <ul>
                <li>Achievement Title</li>
              </ul>
            </section>
          )}
        {sections.certificates && certificates && (
            <section className="template-12-certificate">
              <h3>Certificate</h3>
              {Object.keys(certificates).map(key => (
                <div className="template-12-certificate" key={key}>
                  <div className='template-12-certificate-head'>
                    <p className="template-12-date-location">{certificates[key].issueDate} - {certificates[key].expirationDate}</p>
                    <div>
                      <h4>{certificates[key].certificateName}</h4>
                      <p className="template-12-certificate">{certificates[key].organizationName}</p>
                    </div>
                  </div>
                  <ul>
                    {certificates[key].details && certificates[key].details.split('\n').map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          )}

          
          {sections.awards && (
            <section className="template-12-awards">
              <h3><FaTrophy /> Awards</h3>
              <ul>
                <li>Award Title</li>
              </ul>
            </section>
          )}
          {sections.languages && (
            <section className="template-12-languages">
              <h3><FaLanguage /> Languages</h3>
              <ul>
                <li>Language Title</li>
              </ul>
            </section>
          )}
        </div>

        <div className="template-12-resume-right">
          {sections.skills && skills && (
            <section className="template-12-skills">
              <h3>Skills</h3>
              <div className="divider"></div>
              <div className="skills-container">
                <ul>
                  {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </section>
          )}
          {sections.education && education && (
            <section className="template-12-education">
              <h3>EDUCATION</h3>
              <div className="divider"></div>
              <ul>
                <li>
                <p>{geteducationData(fieldCd.Startyear)} - {geteducationData(fieldCd.Endyear)}</p>
              <p>{geteducationData(fieldCd.Degree)} in {geteducationData(fieldCd.Type)}</p>
              <p className="template-12-education">{geteducationData(fieldCd.University)}</p>
                </li>
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return  {
    contact: state.contactReducer || {},
    education: state.educationReducer || {},
    experience: state.experienceReducer || {},
    skills: state.skillsReducer || [],
    certificates: state.certificatesReducer || [],
  } ;
};

export default connect(mapStateToProps)(App);
