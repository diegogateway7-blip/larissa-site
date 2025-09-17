import { ProfileHeader } from '@/components/content-cove/profile-header';
import { ProfileCard } from '@/components/content-cove/profile-card';
import { ExclusiveContent } from '@/components/content-cove/exclusive-content';

export default function Home() {
  return (
    <div className="bg-background min-h-screen font-body">
      <ProfileHeader />
      <main className="container mx-auto max-w-4xl px-4 py-8">
        <ProfileCard />
        <ExclusiveContent />
      </main>
    </div>
  );
}
