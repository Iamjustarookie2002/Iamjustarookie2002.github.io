import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 about-section-bg">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
          <div className="w-24 h-1 bg-[#7cb6fe] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {/* Education/Experience Cards from Journey Timeline */}
            {/* MS in Computer Science */}
            <div id="ms-computer-science" className="card-blur rounded-2xl p-8 border global-hover-card-border transition-all">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-[#7cb6fe] mr-3" />
                <h3 className="text-xl font-semibold text-white">MS in Computer Science</h3>
              </div>
              <div className="text-gray-300 mb-2">Purdue University - Boiler Up! <span className="text-xs text-gray-400 ml-2">West Lafayette, Indiana, USA</span></div>
              <div className="text-xs text-gray-400 mb-2">Aug 2024 - May 2026 (est)</div>
              <ul className="list-disc pl-5 text-gray-300 text-sm mb-2">
                <li>CGPA: 4.0/4.0 (Perfect score, no pressure!)</li>
                <li>Graduate student in Computer Science</li>
                <li>Living the American dream (and surviving Midwest winters)</li>
                <li>Still figuring out how to pronounce 'Lafayette'</li>
              </ul>
            </div>
            {/* B.Tech in Computer Science */}
            <div id="btech-computer-science" className="card-blur rounded-2xl p-8 border global-hover-card-border transition-all">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-[#7cb6fe] mr-3" />
                <h3 className="text-xl font-semibold text-white">B.Tech in Computer Science</h3>
              </div>
              <div className="text-gray-300 mb-2">IIT Roorkee - Where legends are made <span className="text-xs text-gray-400 ml-2">Roorkee, Uttarakhand, India</span></div>
              <div className="text-xs text-gray-400 mb-2">Nov 2020 - Jul 2024</div>
              <ul className="list-disc pl-5 text-gray-300 text-sm mb-2">
                <li>GPA: 9.377/10 (Almost perfect, but who's counting?)</li>
                <li>Undergraduate Teaching Assistant for Optimization Techniques</li>
                <li>Mentored 20 students (and survived their questions)</li>
                <li>Part of Geek Gazette and NSO clubs</li>
              </ul>
            </div>
            {/* Software Developer Intern */}
            <div id="software-developer-intern" className="card-blur rounded-2xl p-8 border global-hover-card-border transition-all">
              <div className="flex items-center mb-4">
                <Briefcase className="h-6 w-6 text-[#7cb6fe] mr-3" />
                <h3 className="text-xl font-semibold text-white">Software Developer Intern</h3>
              </div>
              <div className="text-gray-300 mb-2">NimbleEdge - Backend Wizard <span className="text-xs text-gray-400 ml-2">Bangalore, India</span></div>
              <div className="text-xs text-gray-400 mb-2">May 2023 - July 2023</div>
              <div className="text-gray-300 text-sm mb-2">Worked on backend development using Gin framework (Golang) and crafted CLI tools. Reduced latency by 12% by decoupling Azure and AWS services. Also learned that production code is like cooking - everyone has an opinion!</div>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-2 py-1 rounded bg-gray-200 text-gray-800 text-xs">Golang</span>
                <span className="px-2 py-1 rounded bg-gray-200 text-gray-800 text-xs">Gin Framework</span>
                <span className="px-2 py-1 rounded bg-gray-200 text-gray-800 text-xs">Cobra</span>
                <span className="px-2 py-1 rounded bg-gray-200 text-gray-800 text-xs">Docker</span>
                <span className="px-2 py-1 rounded bg-gray-200 text-gray-800 text-xs">Kubernetes</span>
                <span className="px-2 py-1 rounded bg-gray-200 text-gray-800 text-xs">GRPC</span>
              </div>
            </div>
            {/* High School Graduate */}
            <div id="high-school-graduate" className="card-blur rounded-2xl p-8 border global-hover-card-border transition-all">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-[#7cb6fe] mr-3" />
                <h3 className="text-xl font-semibold text-white">High School Graduate</h3>
              </div>
              <div className="text-gray-300 mb-2">Where the caffeine addiction began <span className="text-xs text-gray-400 ml-2">India</span></div>
              <div className="text-xs text-gray-400 mb-2">2018 - 2020</div>
              <ul className="list-disc pl-5 text-gray-300 text-sm mb-2">
                <li>Science stream with Computer Science</li>
                <li>Learned that sleep is optional</li>
                <li>Started the journey of 'it works on my machine'</li>
                <li>Became a professional procrastinator</li>
              </ul>
            </div>
            {/* School Days */}
            <div id="school-days" className="card-blur rounded-2xl p-8 border global-hover-card-border transition-all">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-[#7cb6fe] mr-3" />
                <h3 className="text-xl font-semibold text-white">School Days</h3>
              </div>
              <div className="text-gray-300 mb-2">The foundation of my nerdiness <span className="text-xs text-gray-400 ml-2">India</span></div>
              <div className="text-xs text-gray-400 mb-2">2006 - 2018</div>
              <ul className="list-disc pl-5 text-gray-300 text-sm mb-2">
                <li>Learned to read, write, and debug life</li>
                <li>Discovered that math is actually useful</li>
                <li>Started collecting certificates like Pokemon</li>
                <li>Became the family's tech support (still am)</li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="about-gradient-bg rounded-2xl p-8 card-blur border border-gray-800 about-card-hover transition-all">
              <h3 className="text-2xl font-bold text-white mb-6">What I Do</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-2 bg-[#7cb6fe]"></div>
                  <div>
                    <h4 className="text-white font-semibold">AI/ML Development</h4>
                    <p className="text-gray-300 text-sm">Building intelligent applications with RAG, LLMs, and computer vision using Python and modern AI frameworks</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-2 bg-[#7cb6fe]"></div>
                  <div>
                    <h4 className="text-white font-semibold">Backend Development</h4>
                    <p className="text-gray-300 text-sm">Creating robust APIs and services with Golang, Node.js, and cloud technologies like Docker and Kubernetes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-2 bg-[#7cb6fe]"></div>
                  <div>
                    <h4 className="text-white font-semibold">Teaching & Mentoring</h4>
                    <p className="text-gray-300 text-sm">Sharing knowledge as Teaching Assistant and mentoring students in their academic and technical journey</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-2 bg-[#7cb6fe]"></div>
                  <div>
                    <h4 className="text-white font-semibold">Full-Stack Development</h4>
                    <p className="text-gray-300 text-sm">Building complete web applications with React, TypeScript, and modern frontend technologies</p>
                  </div>
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