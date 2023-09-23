import profileImage from '../assets/images/profile.jpg';

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      <div className="page-section" id="about">
        <div id="about-content">
          <header>
            <h1>Hello! I'm Avery, a full stack web developer.</h1>
          </header>
          <div id="about-image-sm">
            <img className="profile-image" src={profileImage} alt="Avery Miller"/>
          </div>
          <p>
            I am currently studying through The Ohio State University's coding boot camp. 
            I am passionate about creating accessible and fluid web apps with an innovative back-end!
          </p>
          <p>
            My technical skills include HTML5, CSS3, JavaScript, jQuery, REST APIs, Node, and Express.
          </p>
          <p>
            I am currently learning SQL to develop my skills in databases.
          </p>
          <p>
            If you have any questions or inquiries, please feel free to contact me. I appreciate your time for checking out my portfolio, and I hope to hear from you!
          </p>
        </div>
        <div id="about-image-lg">
          <img className="profile-image" src={profileImage} alt="Avery Miller"/>
        </div>
      </div>
    </div>
  );
}