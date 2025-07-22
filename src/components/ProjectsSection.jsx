import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Chatbot with NLP",
    description:
      "An intelligent chatbot built using NLP and deep learning, capable of handling 300+ real-time conversations with a 75% query resolution accuracy.",
    image: "/projects/chatbot.png", // Replace with actual image path
    tags: ["Python", "Flask", "NLP", "MongoDB"],
    demoUrl: "#", // Add hosted link if available
    githubUrl: "https://github.com/SYS2003820/ai-chatbot", // Replace if needed
  },
  {
    id: 2,
    title: "Online Examination Management System",
    description:
      "Secure web-based platform for conducting online exams with real-time monitoring and JWT-based user authentication.",
    image: "/projects/exam.png", // Replace with actual image path
    tags: ["MERN Stack", "Docker", "Node.js", "React"],
    demoUrl: "#", // Add hosted link if available
    githubUrl: "https://github.com/SYS2003820/online-exam-system", // Replace if needed
  },
  {
    id: 3,
    title: "Ethereum Voting DApp with Analytics",
    description:
      "Blockchain-powered decentralized voting app with real-time analytics dashboard, built using Solidity, Web3, and Chart.js.",
    image: "/projects/voting.png", // Replace with actual image path
    tags: ["Solidity", "Web3.js", "React", "Chart.js"],
    demoUrl: "#", // Add hosted link if deployed
    githubUrl: "https://github.com/SYS2003820/voting-dapp", // Replace if needed
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
