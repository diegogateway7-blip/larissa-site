import { Cog } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ProfileHeader() {
  return (
    <header className="bg-card shadow-sm sticky top-0 z-40">
      <nav className="container mx-auto max-w-4xl px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-2xl font-bold text-foreground font-headline">
            privacy<span className="text-primary">.</span>
          </a>
          <Button variant="ghost" size="icon">
            <Cog className="h-6 w-6" />
            <span className="sr-only">Settings</span>
          </Button>
        </div>
      </nav>
    </header>
  );
}
