import { useState, useEffect } from "react";
import axios from "axios";

function Project() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const jsonUrl =
    "https://raw.githubusercontent.com/joshCode04/ProjectsApi/main/projects.json";

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(jsonUrl);

        if (response.status !== 200) {
          throw new Error(`Failed to fetch. Status: ${response.status}`);
        }

        const parsedProjects = response.data.map((row) => {
          const { id, title, description, fileUpload } = row;

          if (!fileUpload) return null;

          const fileUrl = fileUpload.includes("drive.google.com")
            ? fileUpload.replace(
                /\/file\/d\/([^/]+)\/.*/,
                "https://drive.google.com/uc?id=$1"
              )
            : fileUpload;

          return {
            id,
            title,
            description,
            type: fileUpload.includes(".mp4") ? "video" : "image",
            src: fileUrl,
          };
        });

        setProjects(parsedProjects.filter(Boolean));
      } catch (error) {
        console.error("Error fetching projects:", error.message || error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="relative min-h-screen bg-[#161616] p-4 flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="absolute max-lg:hidden bottom-36 left-14 bg-[#161616] border-2 border-[#AA0152] shadow-lg rounded-3xl w-[300px] p-4 h-[600px]">
        <img
          src="/profile.png"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h2 className="text-xl text-slate-200 text-center font-bold">
          Graphic Designer
        </h2>
        <p className="text-center text-slate-400">User Information</p>
      </div>

      {/* Projects Grid */}
      <div className="flex-1 ml-[0px] lg:ml-[30%] mt-8 md:mt-0">
        <h1 className="text-3xl font-bold mb-6 text-white">Projects</h1>
        <div className="w-full h-[2px] mb-6 bg-[#AA0152]"></div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {project.type === "image" ? (
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-40 object-cover"
                  onError={(e) => {
                    console.error(`Image load error: ${e.target.src}`);
                    e.target.src = "https://via.placeholder.com/150";
                  }}
                />
              ) : (
                <video
                  src={project.src}
                  className="w-full h-40 object-cover"
                  muted
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-[#161616] bg-opacity-90 flex items-center justify-center z-50">
          <div className="bg-[#161616] rounded-lg p-4 w-[80%] sm:w-[50%] max-w-[600px] relative border-2 border-[#AA0152]">
            <button
              className="absolute top-4 right-4 text-2xl font-bold text-[#FFFFFF]"
              onClick={() => setSelectedProject(null)}
            >
              ✖
            </button>
            <div className="mt-8">
              {selectedProject.type === "image" ? (
                <img
                  src={selectedProject.src}
                  alt={selectedProject.title}
                  className="w-[90%] mx-auto rounded-lg"
                />
              ) : (
                <video
                  src={selectedProject.src}
                  controls
                  className="w-[90%] mx-auto rounded-lg"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Project;
