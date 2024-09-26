import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FaLinkedin, FaFacebookF, FaInstagram, FaArrowRight, FaArrowCircleRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import FloatingSVG from './1.svg'; 


const Portfolio = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const text = "FrontEnd Web Developer";
  const [index, setIndex] = useState(0);
  const [speed, setSpeed] = useState(200);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && index < text.length) {
        setDisplayText(prevText => prevText + text[index]);
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setDisplayText(prevText => prevText.slice(0, -1));
        setIndex(index - 1);
      } else {
        setIsDeleting(!isDeleting);
        setSpeed(isDeleting ? 200 : 300);
      }
    };

    const interval = setInterval(handleTyping, speed);
    return () => clearInterval(interval);
  }, [index, isDeleting, speed]);

  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <a className='logo' href="#">LOGO</a>
        <nav className="nav-links">
          <a className='link' href="#home">Home</a>
          <a className='link' href="#skills">Skills</a>
          <a className='link' href="#projects">Projects</a>
        </nav>
        <div className="social-icons">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='icon' />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className='icon' />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className='icon' />
          </a>
        </div>
        <a className='btn-cont' href="#contact">
          Let's Connect <FaArrowRight className='arrow-icon' />
        </a>
      </header>

      <section className="svg-animation-section">
        <img src={FloatingSVG} alt="Floating SVG" className="floating-svg" />
      </section>

      <section className="portfolio-links">
        <h1 className='h1'>Welcome All In My Portfolio</h1>
        <h2 className='hi-h2'>
          Hi! I'm Louay Al Aliwi, <span className='span-1'>{displayText}</span>
        </h2>
        <p className='prg-p'>Hello Everyone, I have 1 year of experience in web development.</p>
      </section>

      <section className="portfolio-astronaut">
        Let's Connect<FaArrowCircleRight className='icon-33' />
      </section>
    </div>
  );
};


const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const skills = [
    { name: 'BackEnd Development', percentage: 95 },
    { name: 'Data Science', percentage: 80 },
    { name: 'FrontEnd Development', percentage: 90 },
    { name: 'UI/UX Design', percentage: 75 },
    { name: 'Project Management', percentage: 85 },
    { name: 'Cloud Computing', percentage: 70 }
  ];
  const skillsPerView = 3;

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + skillsPerView) % skills.length);
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex - skillsPerView + skills.length) % skills.length);
  };

  const visibleSkills = skills.slice(currentIndex, currentIndex + skillsPerView);

  return (
    <section className="skills-section" id="skills">
      <h2 className='skill-h2'>Skills</h2>
      <p>You Can See My Skills Here</p>

      <div className="skills-carousel">
        <div className="arrow left" onClick={handlePrev}>
          <FaChevronLeft />
        </div>
        <div className="skills-display">
          {visibleSkills.map((skill, index) => (
            <div key={index} className="skill">
              <div className="circle">
                <div className="percentage">{skill.percentage}%</div>
              </div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
        <div className="arrow right" onClick={handleNext}>
          <FaChevronRight />
        </div>
      </div>
    </section>
  );
};


const MyProject = ({ onShowFooter }) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
    setTimeout(onShowFooter, ); 
  };
  return (
    <section className="my-project-section" id="projects">
      

      <h2 className='my-project-title'>My Project</h2>
      <p className='my-project-description'>My name is Louay, I live in Romania. Arad, this is the 4th project in React Development.</p>

      <div className="project-sections">
        <a><button className='section-button bor-60'>1st Section</button></a>
        <a><button className='section-button bor-40' onClick={scrollToContact}>2nd Section</button></a> {/* Updated Button */}
        <a><button className='section-button bor-50' href="#footer">3rd Section</button></a>
      </div>

      <div className="projects-display">
        <div className="project-card">
          <img src="https://i0.wp.com/blogpascher.com/wp-content/uploads/2020/05/60038-big.jpg?w=1000&ssl=1" alt="Project 1" />
          <p>Travel The World</p>
        </div>
        <div className="project-card">
          <img src="https://fliphtml5.com/learning-center/wp-content/uploads/2020/07/cincopa.png" alt="Project 2" />
          <p>Let's Do It Together</p>
        </div>
        <div className="project-card">
          <img src="https://fliphtml5.com/learning-center/wp-content/uploads/2023/09/Make-Online-Photo-Albums-SmugMug.png" alt="Project 3" />
          <p>Boost Your Startup</p>
        </div>
        <div className="project-card">
          <img src="https://blog.khamsat.com/wp-content/uploads/2016/07/SITE123.png" alt="Project 1" />
          <p>Travel The World</p>
        </div>
        <div className="project-card">
          <img src="https://photos.prnewswire.com/prnfull/20160722/392111" alt="Project 2" />
          <p>Let's Do It Together</p>
        </div>
        <div className="project-card">
          <img src="https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/9dcc39dd-da6f-4c38-b1c3-ee79d33f39d5/2021/12/01/2380f350-c09b-4dc8-8b80-1be618ddb428/d2cac45d-4cbf-4a4d-947f-0f5c13d01c0c.png" alt="Project 2" />
          <p>Let's Do It Together</p>
        </div>
      </div>
    </section>
  );
};



const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <section className="contact-section" id="contact">
      <img src={FloatingSVG} alt="Floating SVG" className="floating-svg" />
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Nr." required />
          </div>
          <div className="message-group">
            <textarea placeholder="Message" rows="4" required></textarea>
          </div>
          <button type="submit" className="submit-btn1">Send</button>
        </form>
      </div>
    </section>
  );
};


const EmailCaptureSection = () => {
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    alert('Email submitted!');
  };

  return (
    <section className="email-capture-section">
      <div className="email-capture-container">
      <h2>See My Projects At Once & Leave Here Your E-mail Address, Yasta</h2>
        <form className="email-capture-form" onSubmit={handleEmailSubmit}>
          <input type="email" placeholder="Enter your email" required className="email-input" />
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </section>
  );
};




const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a className="footer-logo" href="#">LOGO</a>
        <div className="footer-right"> {/* تغيير الاسم إلى footer-right */}
          <div className="footer-social-icons">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="footer-icon" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="footer-icon" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="footer-icon" />
            </a>
          </div>
          <p className="footer-copyright">
            --Copyrights 2016-- All rights reserved by Islam Mohamed Abdelaziz
          </p>
        </div>
      </div>
    </footer>
  );
};






// المكون الرئيسي App
const App = () => {
  return (
    <React.Fragment>
      <Portfolio />
      <Skills />
      <MyProject />
      <Contact />
      <EmailCaptureSection />
      <Footer />
    </React.Fragment>
  );
};


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
