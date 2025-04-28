
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Twitter, Facebook, Instagram } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", message: "" })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000)
    }, 1500)
  }
  
  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com" },
    { name: "Facebook", icon: Facebook, url: "https://facebook.com" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com" }
  ]
  
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-card p-6 rounded-xl shadow-sm border animate-fade-in">
              <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              
              <div className="flex flex-wrap gap-3 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600 to-blue-500 p-8 rounded-xl text-white relative overflow-hidden animate-fade-in" style={{ animationDelay: "150ms" }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              
              <h3 className="text-xl font-bold mb-4 relative z-10">Let's work together!</h3>
              <p className="text-white/80 mb-6 relative z-10">
                I'm currently available for freelance work. If you have a project that you want to get started or need help with something, get in touch.
              </p>
              
              <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 relative z-10">
                <a href="mailto:g.r.hasni.baloch@gmail.com">Send an Email</a>
              </Button>
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-xl shadow-sm border animate-fade-in" style={{ animationDelay: "300ms" }}>
            <h3 className="text-xl font-bold mb-6">Send a Message</h3>
            
            {submitSuccess ? (
              <div className="bg-green-500/10 border border-green-500/30 text-green-700 dark:text-green-400 rounded-lg p-4 mb-6">
                <p className="font-medium">Thank you for your message!</p>
                <p className="text-sm mt-1">I'll get back to you as soon as possible.</p>
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Hello, I'd like to talk about..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
