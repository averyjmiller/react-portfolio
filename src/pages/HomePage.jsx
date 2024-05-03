import './HomePage.css';

import homepageProfile from '../assets/images/homepage_profile.jpg';

export default function HomePage() {
  return (
    <div className="wrapper">
      <div className="container-fluid">
        <div className="row justify-content-between">
          <div className="col-12 order-sm-2 col-sm-6 pb-5">
            <h1>
              Hey! I'm Avery, a full stack web developer.
            </h1>
            <p>
              I am a graduate of the Full-Stack Flex Coding Boot Camp program through Ohio State University.
              I am passionate about creating accessible and fluid web apps with an innovative back-end!
              <br/>
              <br/>
              My technical skills include--but are not limited to--methods in the MERN stack. Check out my proficiencies on the resume page.
              <br/>
              <br/>
              If you have any questions or inquiries, please feel free to contact me. I appreciate your time for checking out my portfolio, and I hope to hear from you!
            </p>
          </div>
          <div className="col-12 order-sm-1 col-sm-5 text-center">
            <img src={homepageProfile} id="homepageProfile" alt="Avery Miller" />
          </div>
        </div>
      </div>
    </div>
  );
}