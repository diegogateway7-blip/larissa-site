import React, { useEffect, useRef } from 'react';
import AdminSidebar from '@/components/ui/admin-sidebar';
import { useRouter } from 'next/navigation';
import { toast } from '@/hooks/use-toast';

const SESSION_TIMEOUT_MIN = 30;

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout|number|null>(null);

  function handleLogout(manual = false) {
    localStorage.removeItem('admin-auth');
    if (!manual) toast({ title: 'Sessão encerrada por inatividade.' });
    router.push('/admin/login');
  }
  function resetTimeout() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current as number);
    timeoutRef.current = setTimeout(() => handleLogout(false), SESSION_TIMEOUT_MIN*60*1000);
  }
  useEffect(() => {
    resetTimeout();
    function activityHandler() { resetTimeout(); }
    window.addEventListener('click', activityHandler);
    window.addEventListener('keydown', activityHandler);
    window.addEventListener('mousemove', activityHandler);
    window.addEventListener('scroll', activityHandler);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current as number);
      window.removeEventListener('click', activityHandler);
      window.removeEventListener('keydown', activityHandler);
      window.removeEventListener('mousemove', activityHandler);
      window.removeEventListener('scroll', activityHandler);
    };
    // eslint-disable-next-line
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar onLogout={()=>handleLogout(true)} />
      <div className="flex-1 ml-56">
        <main className="container mx-auto py-8">{children}</main>
      </div>
    </div>
  );
}
