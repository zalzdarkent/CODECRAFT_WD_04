"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { useScrollAnimation, animations } from "@/hooks/useScrollAnimation";

export default function Skills() {
  // Animation hooks
  const headerAnimation = useScrollAnimation({ delay: 100 });
  const skillsAnimation = useScrollAnimation({ delay: 200 });
  const skills = {
    "Frontend": [
      "React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", 
      "Tailwind CSS", "Bootstrap", "SASS", "Vue.js"
    ],
    "Backend": [
      "Node.js", "Express", "Python", "Django", "PHP", "Laravel", 
      "MySQL", "PostgreSQL", "MongoDB", "REST APIs"
    ],
    "Tools & Others": [
      "Git", "GitHub", "Docker", "AWS", "Vercel", "Figma", 
      "VS Code", "Linux", "Agile", "Testing"
    ]
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div 
            ref={headerAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`text-center mb-16 ${animations.fadeInUp.transition} ${
              headerAnimation.isVisible ? animations.fadeInUp.animate : animations.fadeInUp.initial
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div 
            ref={skillsAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`grid md:grid-cols-3 gap-8 ${animations.scaleIn.transition} ${
              skillsAnimation.isVisible ? animations.scaleIn.animate : animations.scaleIn.initial
            }`}
          >
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50 cursor-pointer">
                <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skillList.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-sm py-1 px-3 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
