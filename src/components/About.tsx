"use client";

import { useScrollAnimation, animations } from "@/hooks/useScrollAnimation";

export default function About() {
  // Animation hooks
  const headerAnimation = useScrollAnimation({ delay: 100 });
  const imageAnimation = useScrollAnimation({ delay: 200 });
  const contentAnimation = useScrollAnimation({ delay: 300 });

  return (
    <section id="about" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div 
            ref={headerAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`text-center mb-12 ${animations.fadeInDown.transition} ${
              headerAnimation.isVisible ? animations.fadeInDown.animate : animations.fadeInDown.initial
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Profile Image */}
            <div 
              ref={imageAnimation.ref as React.RefObject<HTMLDivElement>}
              className={`relative ${animations.slideInLeft.transition} ${
                imageAnimation.isVisible ? animations.slideInLeft.animate : animations.slideInLeft.initial
              }`}
            >
              <div className="w-full max-w-sm mx-auto lg:max-w-md">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 overflow-hidden">
                  <div className="w-4/5 h-4/5 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center justify-center relative">
                    {/* Professional work environment illustration */}
                    <div className="text-5xl mb-3">💼</div>
                    <div className="text-center">
                      <div className="text-base font-semibold text-primary mb-1">Professional Photo</div>
                      <div className="text-sm text-muted-foreground">Web Developer</div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute top-3 right-3 text-xl">⚡</div>
                    <div className="absolute bottom-3 left-3 text-xl">🚀</div>
                  </div>
                </div>
              </div>
              
              {/* Stats - Moved here for better layout */}
              <div className="grid grid-cols-3 gap-4 mt-6 text-center">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">50+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Projects</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">3+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Years Exp</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">20+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Clients</div>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div 
              ref={contentAnimation.ref as React.RefObject<HTMLDivElement>}
              className={`space-y-6 ${animations.slideInRight.transition} ${
                contentAnimation.isVisible ? animations.slideInRight.animate : animations.slideInRight.initial
              }`}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                Passionate Web Developer & Problem Solver
              </h3>
              
              <p className="text-base text-muted-foreground leading-relaxed">
                I am a dedicated full-stack web developer with over 3 years of experience 
                creating innovative digital solutions. My journey started during university 
                when I discovered the power of coding to solve real-world problems.
              </p>

              {/* Experience & Education - Compact grid */}
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Experience
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-foreground text-sm">Senior Full Stack Developer</h5>
                      <p className="text-xs text-muted-foreground">Tech Solutions Inc. • 2023-Present</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground text-sm">Frontend Developer</h5>
                      <p className="text-xs text-muted-foreground">Digital Agency Pro • 2022-2023</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground text-sm">Junior Developer</h5>
                      <p className="text-xs text-muted-foreground">StartupXYZ • 2021-2022</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Education
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-foreground text-sm">Bachelor&apos;s Computer Science</h5>
                      <p className="text-xs text-muted-foreground">University of Technology • 2018-2022</p>
                      <p className="text-xs text-muted-foreground">Magna Cum Laude • GPA: 3.8/4.0</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground text-sm">Full Stack Bootcamp</h5>
                      <p className="text-xs text-muted-foreground">TechCamp Academy • 2021</p>
                      <p className="text-xs text-muted-foreground">MERN Stack Specialization</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
