'use client'
import React, { useState } from 'react'
import FilterBar from './FilterBar';
import ProjectCard from './ProjectCard';

const categories = [
  {
    name: 'All Categories',
    title: 'All Categories'
  },
  {
    name: 'interior',
    title: 'Interior'
  },
  {
    name: 'exterior',
    title: 'Exterior'
  },
  {
    name: 'wallpapering',
    title: 'Wallpapering'
  },
  {
    name: 'gibStopping',
    title: 'Gib Stopping'
  },
  {
    name: 'roofRepaint',
    title: 'Roof Repaint'
  }
  ];

  const categoryTitles = categories.map((category) => category.title);

  type Project = {
    largeImage: string;
    smallImage: string;
    mediumImage: string;
    title: string;
    categories: string[];
    slug: string
  };

function Projects({projects}: {projects: Project[]}) {

  const [filteredCategory, setFilteredCategory] = useState('All Categories');

  return (
    <div>
         <FilterBar categories={categoryTitles} onFilterChange={setFilteredCategory}/>
            <div className="flex flex-col space-y-[60px] mt-[60px] lg:flex-row lg:space-y-0 lg:space-x-8">
              { projects
                .filter((project) => {
                  if (filteredCategory === 'All Categories') {
                    return true;
                  }
                  return project.categories.includes(filteredCategory);
                })
                .map((project) => (
                  <ProjectCard
                    key={project.title}
                    largeImage={project.largeImage}
                    smallImage={project.smallImage}
                    mediumImage={project.mediumImage}
                    title={project.title}
                    categories={project.categories}
                    topHeavy={true}
                    slug={project.slug}
                  />
                ))}
            </div>
    </div>
  )
}

export default Projects

{/* <ProjectCard title="Project 1" topHeavy={true}/>
<ProjectCard title='project 2' topHeavy={false}/>
<ProjectCard title='project 3' topHeavy={true}/> */}