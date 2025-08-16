import React, { useEffect, useState } from 'react';
import { Mail, MapPin, Linkedin, InstagramIcon } from 'lucide-react';

interface ContactItem {
  icon: keyof typeof iconMap;
  href: string;
  label: string;
}

interface ContactData {
  description: string;
  contacts: ContactItem[];
}

const iconMap = {
  Mail,
  MapPin,
  Linkedin,
  Instagram: InstagramIcon,
};

const Contact: React.FC = () => {
  const [contactData, setContactData] = useState<ContactData | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch('/data/contact.json')
      .then((res) => res.json())
      .then((data) => setContactData(data));
  }, []);

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  if (!contactData) return null;

  return (
    <section id="contact" className="py-16 px-6 contact-section-bg">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-4"></div>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            {contactData.description}
          </p>
        </div>
        <div className="flex justify-center items-center space-x-6 mt-8">
          {contactData.contacts.map((item, idx) => {
            const LucideIcon = iconMap[item.icon];
            if (item.icon === 'Mail') {
              return (
                <button
                  key={idx}
                  onClick={() => handleCopyEmail(item.href.replace('mailto:', ''))}
                  className="p-3 contact-icon rounded-lg transition-all hover:scale-110"
                  title={item.label}
                  type="button"
                >
                  <LucideIcon className="h-6 w-6 text-[var(--primary)]" />
                </button>
              );
            }
            return (
              <a
                key={idx}
                href={item.href}
                target={item.icon === 'MapPin' || item.icon === 'Linkedin' || item.icon === 'Instagram' ? '_blank' : undefined}
                rel={item.icon === 'MapPin' || item.icon === 'Linkedin' || item.icon === 'Instagram' ? 'noopener noreferrer' : undefined}
                className="p-3 contact-icon rounded-lg transition-all hover:scale-110"
                title={item.label}
              >
                <LucideIcon className="h-6 w-6 text-[var(--primary)]" />
              </a>
            );
          })}
        </div>
        {copied && (
          <span className="toast-notice">Email copied to clipboard!</span>
        )}
      </div>
    </section>
  );
};

export default Contact;