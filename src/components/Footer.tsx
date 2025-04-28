
import { Link } from "react-router-dom"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-muted/50 border-t py-12">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center">
          <Link 
            to="/" 
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 mb-4"
          >
            Ghulam Rasool
          </Link>
          
          <p className="text-sm text-muted-foreground mb-6 max-w-md">
            Creating modern and responsive web and mobile applications with a focus on user experience and performance.
          </p>
          
          <div className="flex items-center justify-center gap-6 mb-8">
            <a href="#home" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
          
          <div className="w-full h-px bg-border mb-6"></div>
          
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Ghulam Rasool. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
