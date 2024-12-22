export interface Project {
    id: string;
    name: string;
    client: string;
    startDate: Date;
    endDate: Date;
    status: 'not started' | 'in progress' | 'completed';
    resources: string[];
}

const projects: Project[] = [];

export const createProject = (project: Project): Project => {
    projects.push(project);
    return project;
};

export const updateProjectStatus = (id: string, status: 'not started' | 'in progress' | 'completed'): Project | undefined => {
    const project = projects.find(p => p.id === id);
    if (project) {
        project.status = status;
    }
    return project;
};

export const getProjects = (): Project[] => {
    return projects;
};

export const sendDeadlineNotification = (projectId: string): void => {
    const project = projects.find(p => p.id === projectId);
    if (project) {
        console.log(`Notification: The project "${project.name}" is approaching its deadline on ${project.endDate}.`);
    }
};