import Card from './card';
import React from 'react';

export default function FeaturedProjects({ projects }) {
  if (!projects?.length) {
    return (<></>);
  }

  return (
    <section>
      <header className="margin-btm-2x">
        <h5>
          Featured <span className="color-secondary">Projects</span>
        </h5>
        <hr />
      </header>
      {
        projects.map(function(project) {
          return (
            <Card
              description={project.description}
              imageSrc={project.image}
              key={project.title}
              title={project.title}
              type={project.type}
              url={project.url}
            />
          );
        })
      }
    </section>
  );
}
