// File purpose: Site navigation data: main menu links, footer links, and company contact details.
import type { NavItem } from '@/types';

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Projects',
    href: '/projects',
    children: [
      { label: 'All Projects', href: '/projects' },
      { label: 'Ongoing Projects', href: '/ongoing-projects' },
      { label: 'Completed Projects', href: '/completed-projects' },
    ],
  },
  { label: 'Amenities', href: '/amenities' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav = {
  projects: [
    { label: 'Yuva Sunrise', href: '/projects/yuva-sunrise' },
    { label: 'Yuva Utsav', href: '/projects/yuva-utsav' },
    { label: 'Yuva Sunshine', href: '/projects/yuva-sunshine' },
    { label: 'Yuva Residency', href: '/projects/yuva-residency' },
    { label: 'Yuva Heritage', href: '/projects/yuva-heritage' },
    { label: 'Yuva Lake View', href: '/projects/yuva-lake-view' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Amenities', href: '/amenities' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'Schedule a Site Visit', href: '/schedule-visit' },
    { label: 'Enquire Now', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ],
};

export const contactInfo = {
  phone: '+91 82 82 82 3395 / +91 82 82 82 3396',
  email: 'enquiry@yuvastructures.com',
  additionalEmails: ['mahendra@yuvastructures.com', 'karthikb@yuvastructures.com'],
  address:
    '115, 2nd Floor, Sankirana, Hosur Road, Near Murali TVs Show Room, Chandapura, Bengaluru, Karnataka 560099, India',
  legalName: 'Yuva Structures Pvt. Ltd.',
  // No RERA registration number is published — link to the official Karnataka RERA portal instead
  rera: 'Karnataka RERA',
  reraUrl: 'https://rera.karnataka.gov.in/',
};

export const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/people/Yuva-Group/61575266570811/' },
  { label: 'Instagram', href: 'https://www.instagram.com/yuvagroup_yspl/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@yuvagroups' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/yuva-group/' },
];

export const whatsapp = {
  phone: '+918282823395',
  // Pre-filled message used by the floating WhatsApp button and the contact page
  message: 'Hello Yuva Group, I would like to know more about your projects.',
  get link() {
    return `https://wa.me/${this.phone.replace(/\D/g, '')}?text=${encodeURIComponent(this.message)}`;
  },
};
