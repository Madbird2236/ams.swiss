import React, { useState } from 'react';

const EmployeeOnboarding: React.FC = () => {
    const [checklist, setChecklist] = useState<string[]>([]);
    const [documents, setDocuments] = useState<string[]>([]);
    const [trainingModules, setTrainingModules] = useState<string[]>([]);

    const handleChecklistUpdate = (item: string) => {
        setChecklist(prev => [...prev, item]);
    };

    const handleDocumentAccess = (document: string) => {
        setDocuments(prev => [...prev, document]);
    };

    const handleTrainingCompletion = (module: string) => {
        setTrainingModules(prev => [...prev, module]);
    };

    return (
        <div>
            <h1>Employee Onboarding</h1>
            <h2>Onboarding Checklist</h2>
            <ul>
                {checklist.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h2>Important Documents</h2>
            <ul>
                {documents.map((doc, index) => (
                    <li key={index}>{doc}</li>
                ))}
            </ul>
            <h2>Training Modules</h2>
            <ul>
                {trainingModules.map((module, index) => (
                    <li key={index}>{module}</li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeOnboarding;