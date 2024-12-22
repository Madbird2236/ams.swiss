import React, { useState } from 'react';

const TimeSheet: React.FC = () => {
    const [hours, setHours] = useState<number>(0);
    const [category, setCategory] = useState<string>('');
    const [logs, setLogs] = useState<{ date: string; hours: number; category: string }[]>([]);

    const handleLogHours = () => {
        const date = new Date().toLocaleDateString();
        setLogs([...logs, { date, hours, category }]);
        setHours(0);
        setCategory('');
    };

    const calculateProductivity = () => {
        // Logic to calculate productivity based on logged hours
        return logs.reduce((total, log) => total + log.hours, 0);
    };

    return (
        <div>
            <h1>Time Sheet</h1>
            <input
                type="number"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                placeholder="Hours Worked"
            />
            <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Category"
            />
            <button onClick={handleLogHours}>Log Hours</button>
            <h2>Logged Hours</h2>
            <ul>
                {logs.map((log, index) => (
                    <li key={index}>
                        {log.date}: {log.hours} hours in {log.category}
                    </li>
                ))}
            </ul>
            <h2>Total Productivity: {calculateProductivity()} hours</h2>
        </div>
    );
};

export default TimeSheet;