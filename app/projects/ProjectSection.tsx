'use client'
import React, { useState } from 'react'
import FilterBar from './FilterBar';
import ProjectCard from './ProjectCard';
import {Project} from '@/types/Project'

const categories = [
  {
    name: 'All Categories',
    title: 'all categories'
  },
  {
    name: 'interior',
    title: 'interior'
  },
  {
    name: 'exterior',
    title: 'exterior'
  },
  {
    name: 'wallpapering',
    title: 'wallpapering'
  },
  {
    name: 'gibStopping',
    title: 'gib stopping'
  },
  {
    name: 'roofRepaint',
    title: 'roof repaint'
  }
  ];

  const categoryTitles = categories.map((category) => category.title);



function Projects({projects}: {projects: Project[]}) {

  const [filteredCategory, setFilteredCategory] = useState('all categories');

  // algorithm to filter projects based on category


  return (
    <div>
         <FilterBar categories={categoryTitles} onFilterChange={setFilteredCategory}/>
            <div className="flex flex-col space-y-[40px]  lg:flex-row lg:space-y-0 lg:space-x-8 mt-[40px]">
            
            { 
  projects.filter((project) => {
    if (filteredCategory === 'all categories') {
      return true;
    }
    return project.categories.includes(filteredCategory);
  }).length === 0 ? (
    <p className="italic text-sm -translate-y-[20px] text-red-900">No projects of this type yet</p>
  ) : (
    projects.filter((project) => {
      if (filteredCategory === 'all categories') {
        return true;
      }
      return project.categories.includes(filteredCategory);
    }).map((project, index) => (
      <ProjectCard
        key={project.title}
        largeImage={project.largeImage}
        smallImage={project.smallImage}
        mediumImage={project.mediumImage}
        title={project.title}
        categories={project.categories}
        topHeavy={index % 2 === 0}
        slug={project.slug}
      />
    ))
  )
}

                
            </div>
    </div>
  )
}

export default Projects

{/* <ProjectCard title="Project 1" topHeavy={true}/>
<ProjectCard title='project 2' topHeavy={false}/>
<ProjectCard title='project 3' topHeavy={true}/> */}