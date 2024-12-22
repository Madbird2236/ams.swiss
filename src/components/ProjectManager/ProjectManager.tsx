import React, { useState, useEffect } from 'react';
import { createProject, getProjects, updateProjectStatus } from '../../services/projectManagerService';

const ProjectManager = () => {
    const [projects, setProjects] = useState([]);
    const [newProject, setNewProject] = useState({ name: '', client: '', timeline: '', resources: [] });

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        const fetchedProjects = await getProjects();
        setProjects(fetchedProjects);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProject({ ...newProject, [name]: value });
    };

    const handleCreateProject = async () => {
        await createProject(newProject);
        fetchProjects();
        setNewProject({ name: '', client: '', timeline: '', resources: [] });
    };

    const handleStatusUpdate = async (projectId, newStatus) => {
        await updateProjectStatus(projectId, newStatus);
        fetchProjects();
    };

    return (
        <div>
            <h1>Project Manager</h1>
            <div>
                <h2>Create New Project</h2>
                <input type="text" name="name" placeholder="Project Name" value={newProject.name} onChange={handleInputChange} />
                <input type="text" name="client" placeholder="Client Details" value={newProject.client} onChange={handleInputChange} />
                <input type="text" name="timeline" placeholder="Timeline" value={newProject.timeline} onChange={handleInputChange} />
                <button onClick={handleCreateProject}>Create Project</button>
            </div>
            <div>
                <h2>Existing Projects</h2>
                <ul>
                    {projects.map(project => (
                        <li key={project.id}>
                            <h3>{project.name}</h3>
                            <p>Client: {project.client}</p>
                            <p>Timeline: {project.timeline}</p>
                            <button onClick={() => handleStatusUpdate(project.id, 'In Progress')}>Mark as In Progress</button>
                            <button onClick={() => handleStatusUpdate(project.id, 'Completed')}>Mark as Completed</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProjectManager;