import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Online Examination Management System",
    description:
      "Secure web-based platform for conducting online exams with real-time monitoring and JWT-based user authentication.",
    image: "/Projects/project1.png", // Replace with actual image path
    tags: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    demoUrl: "#", // Add hosted link if available
    githubUrl: "https://github.com/SYS2003820/online-exam-system", // Replace if needed
  },
  {
    id: 2,
    title: "Java Pac-Man Game",
    description:
      "A classic Pac-Man arcade game clone featuring smooth gameplay, scoring, and ghost AI movement, built with OOP principles.",
    image: "/Projects/project2.png", // Replace with actual image path
    tags: ["Java", "Swing", "AWT"],
    demoUrl: "#", // Add hosted link if available
    githubUrl: "https://github.com/SYS2003820/Pacman-java-master", // Replace if needed
  },
  {
    id: 3,
    title: "3D Developer Portfolio Website",
    description:
      "A modern animated personal portfolio with 3D effects, motion transitions, and creative showcase of skills and projects.",
    image: "/Projects/project3.png", // Replace with actual image path
    tags: ["React", "Three.js", "TailwindCSS", "Framer Motion", "EmailJS"],
    demoUrl: "#", // Add live deployed link if available
    githubUrl: "https://github.com/SYS2003820/Portfolio-Vishesh", // Replace if needed
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A showcase of my most impactful projects—built with performance,
          user experience, and clean architecture in mind.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/SYS2003820"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
