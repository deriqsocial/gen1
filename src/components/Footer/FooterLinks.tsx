import React from 'react';

interface LinkSection {
  title: string;
  links: Array<{
    name: string;
    href: string;
  }>;
}

const sections: LinkSection[] = [
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Partners', href: '#' },
      { name: 'Contact', href: '#contact' }
    ]
  },
  {
    title: 'Services',
    links: [
      { name: 'AI Solutions', href: '#services' },
      { name: 'Consulting', href: '#services' },
      { name: 'Training', href: '#services' },
      { name: 'Research', href: '#services' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', href: '#insights' },
      { name: 'Case Studies', href: '#insights' },
      { name: 'Events', href: '#events' },
      { name: 'Documentation', href: '#' }
    ]
  }
];

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
            {section.title}
          </h3>
          <ul className="mt-4 space-y-4">
            {section.links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-base text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}