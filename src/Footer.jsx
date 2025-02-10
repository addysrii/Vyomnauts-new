import React from 'react';
import { Github, Linkedin, Twitter, Mail,Instagram, } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    // { 
    //   icon: Github, 
    //   href: 'https://github.com/psit-vyomnauts', 
    //   label: 'GitHub' 
    // },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/company/psit-vyomnauts/', 
      label: 'LinkedIn' 
    },
    // { 
    //   icon: Twitter, 
    //   href: 'https://twitter.com/psit_vyomnauts', 
    //   label: 'Twitter' 
    // },
    { 
      icon: Mail, 
      href: 'mailto:vyomnauts@psit.org.in', 
      label: 'Email' 
    },{
        icon:Instagram,
        href:'https://www.instagram.com/psit.vyomnauts?igsh=MTlhZmRycWw0dnpwbw==',
        lable:'Instagram'
    },
   
  ];

  return (
    <footer className="bg-black border-t border-yellow-400 text-yellow-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Vyomnauts Club</h3>
          <p className="text-yellow-200">
            Exploring the cosmos, inspiring innovation, and pushing the boundaries of space science.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <nav className="space-y-2">
            <a href="#" className="block hover:text-yellow-300 transition-colors">Home</a>
            <a href="#" className="block hover:text-yellow-300 transition-colors">Events</a>
            <a href="#" className="block hover:text-yellow-300 transition-colors">About Us</a>
            <a href="#" className="block hover:text-yellow-300 transition-colors">Contact</a>
          </nav>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a 
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                <social.icon size={24} />
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
          </div>
          <p className="mt-4 text-yellow-200 text-sm">
            © {new Date().getFullYear()} Vyomnauts Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;