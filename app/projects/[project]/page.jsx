import React from 'react';
import { ProjectDetail } from './project-details/project-details';
import { all_projects } from "../../globals.js";

export default async function ProjectDetails({ params }) {

    var project = all_projects.projects.filter(item => item.title.replace(/\s+/g, '-').toLowerCase() == params.project)[0];

    return (
        <div>
            <ProjectDetail
                project_info={project}
            />
        </div>
    )
}