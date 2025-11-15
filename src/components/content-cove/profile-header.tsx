import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ProfileHeader() {
  return (
    <header className="bg-card">
      <nav className="container mx-auto max-w-4xl px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-2xl font-bold text-foreground font-headline flex items-center gap-1">
            SigiloVip
            <svg 
              viewBox="0 0 30 38" 
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-5 inline-block"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#667eea', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#764ba2', stopOpacity: 1}} />
                </linearGradient>
              </defs>
              <rect x="5" y="16" width="20" height="22" rx="3" fill="url(#grad1)"/>
              <path 
                d="M 9 16 L 9 11 Q 9 5, 15 5 Q 21 5, 21 11 L 21 16" 
                stroke="url(#grad1)" 
                strokeWidth="4" 
                fill="none" 
                strokeLinecap="round"
              />
              <circle cx="15" cy="25" r="3" fill="white" opacity="0.9"/>
              <rect x="13.5" y="25" width="3" height="6" rx="1.5" fill="white" opacity="0.9"/>
              <ellipse cx="12" cy="20" rx="3" ry="4" fill="white" opacity="0.2"/>
            </svg>
          </a>
          <Button variant="ghost" size="icon" className="text-foreground hover:bg-muted/50">
            <Globe className="h-6 w-6" />
            <span className="sr-only">Language</span>
          </Button>
        </div>
      </nav>
    </header>
  );
}
