import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function ProfileCard() {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-card">
      <div className="relative h-48 md:h-64 w-full">
        <Image
          src="https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756582955821-pr96nu-323.jpg"
          alt="Cover image for Larissa Santos"
          data-ai-hint="woman posing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-0 left-6 translate-y-1/2">
          <Avatar className="h-28 w-28 border-4 border-card">
            <AvatarImage src="https://rcsqvgifkuaohukogerv.supabase.co/storage/v1/object/public/model-images/1756582936279-wce3jl-F6hQiMLWAAAYswZ.jpg" data-ai-hint="woman portrait" alt="Larissa Santos" />
            <AvatarFallback>LS</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="pt-20 px-6 pb-6">
        <h1 className="text-3xl font-bold font-headline">Larissa Santos</h1>
        <p className="text-muted-foreground">@larissasantos</p>
        <p className="mt-2 text-foreground/80">Safadinha gostosa 🔥 Conteúdo exclusivo todos os dias 👑</p>
      </div>
    </div>
  );
}
