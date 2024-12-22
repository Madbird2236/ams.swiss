import { VacationLeaveRequest, ApprovalStatus } from '../models/vacationLeaveModels';

const vacationLeaveRequests: VacationLeaveRequest[] = [];

export const requestVacationLeave = (request: VacationLeaveRequest): void => {
    vacationLeaveRequests.push(request);
};

export const approveVacationLeave = (requestId: string): void => {
    const request = vacationLeaveRequests.find(req => req.id === requestId);
    if (request) {
        request.status = ApprovalStatus.APPROVED;
    }
};

export const denyVacationLeave = (requestId: string): void => {
    const request = vacationLeaveRequests.find(req => req.id === requestId);
    if (request) {
        request.status = ApprovalStatus.DENIED;
    }
};

export const getVacationLeaveRequests = (): VacationLeaveRequest[] => {
    return vacationLeaveRequests;
};

export const getEmployeeAvailability = (employeeId: string): boolean => {
    const requests = vacationLeaveRequests.filter(req => req.employeeId === employeeId && req.status === ApprovalStatus.APPROVED);
    return requests.length === 0; // Returns true if no approved requests
};