"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const ok = localStorage.getItem("admin-auth") === "1";
      if (!ok) router.push("/admin/login");
    }
  }, [router]);

  return <div className="text-xl">Bem-vindo ao Painel Administrativo</div>;
}
