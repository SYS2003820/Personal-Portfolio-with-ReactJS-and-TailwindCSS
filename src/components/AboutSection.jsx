import { Briefcase, Code, PenTool, Award, FileText } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Final-Year CSE Student & Developer
            </h3>

            <p className="text-muted-foreground">
              Hey, I’m Vishesh Vishwakarma, a final-year CSE student with a passion for building things that people love to use. From <strong>React and Node.js</strong> to <strong>3D web experiences</strong>, I enjoy turning ideas into interactive projects.
            </p>

            <p className="text-muted-foreground">
              I’ve completed certifications in <strong>OCI Generative AI, AI Foundations, Google Analytics</strong>, and more. My projects like <strong>3D Portfolio, Java Pac-Man, and Online Exam System</strong> reflect my love for clean, efficient, and engaging applications.
            </p>

            <p className="text-muted-foreground">
              Hackathons like <strong>Sustainovation 2025</strong> taught me how to solve problems fast and collaborate effectively with teams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center sm:justify-start">
              <a href="#contact" className="cosmic-button">
                Let’s Connect
              </a>

              <a
                href="/Vishesh-Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="inline mr-2" /> Download CV
              </a>
            </div>
          </div>

          {/* Right Side Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Full Stack */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full Stack Dev</h4>
                  <p className="text-muted-foreground">
                    Building scalable web apps and clean backend APIs.
                  </p>
                </div>
              </div>
            </div>

            {/* UI/UX */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <PenTool className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing clean, modern interfaces with intuitive flow.
                  </p>
                </div>
              </div>
            </div>

            {/* Achievements / Certifications */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Certifications</h4>
                  <p className="text-muted-foreground">
                    OCI Generative AI, AI Foundations, Google Analytics & more.
                  </p>
                </div>
              </div>
            </div>

            {/* Data / Analytics */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data & Analytics</h4>
                  <p className="text-muted-foreground">
                    Analyzing & visualizing data to make smarter decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
