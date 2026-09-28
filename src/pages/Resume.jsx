import { useProfile } from "../Context/ProfileContext";
import "./Resume.css";

function Resume() {
  const { profile } = useProfile();

  const calculateAge = (dob) => {
    if (!dob) return "";

    const [day, month, year] = dob.split("-").map(Number);

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDifference =
      today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 &&
        today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  const currentAge = calculateAge(profile.dob);

  return (
    <div className="resume">
      <header className="resume-header">
        <h1>{profile.name}</h1>
        <p>Profile Summary</p>
      </header>

      <main>
        <section className="resume-section">
          <h2>Personal Information</h2>

          <p>
            <strong>Name:</strong> {profile.name}
          </p>

          <p>
            <strong>Gender:</strong> {profile.gender}
          </p>

          <p>
            <strong>Date of Birth:</strong> {profile.dob}
          </p>

          <p>
            <strong>Age:</strong> {currentAge} Years
          </p>
        </section>

        <section className="resume-section">
          <h2>About Me</h2>

          <p>
            Welcome to my profile. This page contains my personal
            information and profile details.
          </p>
        </section>

        <section className="resume-section">
          <h2>Skills</h2>

          <ul>
            <li>Java</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </section>

        <section className="resume-section">
          <h2>Education</h2>

          <h3>GRT INSTITUTE OF ENGINEERING AND TECHNOLOGY</h3>

          <p>
            Bachelor's Degree in Computer Science and Engineering
          </p>

          <p>2022 - 2026</p>

          <p>CGPA: 8.2</p>
        </section>

        <section className="resume-section">
          <h2>Project</h2>

          <h3>
            AI-Driven Virtual Ranger for Providing Safety Of Forest Areas
          </h3>

          <p>
            <strong>Technologies:</strong>
            C, Python, IoT Sensors, AI/ML, Voice Recognition,
            Cloud Computing, HTML, CSS, JavaScript
          </p>

          <h4>Responsibilities</h4>

          <ul>
            <li>Backend Development using C</li>
            <li>AI Model Development in Python</li>
            <li>Sensor Data Processing</li>
            <li>Voice Recognition Integration</li>
            <li>Web Dashboard Development</li>
            <li>Cloud Communication Setup</li>
          </ul>
        </section>

        <section className="resume-section">
          <h2>Certifications</h2>

          <ol>
            <li>Advanced Python Programming in VLGE INSTITUTE</li>
            <li>Full Stack Development JAVA in BESANT TECHNOLOGIES</li>
            <li>Cloud study chams certificate from GOOGLE</li>
            <li>AWS for Cloud Foundation</li>
          </ol>
        </section>

        <section className="resume-section">
          <h2>Professional Experience</h2>

          <article>
            <h3>JAVA FULL STACK INTERN - GRADTwIN</h3>

            <p>03/2026 - 05/2026</p>

            <p>
              Worked as Java Full Stack Intern to develop real-time
              responsive web page along data security that stores
              and fetches data securely.
            </p>
          </article>

          <article>
            <h3>MACHINE LEARNING INTERN - AICTE - EDUNET</h3>

            <p>07/2025 - 08/2025</p>

            <p>
              Worked as ML intern to analyse real-time e-vehicle
              prediction, achieving 70% improvement in prediction accuracy.
            </p>
          </article>

          <article>
            <h3>WEB DEVELOPMENT INTERN - Skill upgrade</h3>

            <p>08/2023 - 08/2023</p>

            <p>
              Developed responsive web application using HTML and CSS,
              enhancing user engagement. Utilized GitHub for version
              control and documentation.
            </p>
          </article>
        </section>

        <section className="resume-section">
          <h2>Roles and Responsibilities</h2>

          <ul>
            <li>
              <strong>Backend Development:</strong>
              Design, develop and maintain server-side applications
              using Java.
            </li>

            <li>
              <strong>Frontend Development:</strong>
              Develop interactive and responsive UIs using React.js.
            </li>

            <li>
              <strong>Database Management:</strong>
              Design and manage databases for efficient storage
              and retrieval.
            </li>
          </ul>
        </section>

        <section className="resume-section">
          <h2>Hackathons / Competitions</h2>

          <ol>
            <li>
              SMARTS (SAVEETHA) Engineering College for Paper Presentation
            </li>

            <li>
              Smart India Hackathons and Cyber Security Hackathon
              at GRT Institute of Engineering and Technology
            </li>

            <li>
              National Level Cyber Security Hackathon:
              SOCIAL MEDIA & FAKE CONTENT COUNTERMEASURES
            </li>
          </ol>
        </section>

        <section className="resume-section">
          <h2>Awards / Leadership</h2>

          <ol>
            <li>ETIQUETTE LEAD in GDGOC at campus in 2024</li>
            <li>FULL STACK JAVA LEAD in GDGOC at campus in 2025</li>
          </ol>
        </section>

        <section className="resume-section">
          <h2>Speaking Languages</h2>

          <ul>
            <li>Tamil - Native</li>
            <li>English - Proficient</li>
            <li>Telugu - Proficient</li>
          </ul>
        </section>
      </main>

      <footer className="resume-footer">
        <p>Thank you for visiting my profile.</p>
      </footer>
    </div>
  );
}

export default Resume;