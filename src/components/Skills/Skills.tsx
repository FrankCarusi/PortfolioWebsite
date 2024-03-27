import React, {useState, useEffect} from 'react';
import './Skills.css'; 
import {
  CCardBody,
} from '@coreui/react';

const Skills: React.FC = () => {
  const icons = [
    "devicon-python-plain",
    "devicon-csharp-plain",
    "devicon-amazonwebservices-plain-wordmark",
    "devicon-react-original",
    "devicon-azuresqldatabase-plain",
    "devicon-dotnetcore-plain",
  ];

  const [currentIcon, setCurrentIcon] = useState(0);

  useEffect(() => {
    // Change the icon every 3 seconds
    const intervalId = setInterval(() => {
      setCurrentIcon((currentIcon) => (currentIcon + 1) % icons.length);
    }, 3000); // Adjust time as needed

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    
    <CCardBody>
      <h1>
        Resume
      </h1>
      <p>I am currently growing my skills but so far I have built a strong foundation in...</p>
      <div className="custom-card">
      <h2 className="card-title"></h2>
      <div className="skills-experience-section">
        <div className="skills-section">
          <h3 className="section-title">Skills</h3>
          <ul className="list">
            <li><span className='red-text'>Languages:</span> Python, C/C++, C#, HTML/CSS, MATLAB, SQL, NoSQL, Shell/Bash Scripting</li>
            <li><span className='red-text'>Technologies/Frameworks:</span> AWS, Google Cloud Platform, Microsoft Azure, React, CloudFormation, Linux, Unix, GitHub, Docker, FAST API, Pandas, Flask, PyTest, Boto3, ASP.Net Core, Postman, Git, MongoDB, TensorFlow, SQL Server, SQLite, JIRA</li>
          </ul>
          <i className={`${icons[currentIcon]} icon`}></i>


        </div>
        <div className="experience-section">
          <h3 className="section-title">Experience</h3>
          <ul className="list">
            <li><span className='red-text'>Software Developer, Research Assistant and Scrum Leader</span></li>
            <li className='indent'>- Karmy Pain Clinic <span className='grey-text'>(January 2023 - December 2023)</span></li>
            <li><span className='red-text'>Computer Science Club Vice President</span></li>
            <li className='indent'>- Sheridan College <span className='grey-text'> (September 2023 - Current)</span></li>
          </ul>
        </div>
      </div>
    </div>
    </CCardBody>
    
  );
};

export default Skills;
