// src/components/ExperiencePage.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const address = "http://127.0.0.1:8000/api/experience/"

const ExperiencePage = () => {
    const [experience, setExperience] = useState([]);

    useEffect(() => {
        axios.get(address).then(
            response => {
                setExperience(response.data);
            }
        ).catch(
            error => {
                console.error("There was an error fetching the experience data!", error);
            }
        );
    }, []);

    return (
        <div>
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