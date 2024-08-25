// src/components/ProjectPage.js

import React, { useState, useEffect } from "react";
import axios from "axios";

const address = "http://127.0.0.1:8000/api/projects/"

const ProjectPage = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get(address).then(
            response => {
                setProjects(response.data);
            }
        ).catch(
            error => {
                console.error("There was an error fetching projects!", error);
            }
        );
    }, []);

    return (
        <div>
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

export default ProjectPage;