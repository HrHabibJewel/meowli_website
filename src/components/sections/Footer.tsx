import { Link } from 'react-router-dom';
import { PawPrint } from '@/components/PetIcons';
import { Twitter, Instagram, Facebook } from 'lucide-react';
import meowliLogo from '@/assets/meowli-logo.png';
import meowliFullLogo from '@/assets/logo_fullname_without_bg.png';

const footerLinks = [
  { label: 'Terms of Service', href: '/terms'  },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Sitemap', href: '/sitemap.xml' },
  { label: 'FAQ', href: '/faq' },
];

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container px-4">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            {/* <img src={meowliLogo} alt="Meowli Logo" className="w-20 h-20" /> */}
            {/* <span className="text-2xl font-bold text-primary-foreground">Meowli</span> */}
            <img src={meowliFullLogo} alt="Meowli Logo" width={350} />
          </div>
          
          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 mb-8">
            {footerLinks.map((link) => {
              const isStaticFile = link.href.includes('.');
              const isInternalRoute = link.href.startsWith('/') && !isStaticFile;
              
              return isInternalRoute ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors flex items-center gap-1 text-sm"
                  
                >
                  <PawPrint size={10} className="text-primary/50" />
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors flex items-center gap-1 text-sm"
                >
                  <PawPrint size={10} className="text-primary/50" />
                  {link.label}
                </a>
              );
            })}
          </nav>
          
          {/* Social links */}
          <div className="flex gap-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <p className="text-primary-foreground/50 text-sm text-center">
            © 2026 Meowli. Made with 💕 for pets and their humans. Pawdates, Vets & Shopping — Meowli Has It All 🐾
          </p>
        </div>
      </div>
    </footer>
  );
};
