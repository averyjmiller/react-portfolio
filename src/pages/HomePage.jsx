import './HomePage.css';

import homePicture from '../assets/images/avery_miller_1.jpeg';

export default function HomePage() {
  return (
    <div className="wrapper">
      <div className="container-fluid">
        <div className="row justify-content-between">
          <div className="col-12 col-md-6 pb-5 d-flex align-items-center">
            <h1 id="home-header">
              <div>Hi,</div>
              <div>I'm <span id="avery-text">Avery</span></div>
              <div>Full Stack Developer</div>
            </h1>
          </div>
          <div className="col-12 col-md-5 text-center">
            <img src={homePicture} id="homePicture" alt="Avery Miller" />
          </div>
        </div>
      </div>
    </div>
  );
}