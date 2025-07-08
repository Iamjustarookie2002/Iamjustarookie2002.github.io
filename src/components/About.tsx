import React from 'react';
import { GraduationCap, Briefcase, Code, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 about-section-bg">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-6">About Me</h2>
          <div className="w-24 h-1 bg-[var(--primary)] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Left Card - Education */}
            <div className="card-blur rounded-2xl p-8 border global-hover-card-border transition-all">
            <div className="flex items-center mb-6">
              <GraduationCap className="h-8 w-8 text-[var(--primary)] mr-3" />
              <h3 className="text-2xl font-bold text-[var(--text-main)]">Education</h3>
            </div>
            
            <div className="space-y-4">
              {/* MS in Computer Science */}
              <div id="ms-computer-science" className="bg-[var(--bg-card)]/30 rounded-xl p-6 border border-[var(--border-main)]/50">
                <div className="flex items-center mb-3">
                  <GraduationCap className="h-5 w-5 text-[var(--primary)] mr-2" />
                  <h4 className="text-lg font-semibold text-[var(--text-main)]">MS in Computer Science</h4>
                </div>
                <div className="text-[var(--text-secondary)] text-sm mb-2">Purdue University - Boiler Up!</div>
                <div className="text-xs text-[var(--text-secondary)]/60 mb-2">West Lafayette, Indiana, USA • Aug 2024 - May 2026 (est)</div>
                <ul className="list-disc pl-5 text-[var(--text-secondary)] text-xs space-y-1">
                  <li>CGPA: 4.0/4.0 (Perfect score, no pressure!)</li>
                  <li>Graduate student in Computer Science</li>
                  <li>Living the American dream (and surviving Midwest winters)</li>
                  <li>Still figuring out how to pronounce 'Lafayette'</li>
                </ul>
              </div>

              {/* B.Tech in Computer Science */}
              <div id="btech-computer-science" className="bg-[var(--bg-card)]/30 rounded-xl p-6 border border-[var(--border-main)]/50">
                <div className="flex items-center mb-3">
                  <Award className="h-5 w-5 text-[var(--primary)] mr-2" />
                  <h4 className="text-lg font-semibold text-[var(--text-main)]">B.Tech in Computer Science</h4>
                </div>
                <div className="text-[var(--text-secondary)] text-sm mb-2">IIT Roorkee - Where legends are made</div>
                <div className="text-xs text-[var(--text-secondary)]/60 mb-2">Roorkee, Uttarakhand, India • Nov 2020 - Jul 2024</div>
                <ul className="list-disc pl-5 text-[var(--text-secondary)] text-xs space-y-1">
                  <li>GPA: 9.377/10 (Almost perfect, but who's counting?)</li>
                  <li>Undergraduate Teaching Assistant for Optimization Techniques</li>
                  <li>Mentored 20 students (and survived their questions)</li>
                  <li>Part of Geek Gazette and NSO clubs</li>
                </ul>
              </div>

              {/* High School Graduate */}
              <div id="high-school-graduate" className="bg-[var(--bg-card)]/30 rounded-xl p-6 border border-[var(--border-main)]/50">
                <div className="flex items-center mb-3">
                  <GraduationCap className="h-5 w-5 text-[var(--primary)] mr-2" />
                  <h4 className="text-lg font-semibold text-[var(--text-main)]">High School Graduate</h4>
                </div>
                <div className="text-[var(--text-secondary)] text-sm mb-2">Where the caffeine addiction began</div>
                <div className="text-xs text-[var(--text-secondary)]/60 mb-2">India • 2018 - 2020</div>
                <ul className="list-disc pl-5 text-[var(--text-secondary)] text-xs space-y-1">
                  <li>Science stream with Computer Science</li>
                  <li>Learned that sleep is optional</li>
                  <li>Started the journey of 'it works on my machine'</li>
                  <li>Became a professional procrastinator</li>
                </ul>
              </div>

              {/* School Days */}
              <div id="school-days" className="bg-[var(--bg-card)]/30 rounded-xl p-6 border border-[var(--border-main)]/50">
                <div className="flex items-center mb-3">
                  <GraduationCap className="h-5 w-5 text-[var(--primary)] mr-2" />
                  <h4 className="text-lg font-semibold text-[var(--text-main)]">School Days</h4>
                </div>
                <div className="text-[var(--text-secondary)] text-sm mb-2">The foundation of my nerdiness</div>
                <div className="text-xs text-[var(--text-secondary)]/60 mb-2">India • 2006 - 2018</div>
                <ul className="list-disc pl-5 text-[var(--text-secondary)] text-xs space-y-1">
                  <li>Learned to read, write, and debug life</li>
                  <li>Discovered that math is actually useful</li>
                  <li>Started collecting certificates like Pokemon</li>
                  <li>Became the family's tech support (still am)</li>
                </ul>
              </div>
            </div>
          </div>

            {/* Certifications Card */}
            <div className="card-blur rounded-2xl p-8 border global-hover-card-border transition-all">
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-[var(--primary)] mr-3" />
                <h3 className="text-2xl font-bold text-[var(--text-main)]">Certifications</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-[var(--bg-card)]/30 rounded-xl p-6 border border-[var(--border-main)]/50">
                  <div className="flex items-center mb-3">
                    <Award className="h-5 w-5 text-[var(--primary)] mr-2" />
                    <h4 className="text-lg font-semibold text-[var(--text-main)]">AWS Certified Cloud Practitioner</h4>
                  </div>
                  <div className="text-[var(--text-secondary)] text-sm mb-2">Amazon Web Services</div>
                  <div className="text-xs text-[var(--text-secondary)]/60 mb-2">Issued: 2024</div>
                  <p className="text-[var(--text-secondary)] text-xs">Foundation level certification demonstrating knowledge of AWS Cloud concepts, services, security, architecture, pricing, and support.</p>
                </div>

                <div className="bg-[var(--bg-card)]/30 rounded-xl p-6 border border-[var(--border-main)]/50">
                  <div className="flex items-center mb-3">
                    <Award className="h-5 w-5 text-[var(--primary)] mr-2" />
                    <h4 className="text-lg font-semibold text-[var(--text-main)]">Google Cloud Platform Fundamentals</h4>
                  </div>
                  <div className="text-[var(--text-secondary)] text-sm mb-2">Google Cloud</div>
                  <div className="text-xs text-[var(--text-secondary)]/60 mb-2">Issued: 2023</div>
                  <p className="text-[var(--text-secondary)] text-xs">Core infrastructure and services of Google Cloud Platform including compute, storage, networking, and security.</p>
                </div>

                <div className="bg-[var(--bg-card)]/30 rounded-xl p-6 border border-[var(--border-main)]/50">
                  <div className="flex items-center mb-3">
                    <Award className="h-5 w-5 text-[var(--primary)] mr-2" />
                    <h4 className="text-lg font-semibold text-[var(--text-main)]">Microsoft Azure Fundamentals</h4>
                  </div>
                  <div className="text-[var(--text-secondary)] text-sm mb-2">Microsoft</div>
                  <div className="text-xs text-[var(--text-secondary)]/60 mb-2">Issued: 2023</div>
                  <p className="text-[var(--text-secondary)] text-xs">Cloud concepts, Azure services, security, privacy, compliance, and trust in Azure.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Top Right Card - What I'm Interested In */}
            <div className="card-blur rounded-2xl p-8 border global-hover-card-border transition-all">
              <div className="flex items-center mb-6">
                <Code className="h-8 w-8 text-[var(--primary)] mr-3" />
                <h3 className="text-2xl font-bold text-[var(--text-main)]">What I'm Interested In</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[var(--primary)] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-main)]">AI/ML Development</h4>
                    <p className="text-[var(--text-secondary)] text-sm">Building intelligent applications with RAG, LLMs, and computer vision using Python and modern AI frameworks</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[var(--primary)] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-main)]">Backend Development</h4>
                    <p className="text-[var(--text-secondary)] text-sm">Creating robust APIs and services with Golang, Node.js, and cloud technologies like Docker and Kubernetes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[var(--primary)] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-main)]">Teaching & Mentoring</h4>
                    <p className="text-[var(--text-secondary)] text-sm">Sharing knowledge as Teaching Assistant and mentoring students in their academic and technical journey</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[var(--primary)] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-main)]">Full-Stack Development</h4>
                    <p className="text-[var(--text-secondary)] text-sm">Building complete web applications with React, TypeScript, and modern frontend technologies</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Right Card - Experience */}
            <div className="card-blur rounded-2xl p-8 border global-hover-card-border transition-all">
              <div className="flex items-center mb-6">
                <Briefcase className="h-8 w-8 text-[var(--primary)] mr-3" />
                <h3 className="text-2xl font-bold text-[var(--text-main)]">Experience</h3>
              </div>
              
              <div className="space-y-4">
                {/* Software Developer Intern */}
                <div id="software-developer-intern" className="bg-[var(--bg-card)]/30 rounded-xl p-6 border border-[var(--border-main)]/50">
                  <div className="flex items-center mb-3">
                    <Code className="h-5 w-5 text-[var(--primary)] mr-2" />
                    <h4 className="text-lg font-semibold text-[var(--text-main)]">Software Developer Intern</h4>
                  </div>
                  <div className="text-[var(--text-secondary)] text-sm mb-2">NimbleEdge - Backend Wizard</div>
                  <div className="text-xs text-[var(--text-secondary)]/60 mb-2">Bangalore, India • May 2023 - July 2023</div>
                  <p className="text-[var(--text-secondary)] text-xs mb-3">Worked on backend development using Gin framework (Golang) and crafted CLI tools. Reduced latency by 12% by decoupling Azure and AWS services. Also learned that production code is like cooking - everyone has an opinion!</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 rounded bg-[var(--bg-card)]/40 text-[var(--primary)] text-xs border border-[var(--primary)]">Golang</span>
                    <span className="px-2 py-1 rounded bg-[var(--bg-card)]/40 text-[var(--primary)] text-xs border border-[var(--primary)]">Gin Framework</span>
                    <span className="px-2 py-1 rounded bg-[var(--bg-card)]/40 text-[var(--primary)] text-xs border border-[var(--primary)]">Cobra</span>
                    <span className="px-2 py-1 rounded bg-[var(--bg-card)]/40 text-[var(--primary)] text-xs border border-[var(--primary)]">Docker</span>
                    <span className="px-2 py-1 rounded bg-[var(--bg-card)]/40 text-[var(--primary)] text-xs border border-[var(--primary)]">Kubernetes</span>
                    <span className="px-2 py-1 rounded bg-[var(--bg-card)]/40 text-[var(--primary)] text-xs border border-[var(--primary)]">GRPC</span>
                  </div>
                </div>

                {/* Teaching Assistant */}
                <div className="bg-[var(--bg-card)]/30 rounded-xl p-6 border border-[var(--border-main)]/50">
                  <div className="flex items-center mb-3">
                    <Award className="h-5 w-5 text-[var(--primary)] mr-2" />
                    <h4 className="text-lg font-semibold text-[var(--text-main)]">Undergraduate Teaching Assistant</h4>
                  </div>
                  <div className="text-[var(--text-secondary)] text-sm mb-2">IIT Roorkee - Optimization Techniques</div>
                  <div className="text-xs text-[var(--text-secondary)]/60 mb-2">Roorkee, India • 2023 - 2024</div>
                  <ul className="list-disc pl-5 text-[var(--text-secondary)] text-xs space-y-1">
                    <li>Mentored 20 students in Optimization Techniques</li>
                    <li>Conducted lab sessions and provided academic guidance</li>
                    <li>Survived endless questions and debugging sessions</li>
                    <li>Learned that teaching is the best way to learn</li>
                  </ul>
                </div>

                {/* Student Mentorship Program */}
                <div className="bg-[var(--bg-card)]/30 rounded-xl p-6 border border-[var(--border-main)]/50">
                  <div className="flex items-center mb-3">
                    <Award className="h-5 w-5 text-[var(--primary)] mr-2" />
                    <h4 className="text-lg font-semibold text-[var(--text-main)]">Student Mentorship Program</h4>
                  </div>
                  <div className="text-[var(--text-secondary)] text-sm mb-2">IIT Roorkee - Academic & Technical Guidance</div>
                  <div className="text-xs text-[var(--text-secondary)]/60 mb-2">Roorkee, India • 2022 - 2024</div>
                  <ul className="list-disc pl-5 text-[var(--text-secondary)] text-xs space-y-1">
                    <li>Led mentorship program for 20 students</li>
                    <li>Helped navigate academic and technical challenges</li>
                    <li>Became the go-to person for debugging life problems</li>
                    <li>Developed strong communication and leadership skills</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;