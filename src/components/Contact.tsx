import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Copy } from 'lucide-react';

const Contact: React.FC = () => {
  const handleEmailClick = (email: string) => {
    // Open Gmail compose window
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
    window.open(gmailUrl, '_blank');
  };

  const handleCopyEmail = (email: string, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    navigator.clipboard.writeText(email).then(() => {
      // You could add a toast notification here
      console.log('Email copied to clipboard:', email);
    });
  };

  return (
    <section id="contact" className="py-16 px-6 contact-section-bg">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-4"></div>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="card-blur rounded-2xl p-8 border global-hover-card-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[var(--text-main)] mb-4">Let's Connect</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and development. Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 card-blur rounded-lg global-hover-bg transition-all">
                  <Mail className="h-6 w-6 text-[var(--primary)]" />
                </div>
                <div className="flex-1">
                  <h4 className="text-[var(--text-main)] font-semibold">College Email</h4>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => handleEmailClick('rkudikal@purdue.edu')}
                      className="text-[var(--primary)] hover:text-[var(--hover-btn)] transition-colors"
                    >
                      rkudikal@purdue.edu
                    </button>
                    <button
                      onClick={(e) => handleCopyEmail('rkudikal@purdue.edu', e)}
                      className="p-1 hover:bg-[var(--bg-card)]/50 rounded transition-colors"
                      title="Copy email"
                    >
                      <Copy className="h-3 w-3 text-[var(--text-secondary)]" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 card-blur rounded-lg global-hover-bg transition-all">
                  <Mail className="h-6 w-6 text-[var(--primary)]" />
                </div>
                <div className="flex-1">
                  <h4 className="text-[var(--text-main)] font-semibold">Personal Email</h4>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => handleEmailClick('rishikesh.kudikala2111@gmail.com')}
                      className="text-[var(--primary)] hover:text-[var(--hover-btn)] transition-colors"
                    >
                      rishikesh.kudikala2111@gmail.com
                    </button>
                    <button
                      onClick={(e) => handleCopyEmail('rishikesh.kudikala2111@gmail.com', e)}
                      className="p-1 hover:bg-[var(--bg-card)]/50 rounded transition-colors"
                      title="Copy email"
                    >
                      <Copy className="h-3 w-3 text-[var(--text-secondary)]" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 card-blur rounded-lg global-hover-bg transition-all">
                  <Phone className="h-6 w-6 text-[var(--primary)]" />
                </div>
                <div>
                  <h4 className="text-[var(--text-main)] font-semibold">Phone</h4>
                  <a 
                    href="tel:+16576236035"
                    className="text-[var(--primary)] hover:text-[var(--hover-btn)] transition-colors"
                  >
                    (657) 623-6035
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 card-blur rounded-lg global-hover-bg transition-all">
                  <MapPin className="h-6 w-6 text-[var(--primary)]" />
                </div>
                <div>
                  <h4 className="text-[var(--text-main)] font-semibold">Location</h4>
                  <a 
                    href="https://maps.google.com/?q=West+Lafayette,+Indiana,+USA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--primary)] hover:text-[var(--hover-btn)] transition-colors"
                  >
                    West Lafayette, Indiana, USA
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <div>
                <h4 className="text-[var(--text-main)] font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 card-blur rounded-lg global-hover-bg transition-all"
                  >
                    <Github className="h-6 w-6 text-[var(--primary)]" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rishikesh-kudikala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 card-blur rounded-lg global-hover-bg transition-all"
                  >
                    <Linkedin className="h-6 w-6 text-[var(--primary)]" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 card-blur rounded-lg global-hover-bg transition-all"
                  >
                    <Instagram className="h-6 w-6 text-[var(--primary)]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;