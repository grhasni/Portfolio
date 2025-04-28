import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

// Helper for smooth scrolling to sections
const scrollToId = (id) => {
  const el = document.getElementById(id.replace("#", ""));
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
    };

    // Initial check
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Handle scroll for link clicks
  const handleNavClick = (href) => (e) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      scrollToId(href);
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500"
        >
          Ghulam Rasool.<span className="text-primary"></span>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile ? (
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                    onClick={handleNavClick(link.href)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <ThemeToggle />

            <Button
              asChild
              size="sm"
              className="px-4 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
            >
              <a href="#contact" onClick={handleNavClick("#contact")}>
                Get In Touch
              </a>
            </Button>
          </nav>
        ) : (
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-background/95 backdrop-blur-sm z-40 md:hidden animate-fade-in">
          <nav className="container py-8">
            <ul className="flex flex-col gap-6 relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                className="hover:bg-background/80 absolute -top-2 right-0"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </Button>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xl font-medium"
                    onClick={handleNavClick(link.href)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="mt-4">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                >
                  <a href="#contact" onClick={handleNavClick("#contact")}>
                    Get In Touch
                  </a>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
