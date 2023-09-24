import resumeFile from '../assets/files/Avery_Miller_Resume.pdf';

export default function ResumePage() {
  return (
    <section className="page-section" id="resume">
      <a href={resumeFile} target="_blank" download="Avery_Miller_Resume">Download my resume!</a>
    </section>
  );
}