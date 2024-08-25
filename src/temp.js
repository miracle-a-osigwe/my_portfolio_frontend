// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import EducationPage from './components/EducationPage';
import SkillsPage from './components/SkillsPage';
import ExperiencePage from './components/ExperiencePage';
import ProjectsPage from './components/ProjectsPage';
import CertificatesPage from './components/CertificatesPage';
import AwardsPage from './components/AwardsPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/education" element={<EducationPage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/certificates" element={<CertificatesPage />} />
                <Route path="/awards" element={<AwardsPage />} />
            </Routes>
        </Router>
    );
}

export default App;




// src/components/SkillsPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SkillsPage = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/skills/')
            .then(response => {
                setSkills(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the skills data!", error);
            });
    }, []);

    return (
        <div>
            <h2>Skills</h2>
            <ul>
                {skills.map(skill => (
                    <li key={skill.id}>{skill.name} ({skill.category})</li>
                ))}
            </ul>
        </div>
    );
}

export default SkillsPage;



// src/components/ExperiencePage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExperiencePage = () => {
    const [experience, setExperience] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/experience/')
            .then(response => {
                setExperience(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the experience data!", error);
            });
    }, []);

    return (
        <div>
            <h2>Experience</h2>
            <ul>
                {experience.map(exp => (
                    <li key={exp.id}>
                        <strong>{exp.role}</strong> at {exp.company} ({exp.start_date} - {exp.end_date})
                        <p>{exp.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ExperiencePage;



// src/components/ProjectsPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/projects/')
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the projects data!", error);
            });
    }, []);

    return (
        <div>
            <h2>Projects</h2>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        <strong>{project.title}</strong>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                        <p>Technologies Used: {project.technologies_used}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProjectsPage;



// src/components/CertificatesPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CertificatesPage = () => {
    const [certificates, setCertificates] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/certificates/')
            .then(response => {
                setCertificates(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the certificates data!", error);
            });
    }, []);

    return (
        <div>
            <h2>Certificates</h2>
            <ul>
                {certificates.map(cert => (
                    <li key={cert.id}>
                        <strong>{cert.name}</strong> from {cert.issuer} (Issued on {cert.date_issued})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CertificatesPage;



// src/components/AwardsPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AwardsPage = () => {
    const [awards, setAwards] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/awards/')
            .then(response => {
                setAwards(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the awards data!", error);
            });
    }, []);

    return (
        <div>
            <h2>Awards</h2>
            <ul>
                {awards.map(award => (
                    <li key={award.id}>
                        <strong>{award.title}</strong> from {award.issuer} (Awarded on {award.date_awarded})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AwardsPage;
