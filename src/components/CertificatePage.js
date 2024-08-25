// src/components/CertificatePage
import React, { useState, useEffect } from "react";
import axios from "axios";

const address = "http://127.0.0.1:8000/api/certificates/"

const CertificatePage = () => {
    const [certificates, setCertificates] = useState([]);

    useEffect(() => {
        axios.get(address).then(
            response => {
                setCertificates(response.data);
            }
        ).catch(
            error => {
                console.error("Failed to fetch the certificates data!", error);
            }
        );
    }, []);

    return (
        <div>
            <h2>Certificates</h2>
            <ul>
                {certificates.map(certificate => (
                    <li key={certificate.id}>
                        <strong>{certificate.name}</strong> from {certificate.issuer} (Issued on {certificate.date_issued})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CertificatePage;