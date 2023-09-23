import Project from '../components/Project';

import projects from '../projects';

export default function WorkPage() {
  return (
    <section className="page-section" id="projects">
      <header>
        <h1>Projects</h1>
        <div id="line-break"></div>
        <p>Here are the most recent deployed applications that I've worked on.</p>
      </header>
      <Project projects={projects} />
    </section>
  );
}