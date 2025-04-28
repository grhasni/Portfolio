
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface Skill {
  name: string;
  level: number;
  category: "language" | "framework" | "tool";
}

export function AboutSection() {
  const skills: Skill[] = [
    { name: "JavaScript", level: 70, category: "language" },
    { name: "React.js", level: 60, category: "framework" },
    { name: "Node.js", level: 40, category: "framework" },
    { name: "C++", level: 80, category: "language" },
    { name: "SQL", level: 80, category: "language" },
    { name: "C#", level: 40, category: "language" },
    { name: "Dart", level: 60, category: "language" },
    { name: "Express.js", level: 50, category: "framework" },
    { name: "MongoDB", level: 75, category: "framework" },
    { name: "Flutter", level: 70, category: "framework" },
    { name: "Git & GitHub", level: 85, category: "tool" },
    { name: "React Native", level: 20, category: "framework" },
    { name: "Blazor", level: 65, category: "framework" },
    { name: ".NET", level: 45, category: "framework" },
    { name: "VS Code", level: 90, category: "tool" },
    { name: "Visual Studio", level: 60, category: "tool" },
    { name: "Android Studio", level: 60, category: "tool" },
  ]
  
  // Group skills by category
  const languageSkills = skills.filter(skill => skill.category === "language");
  const frameworkSkills = skills.filter(skill => skill.category === "framework");
  const toolSkills = skills.filter(skill => skill.category === "tool");
  
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm Ghulam Rasool, a passionate Web and Mobile App Developer with expertise in building 
            responsive and interactive applications using modern technologies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h3 className="text-2xl font-bold">Professional Developer</h3>
            <p className="text-muted-foreground">
              With extensive knowledge in web and mobile development, I create elegant solutions
              that prioritize user experience and performance. I'm constantly learning new technologies
              to stay at the cutting edge of development practices.
            </p>
            
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <div className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">Web Development</div>
                <div className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">Mobile Apps</div>
                <div className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">Full Stack</div>
              </div>
            </div>
            
            <Button asChild className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
          
          <div className="relative order-1 md:order-2">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl animate-float">
              {/* Placeholder for profile image */}
              <div className="w-full h-full bg-gradient-to-br from-purple-500/80 to-blue-500/80 flex items-center justify-center">
                <span className="text-white text-2xl font-medium">
                <img src="/images/profile.JPG" alt="Profile" className="w-full h-full object-cover" />
                </span>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-xl bg-purple-500/20 -z-10 animate-float" style={{ animationDelay: "1s" }}>
            <img src="/images/profile.JPG" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-xl bg-blue-500/20 -z-10 animate-float" style={{ animationDelay: "1.5s" }}>
            <img src="/images/profile.JPG" alt="Profile" className="w-full h-full object-cover" />            
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">My Skills</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <div className="bg-card rounded-xl shadow-sm p-6 animate-scale-in">
              <h4 className="text-xl font-semibold mb-4">Programming Languages</h4>
              <div className="space-y-4">
                {languageSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                        style={{ width: `${skill.level}%`, transition: "width 1s ease-in-out" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Frameworks & Libraries */}
            <div className="bg-card rounded-xl shadow-sm p-6 animate-scale-in" style={{ animationDelay: "150ms" }}>
              <h4 className="text-xl font-semibold mb-4">Frameworks & Libraries</h4>
              <div className="space-y-4">
                {frameworkSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                        style={{ width: `${skill.level}%`, transition: "width 1s ease-in-out" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Tools & IDEs */}
            <div className="bg-card rounded-xl shadow-sm p-6 animate-scale-in" style={{ animationDelay: "300ms" }}>
              <h4 className="text-xl font-semibold mb-4">Tools & IDEs</h4>
              <div className="space-y-4">
                {toolSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                        style={{ width: `${skill.level}%`, transition: "width 1s ease-in-out" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
