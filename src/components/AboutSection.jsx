import { Briefcase, Code, User, PenTool, Award, FileText } from "lucide-react";

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
              Data-Driven Full Stack Developer
            </h3>

            <p className="text-muted-foreground">
              I'm Vishesh — a Computer Science student with a deep passion for building intelligent, user-centric systems.
              I love turning real-world problems into sleek digital experiences using tech like React, Python, and AI.
            </p>

            <p className="text-muted-foreground">
              From full-stack web apps to chatbots and analytics dashboards, I bring ideas to life with clean code,
              smart logic, and a strong eye for detail.
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
                    Crafting scalable MERN apps and clean backend APIs.
                  </p>
                </div>
              </div>
            </div>

            {/* AI & Chatbots */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI & Chatbots</h4>
                  <p className="text-muted-foreground">
                    Creating intelligent assistants with NLP and Python/Flask.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Analytics */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Analytics</h4>
                  <p className="text-muted-foreground">
                    Analyzing & visualizing data to drive smarter decisions.
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
          </div>
        </div>

        {/* Achievements & Certifications */}
        <div className="mt-16 space-y-10">
          <h3 className="text-2xl font-semibold text-center">Licenses & Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg shadow-xs">
              <div className="flex items-start gap-4">
                <Award className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Oracle Gen AI Professional</h4>
                  <p className="text-sm text-muted-foreground">Oracle • Jul 2025</p>
                </div>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-xs">
              <div className="flex items-start gap-4">
                <Award className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Oracle AI Foundations Associate</h4>
                  <p className="text-sm text-muted-foreground">Oracle • Jul 2025</p>
                </div>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-xs">
              <div className="flex items-start gap-4">
                <Award className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Deloitte Data Analytics Job Simulation</h4>
                  <p className="text-sm text-muted-foreground">Deloitte • Jul 2025</p>
                </div>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-xs">
              <div className="flex items-start gap-4">
                <Award className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Web Development</h4>
                  <p className="text-sm text-muted-foreground">Udemy • Jul 2025</p>
                </div>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-xs">
              <div className="flex items-start gap-4">
                <Award className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">JavaScript (Intermediate)</h4>
                  <p className="text-sm text-muted-foreground">HackerRank • Jun 2025</p>
                </div>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-xs">
              <div className="flex items-start gap-4">
                <Award className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">React Certification</h4>
                  <p className="text-sm text-muted-foreground">HackerRank • Jun 2025</p>
                </div>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-xs">
              <div className="flex items-start gap-4">
                <Award className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Google Analytics Certified</h4>
                  <p className="text-sm text-muted-foreground">Google • Apr 2025</p>
                </div>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-xs">
              <div className="flex items-start gap-4">
                <Award className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Cybersecurity Tools and Technologies</h4>
                  <p className="text-sm text-muted-foreground">Microsoft • Apr 2025</p>
                </div>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-xs">
              <div className="flex items-start gap-4">
                <Award className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Python Technology Stack</h4>
                  <p className="text-sm text-muted-foreground">Infosys Springboard • Jul 2025</p>
                </div>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-xs">
              <div className="flex items-start gap-4">
                <Award className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Foundational C# with Microsoft</h4>
                  <p className="text-sm text-muted-foreground">freeCodeCamp • Apr 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
