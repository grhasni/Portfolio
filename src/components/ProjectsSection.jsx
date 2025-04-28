import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Watch Store(E-Commerce Platform)",
      description:
        "A full-featured e-commerce platform with product listings, cart functionality, user authentication, and payment processing. Not fully functional but working good with Frontend.",
      image: "images/Watch-Store.JPG",
      technologies: ["React", "Bootstrap"],
      demoLink: "https://gr-watch-store.netlify.app/",
      githubLink: "#",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A modern and responsive portfolio website built with React and Tailwind CSS. Features a clean design, dark/light theme switching, smooth scrolling, and mobile-friendly navigation.",
      image: "/images/Portfolio.JPG",
      technologies: ["React", "Tailwind CSS", "shadcn/ui", "Vite"],
      demoLink: "/",
      githubLink: "#",
    },
    // {
    //   id: 3,
    //   title: "Health & Fitness Mobile App",
    //   description: "A cross-platform mobile application for tracking workouts, nutrition, and health metrics with customizable workout plans.",
    //   image: "project3",
    //   technologies: ["Flutter", "Dart", "Firebase", "RESTful APIs"],
    //   demoLink: "#",
    //   githubLink: "#"
    // },
    // {
    //   id: 4,
    //   title: "Real Estate Portal",
    //   description: "A comprehensive real estate website with property listings, advanced search, map integration, and agent dashboards.",
    //   image: "project4",
    //   technologies: ["React", ".NET Core", "SQL Server", "Google Maps API"],
    //   demoLink: "#",
    //   githubLink: "#"
    // }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects showcasing my skills and
            expertise in web and mobile development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in border"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-60 bg-gradient-to-br from-purple-500/80 to-blue-500/80 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <span className="text-white text-xl font-medium project"></span>

                {/* <div className="absolute inset-0 -z-10 opacity-30"> */}
                {/* Placeholder for project image */}

                {/* <div className="w-full h-full flex items-center justify-center bg-black/20">
                    <span className="text-white/50"> */}
                <img src={project.image} alt="Project Image" className="" />
                {/* </span>
                  </div> */}
                {/* </div> */}

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                  <div className="flex gap-2">
                    <Button
                      asChild
                      size="sm"
                      className="bg-white text-black hover:bg-white/90"
                    >
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-white hover:bg-white/90"
                    >
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-1 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Button
            asChild
            className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
          >
            <a
              href="https://github.com/grhasni"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
