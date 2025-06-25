"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/header';
import { CommanderView } from '@/components/commander-view';
import { Skeleton } from '@/components/ui/skeleton';
import { commanders, type Commander } from '@/lib/data';

export default function CommanderDashboard() {
  const router = useRouter();
  const [commander, setCommander] = useState<Commander | null>(null);

  useEffect(() => {
    const role = localStorage.getItem('bridge-role');
    const nric = localStorage.getItem('bridge-nric');

    if (role !== 'commander' || !nric) {
      router.replace('/');
      return;
    }
    
    const currentCommander = commanders.find(c => c.id === nric);
    if (currentCommander) {
      setCommander(currentCommander);
    } else {
      // Handle case where commander NRIC is not found, maybe redirect or show error
      console.error("Commander not found for NRIC:", nric);
      router.replace('/');
    }
  }, [router]);
  
  if (!commander) {
    return (
       <div className="flex min-h-screen w-full flex-col">
        <Header />
        <main className="flex-1 p-4 md:p-8 lg:p-10">
          <div className="max-w-6xl mx-auto">
             <Skeleton className="h-8 w-1/3 mb-2" />
             <Skeleton className="h-6 w-1/2 mb-8" />
             <Skeleton className="h-96 w-full" />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1 p-4 md:p-8 lg:p-10">
        <div className="max-w-6xl mx-auto">
           <div className="mb-8 animate-fade-in-up" style={{opacity: 0}}>
            <h1 className="text-3xl font-bold">{commander.rank} {commander.name}&apos;s Dashboard</h1>
            <p className="text-muted-foreground">Unit Readiness for {commander.vocation}</p>
          </div>
          <CommanderView commander={commander} />
        </div>
      </main>
    </div>
  );
}
