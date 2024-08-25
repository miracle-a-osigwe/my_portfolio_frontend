// src/component/SkillsPage.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const address = "http://127.0.0.1:8000/api/skills/"

const SkillsPage = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        axios.get(address).then(
            response => {
                setSkills(response.data);
            }
        ).catch(
            error => {
                console.error("There was an error fetching the skills data!", error);
            }
        );
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