export default function Project({ projects }) {
  return (
    <div id="project-content">
      {projects.map((project) => (
        <div className="project">
          <a href={`${project.src}`} target="_blank">
            <div class="label">
              <h2>{`${project.name}`}</h2>
              <p>{`${project.methods}`}</p>
            </div>
            <img src={`${project.img.src}`} alt={`${project.img.alt}`}/>
          </a>
        </div>
      ))}
    </div>
  );
}