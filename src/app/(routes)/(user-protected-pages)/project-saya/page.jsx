import React from "react";
import ProjectCard from "./components/ProjectCard";
const ProjectSaya = () => {
  return (
    <section className="flex flex-col gap-4">
      {[1, 2, 3, 4, 5].map(() => (
        <ProjectCard />
      ))}
    </section>
  );
};

export default ProjectSaya;
