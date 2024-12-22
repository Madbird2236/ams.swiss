import React, { useState, useEffect } from 'react';
import { fetchVacationRequests, approveVacationRequest, declineVacationRequest } from '../../services/vacationLeaveService';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const VacationLeaveManagement = () => {
    const [vacationRequests, setVacationRequests] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        const loadVacationRequests = async () => {
            const requests = await fetchVacationRequests();
            setVacationRequests(requests);
        };
        loadVacationRequests();
    }, []);

    const handleApprove = async (requestId) => {
        await approveVacationRequest(requestId);
        setVacationRequests(vacationRequests.filter(req => req.id !== requestId));
    };

    const handleDecline = async (requestId) => {
        await declineVacationRequest(requestId);
        setVacationRequests(vacationRequests.filter(req => req.id !== requestId));
    };

    return (
        <div>
            <h1>Vacation and Leave Management</h1>
            <Calendar
                onChange={setSelectedDate}
                value={selectedDate}
            />
            <h2>Vacation Requests</h2>
            <ul>
                {vacationRequests.map(request => (
                    <li key={request.id}>
                        {request.employeeName} - {request.startDate} to {request.endDate}
                        <button onClick={() => handleApprove(request.id)}>Approve</button>
                        <button onClick={() => handleDecline(request.id)}>Decline</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VacationLeaveManagement;