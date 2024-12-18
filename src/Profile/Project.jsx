import { useState, useEffect, useRef } from "react";
import projectsData from "../api"; // Adjust the path to where the file is located

function Project() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const fullScreenRef = useRef(null);

  useEffect(() => {
    const processProjects = () => {
      const parsedProjects = projectsData.map((project) => {
        const { id, projectTitle, description, src } = project;

        const fileUrl = src.includes("drive.google.com")
          ? src.replace(
              /.*\/file\/d\/([^/]+)\/.*/,
              "https://drive.google.com/uc?id=$1"
            )
          : src;

        return {
          id,
          title: projectTitle,
          description,
          type: fileUrl.includes(".mp4") ? "video" : "image",
          src: fileUrl,
        };
      });

      setProjects(parsedProjects);
    };

    processProjects();
  }, []);

  const handleFullScreen = () => {
    if (fullScreenRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        fullScreenRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-[#161616] p-4 flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="absolute max-lg:hidden bottom-36 left-14 bg-[#161616] border-2 border-[#AA0152] shadow-lg rounded-3xl w-[300px] min-h-[600px] p-6 flex flex-col items-center justify-center">
        <img
          src="/profile.png"
          alt="Profile"
          className="w-32 h-32 rounded-full mb-4"
        />
        <h2 className="text-xl text-slate-200 font-bold text-center mb-2">
          Graphic Designer
        </h2>
        <p className="text-center text-slate-400 mb-4">User Information</p>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400"
          >
            <ion-icon name="logo-twitter" className="w-9 h-9 "></ion-icon>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400"
          >
            <ion-icon name="logo-linkedin" className="w-9 h-9"></ion-icon>
          </a>
          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400"
          >
            <ion-icon name="logo-behance" className="w-9 h-9"></ion-icon>
          </a>
        </div>

        {/* Skills */}
        <div className="w-full mb-6">
          <h3 className="text-lg text-slate-200 font-bold mb-2 text-center">
            Skills
          </h3>
          <ul className="text-slate-400 space-y-2 pl-8">
            <li className="flex items-start">
              <span className="mr-2">•</span> Adobe Photoshop
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span> Illustrator
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span> Figma
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span> Logo Design
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span> Brand Identity
            </li>
          </ul>
        </div>

        {/* Availability */}
        <div className="w-full mb-6">
          <h3 className="text-lg text-slate-200 font-bold mb-2 text-center">
            Availability
          </h3>
          <p className="text-slate-400 text-center">
            Available for freelance projects starting January 2025.
          </p>
        </div>

        {/* Call-to-Action */}
        <div className="w-full">
          <a
            href="/portfolio.pdf"
            download
            className="block bg-[#AA0152] text-white py-2 px-4 rounded-md text-center"
          >
            Download Portfolio
          </a>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="flex-1 ml-[0px] lg:ml-[30%] mt-8 md:mt-0">
        <h1 className="text-3xl font-bold mb-6 text-white">Projects</h1>
        <div className="w-full h-[2px] mb-6 bg-[#AA0152]"></div>
        <div className="overflow-y-auto max-h-[500px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-2 bg-gray-800 rounded-md">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative bg-[#161616] shadow-md rounded-lg p-4 flex flex-col justify-between border border-transparent hover:border-[#AA0152] transition-all duration-300 animate-pulse"
            >
              {/* Media */}
              {project.type === "image" ? (
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                  onError={(e) => {
                    console.error(`Image load error: ${e.target.src}`);
                    e.target.src = "https://via.placeholder.com/150";
                  }}
                />
              ) : (
                <video
                  src={project.src}
                  className="w-full h-40 object-cover rounded-md mb-4"
                  muted
                />
              )}

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-200 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                {project.description.length > 100
                  ? `${project.description.slice(0, 100)}...`
                  : project.description}
              </p>
              <button
                className="bg-[#AA0152] text-white py-2 px-4 rounded-md"
                onClick={() => setSelectedProject(project)}
              >
                See More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div
            ref={fullScreenRef}
            className="bg-[#161616] rounded-lg p-4 w-[90%] sm:w-[60%] max-w-[600px] h-[80%] relative border-2 border-[#AA0152] overflow-auto"
          >
            <button
              className="absolute top-4 right-4 text-2xl font-bold text-white z-50"
              onClick={() => setSelectedProject(null)}
            >
              ✖
            </button>
            <div className="text-center">
              {selectedProject.type === "image" ? (
                <img
                  src={selectedProject.src}
                  alt={selectedProject.title}
                  className="w-full rounded-md mb-4"
                />
              ) : (
                <video
                  src={selectedProject.src}
                  controls
                  className="w-full rounded-md mb-4"
                />
              )}
              <h3 className="text-2xl text-white font-bold mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {selectedProject.description}
              </p>
              {selectedProject.type === "image" && (
                <button
                  className="bg-[#AA0152] text-white py-2 px-4 rounded-md"
                  onClick={handleFullScreen}
                >
                  Full Screen
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Project;
