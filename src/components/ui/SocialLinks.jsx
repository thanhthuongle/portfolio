import { Github, Linkedin, Twitter, Instagram, Facebook, Mail, Globe } from 'lucide-react';
import { profile } from '../../data/profile';

const ICONS = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  facebook: Facebook,
  mail: Mail,
  globe: Globe,
};

export default function SocialLinks({ size = 20, className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {profile.socials.map((s) => {
        const Icon = ICONS[s.icon] || Globe;
        const external = !s.url.startsWith('mailto:');
        return (
          <a
            key={s.name}
            href={s.url}
            aria-label={s.name}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            <Icon size={size} />
          </a>
        );
      })}
    </div>
  );
}
