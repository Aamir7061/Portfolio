
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { ProjectInfo } from "./User";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleFilterChange = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredProjects = ProjectInfo.filter((project) =>
    selectedCategory === "All" ? true : project.category === selectedCategory
  );

  return (
    <div className="px-16 mx-10 md-mx:px-5 md-mx:mx-0 my-10 font-mono mt-20 md-mx:px-6" id="Projects">
      <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl text-center mb-10 font-bold text-white">
        <span className="text-primaryColor">02.&nbsp;</span>Projects
      </h1>
      <div className="text-center mb-10">
        <button onClick={() => handleFilterChange("All")} className={`px-4 py-2 m-2 text-white ${selectedCategory === "All" ? "bg-primaryColor" : "bg-gray-600"} rounded`}>
          All
        </button>
        <button onClick={() => handleFilterChange("ML")} className={`px-4 py-2 m-2 text-white ${selectedCategory === "Data Science" ? "bg-primaryColor" : "bg-gray-600"} rounded`}>
        Machine Learning
        </button>
        <button onClick={() => handleFilterChange("CV")} className={`px-4 py-2 m-2 text-white ${selectedCategory === "Computer Vision" ? "bg-primaryColor" : "bg-gray-600"} rounded`}>
          Computer Vision
        </button>
        <button onClick={() => handleFilterChange("LLM")} className={`px-4 py-2 m-2 text-white ${selectedCategory === "Data Science" ? "bg-primaryColor" : "bg-gray-600"} rounded`}>
          LLM
        </button>
        <button onClick={() => handleFilterChange("Analytics")} className={`px-4 py-2 m-2 text-white ${selectedCategory === "Analytics" ? "bg-primaryColor" : "bg-gray-600"} rounded`}>
          Analytics
        </button>
      </div>

      <div className="flex flex-wrap justify-around md-mx:justify-between sm-mx:justify-center gap-4 md-mx:gap-2">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            desc={project.desc}
            image={project.image}
            live={project.live}
            link={project.link}
            github={project.github}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
