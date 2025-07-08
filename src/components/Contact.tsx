import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-6 contact-section-bg">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-4"></div>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[var(--text-main)] mb-6">Let's Connect</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and development. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 card-blur rounded-lg global-hover-bg transition-all">
                  <Mail className="h-6 w-6 text-[var(--primary)]" />
                </div>
                <div>
                  <h4 className="text-[var(--text-main)] font-semibold">Email</h4>
                  <p className="text-[var(--text-secondary)]">rkudikal@purdue.edu</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 card-blur rounded-lg global-hover-bg transition-all">
                  <Phone className="h-6 w-6 text-[var(--primary)]" />
                </div>
                <div>
                  <h4 className="text-[var(--text-main)] font-semibold">Phone</h4>
                  <p className="text-[var(--text-secondary)]">(657) 623-6035</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 card-blur rounded-lg global-hover-bg transition-all">
                  <MapPin className="h-6 w-6 text-[var(--primary)]" />
                </div>
                <div>
                  <h4 className="text-[var(--text-main)] font-semibold">Location</h4>
                  <p className="text-[var(--text-secondary)]">West Lafayette, Indiana, USA</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
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
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 card-blur rounded-lg global-hover-bg transition-all"
                >
                  <Twitter className="h-6 w-6 text-[var(--primary)]" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-blur rounded-2xl p-8 border global-hover-card-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[var(--text-main)] font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--bg-card)]/50 border border-[var(--border-main)] rounded-lg text-[var(--text-main)] placeholder-[var(--text-secondary)]/60 focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[var(--text-main)] font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--bg-card)]/50 border border-[var(--border-main)] rounded-lg text-[var(--text-main)] placeholder-[var(--text-secondary)]/60 focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-[var(--text-main)] font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[var(--bg-card)]/50 border border-[var(--border-main)] rounded-lg text-[var(--text-main)] placeholder-[var(--text-secondary)]/60 focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[var(--text-main)] font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[var(--bg-card)]/50 border border-[var(--border-main)] rounded-lg text-[var(--text-main)] placeholder-[var(--text-secondary)]/60 focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-all resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-[var(--primary)] hover:bg-[var(--hover-btn)] text-[var(--bg-main)] font-semibold rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50"
              >
                <Send className="h-5 w-5 text-[var(--bg-main)]" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;