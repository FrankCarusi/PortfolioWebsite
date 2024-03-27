import React from 'react';
import './Profile.css';
import {
  CCardBody,
} from '@coreui/react';

const Profile: React.FC = () => {
  return (

    <CCardBody>
      <div className="card-profile-section">
        <img src="src/assets/836.jpg" alt="Profile" className="profile-image"/>
        <div className="card-profile-text">
          <h3>Welcome! My name is Frank Carusi</h3>
        </div>
      </div>
      <div className="card-main-content">
        <h4>First and foremost, I am a third-year student at Sheridan College pursuing an Honours Bachelor Degree in 
          Computer Science with a specialization in Cloud Computing. Apart from my studies I am a huge <span className='red-text'>basketball</span> fan, I love to <s><span className='red-text crossed'>cook</span></s> <span className='red-text'>eat</span>, 
          and spend as much of my free time <span className='red-text'>cycling</span> as possible.</h4>
        <h4>Enjoy exploring my website! If you scroll you will find my complete <span className='red-text'>profile</span> including skills and experience, as well as some of the <span className='red-text'>projects</span> I have created so far.</h4>
        <h4>Feel free to tell me what you think. You can contact me on <a href='#'>LinkedIN</a> or by <a href='frankcarusi.fc@gmail.com'>Email</a></h4>
      </div>
    </CCardBody>
    
  );
};

export default Profile;
