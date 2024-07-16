import React, { useState, useRef } from 'react';
import { FaDownload, FaEdit, FaPaintBrush, FaFont, FaSave, FaPlus } from 'react-icons/fa';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './Resume7.css';

const SECTIONS = [
  // Your sections go here...
    { key: 'profile', title: 'Profile', content: (
    <div className="contact-info content">
      <p>1234 American Street</p>
      <p>New York City</p>
      <p>USA</p>
      <p>Phone: 458989887</p>
      <p>Email: nancy@example.com</p>
    </div>
  )},
];

function Temp7() {
  const [editable, setEditable] = useState(false);
  const [profileImage, setProfileImage] = useState('sakshi.jpg'); // Set a default image
  const [sections, setSections] = useState({
    profile: true,
    skills: true,
    certificates: true,
    languages: true,
    workExperience: true,
    education: true,
    projects: false,
    awards: false,
    achievements: false,
  });
  const contentRef = useRef();

  const handleEditSave = () => {
    setEditable(!editable);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setProfileImage(e.target.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const downloadPDF = () => {
    html2canvas(contentRef.current).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('SoftwareEng-resume.pdf');
    });
  };

  const changeFont = (font) => {
    const elements = contentRef.current.getElementsByClassName('content');
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.fontFamily = font;
    }
  };

  const changeBgColor = (color) => {
    contentRef.current.getElementsByClassName('left-section')[0].style.backgroundColor = color;
  };

  const addSection = (section) => {
    setSections({ ...sections, [section]: true });
  };

  return (
    <div className="App">
      <div className="buttons">
        <button onClick={handleEditSave} className="edit-save-btn">
          <FaSave />
          {editable ? 'Save' : 'Edit'}
        </button>
        <button onClick={downloadPDF} className="download-btn">
          <FaDownload /> Download
        </button>

        {editable && (
          <div className="options">
            <div className="option">
              <button className="option-btn">
                <FaEdit /> Edit Sections
              </button>
              <div className="dropdown-content">
                {Object.keys(sections).map((section) => (
                  <button key={section} onClick={() => setSections({ ...sections, [section]: !sections[section] })}>
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="option">
              <button className="option-btn">
                <FaPlus /> Add Sections
              </button>
              <div className="dropdown-content">
                <button onClick={() => addSection('projects')}>Projects</button>
                <button onClick={() => addSection('awards')}>Awards</button>
                <button onClick={() => addSection('achievements')}>Achievements</button>
              </div>
            </div>
            <div className="option">
              <button className="option-btn">
                <FaFont /> Fonts
              </button>
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
              <button className="option-btn">
                <FaPaintBrush /> Colors
              </button>
              <div className="dropdown-content">
                <button onClick={() => changeBgColor('rgb(74, 74, 214)')}>Blue</button>
                <button onClick={() => changeBgColor('rgb(97, 138, 208)')}>Light Blue</button>
                <button onClick={() => changeBgColor('rgb(135, 211, 124)')}>Green</button>
                <button onClick={() => changeBgColor('rgb(237, 120, 118)')}>Red</button>
                <button onClick={() => changeBgColor('rgb(255, 193, 7)')}>Yellow</button>
                <button onClick={() => changeBgColor('rgb(153, 102, 204)')}>Purple</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="resume-container" ref={contentRef} contentEditable={editable}>
        <div className="left-section">
          <div className="profile-pic-container">
            <img
              src={profileImage}
              alt="Profile"
              className="profile-pic"
              onClick={() => document.getElementById('profileImageInput').click()}
            />
            <input
              type="file"
              id="profileImageInput"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleImageUpload}
            />
          </div>
          <h1 className="name content">Nancy Head</h1>
          <p className="designation content">Software Engineer</p>
          {SECTIONS.filter(section => ['profile', 'skills', 'certificates', 'languages', 'awards', 'achievements'].includes(section.key))
            .map(section => sections[section.key] && (
              <div key={section.key}>
                <div className="lsection-heading content">{section.title}</div>
                {section.content}
              </div>
            ))}
        </div>
        <div className="right-section content">
          {SECTIONS.filter(section => ['workExperience', 'education', 'projects'].includes(section.key))
            .map(section => sections[section.key] && (
              <div key={section.key}>
                <div className="rsection-heading content">{section.title}</div>
                {section.content}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Temp7;
