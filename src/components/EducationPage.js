// src/components/EducationPage.js

import React, {useState, useEffect} from "react";
import axios from "axios";

const address = "http://127.0.0.1:8000/api/education/"
const EducationPage = () => {
    const [education, setEducation] = useState([]);

    useEffect(() => {
        axios.get(address)
        .then(response => {
            setEducation(response.data);
        })
        .catch(error => {
            console.error("Error fetching data from education", error);
        });
    }, []);

    return (
        <div>
            <h2>Education</h2>
            <ul>
                {education.map(edu => (
                    <li key={edu.id}>
                        <strong>{edu.degree}</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EducationPage;