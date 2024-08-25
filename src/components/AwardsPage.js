// src/components/AwardPage.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const address = "http://127.0.0.1:8000/api/awards/"

const AwardPage = () => {
    const [awards, setAwards] = useState([]);

    useEffect(() => {
        axios.get(address).then(
            response => {
                setAwards(response.data);
            }
        ).catch(
            error => {
                console.error("Error fetching awards data!", error);
            }
        );
    }, []);

    return (
        <div>
            <h2>Awards</h2>
            <ul>
                {awards.map(award => (
                    <li key={award.id}>
                        <strong>{award.title}</strong> from {award.issuer} (Award on {award.date_awarded})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AwardPage;