
import { Button } from "@/components/ui/button"
import { TypewriterText } from "@/components/TypewriterText"
import { Download, ArrowDown } from "lucide-react"

export function HeroSection() {
  const roles = [
    "Web Developer",
    "Mobile App Developer",
    "Full Stack Developer"
  ]
  
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }
  
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(120,119,198,0.3),transparent)]" />
      
      <div className="container grid gap-8 lg:grid-cols-2 items-center">
        <div className="space-y-8 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Ghulam Rasool</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
            I'm a <TypewriterText words={roles} />
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
            Building innovative web and mobile solutions with cutting-edge technologies.
            Passionate about creating intuitive and responsive user experiences.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <a href="#projects">View My Work</a>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="animate-fade-in" style={{ animationDelay: "4000ms" }}>
              <a href="/CV-Ghulam Rasool.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
        
        <div className="relative lg:h-[500px] flex items-center justify-center animate-fade-in">
          {/* Placeholder for 3D model/canvas */}
          <div className="relative w-full max-w-md aspect-square rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 opacity-90 blur-2xl -z-10 animate-pulse" style={{ animationDuration: "3s" }} />
            {/* <div className="text-center p-8"> */}
              {/* <p className="text-lg font-medium">3D Animation Placeholder</p>
              <p className="text-sm text-muted-foreground mt-2">Three.js content will render here</p> */}
              <img src="/images/profile.JPG" alt="Profile" className="w-full h-full m-3 object-cover rounded-full" />
            {/* </div> */}
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hover:animate-none"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-10 w-10 text-muted-foreground hover:text-foreground transition-colors" />
      </button>
    </section>
  )
}
