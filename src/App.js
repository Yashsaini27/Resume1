import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Signup from './components/Singup';
import Login from './components/Login';
import EmailVerify from './components/EmailVerify';
import ForgotPassword from './components/ForgotPassword';
import Templetes from './pages/Home/Templetes';
import Header from './components/Header';
import Myresume from './components/Myresume';
import Preview from './pages/Preview/Preview';
import Keyskills from './components/Keyskills';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import PersonalInformation from './components/PersonalInformation';
import Detailfilling from './pages/Detailfilling/Detailfilling';
import GettingStarted from './components/GettingStarted';
import Features from './components/Feature';


import Career from './components/Pages1/Career';
import Profile from './components/Profile/components/Profile';

function App() {
  const user = localStorage.getItem('token');

  return (
    <>
     
      <Routes>
        {/* {user && <Route path="/" element={<Main />} />} */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        {/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
        {/* <Route path="/" element={<Logout />} /> */}
        <Route path="/Detailfilling" element={<Detailfilling />} />
        <Route path="/Templete" element={<Templetes />} />
        <Route path="/career" element={<Career />} />
        <Route path="/header" element={<Header />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/personal" element={<PersonalInformation />} />
        <Route path="/education" element={<Education />} />
        <Route path="/work" element={<WorkExperience />} />
        <Route path="/" element={<GettingStarted />} />
        <Route path="/myresume" element={<Myresume />} />
        <Route path="/skills" element={<Keyskills />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/feature" element={<Features />} />
        <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
      </Routes>
    </>
  );
}

export default App;
