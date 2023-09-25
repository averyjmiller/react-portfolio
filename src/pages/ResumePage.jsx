import resumeFile from '../assets/files/Avery_Miller_Resume.pdf';

export default function ResumePage() {
  return (
    <section className="page-section" id="resume">
      <header>
        <h1>Resume</h1>
        <div id="line-break"></div>
        <p>Download my resume <a href={resumeFile} target="_blank" download="Avery_Miller_Resume">here</a></p>
      </header>
      <section id="proficiencies">
        <section id="front-end">
          <h2>Front-end Proficiencies</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </section>
        <section id="back-end">
          <h2>back-end Proficiencies</h2>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </section>  
      </section>
    </section>
  );
}