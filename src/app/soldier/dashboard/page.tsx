"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/header';
import { PackingList } from '@/components/packing-list';
import { ResourceLinks } from '@/components/resource-links';
import { soldiers, type Soldier } from '@/lib/data';
import { Skeleton } from '@/components/ui/skeleton';
import Confetti from 'react-confetti';

export default function SoldierDashboard() {
  const router = useRouter();
  const [soldier, setSoldier] = useState<Soldier | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [vocationRevealed, setVocationRevealed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    try {
      // Check if localStorage is available
      if (typeof window === 'undefined' || !window.localStorage) {
        setError('Storage not available');
        router.replace('/');
        return;
      }

      const role = localStorage.getItem('bridge-role');
      const nric = localStorage.getItem('bridge-nric');

      if (role !== 'soldier') {
        setError('Unauthorized access');
        router.replace('/');
        return;
      }

      if (!nric) {
        setError('No identification found');
        router.replace('/');
        return;
      }

      const currentSoldier = soldiers.find(s => s.id === nric);
      if (currentSoldier) {
        setSoldier(currentSoldier);
      } else {
        console.error("Soldier not found for NRIC:", nric);
        setError('Soldier profile not found');
        router.replace('/');
        return;
      }
    } catch (err) {
      console.error('Error accessing user data:', err);
      setError('Failed to load user data');
      router.replace('/');
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      };
      
      // Set initial size
      handleResize();
      window.addEventListener('resize', handleResize);
      
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const handleRevealVocation = () => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
    }
    
    setVocationRevealed(true);
  };
  
  if (isLoading || !soldier) {
    return (
      <div className="flex min-h-screen w-full flex-col">
        <Header />
        <main className="flex-1 p-4 md:p-8 lg:p-10">
          <div className="max-w-4xl mx-auto">
            <Skeleton className="h-8 w-1/2 mb-2" />
            <Skeleton className="h-6 w-1/4 mb-8" />
            <div className="grid gap-8 lg:grid-cols-2">
              <Skeleton className="h-96 w-full" />
              <Skeleton className="h-64 w-full" />
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen w-full flex-col">
        <Header />
        <main className="flex-1 p-4 md:p-8 lg:p-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl font-bold text-destructive mb-2">Access Error</h1>
            <p className="text-muted-foreground">{error}</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* Confetti container - better positioned */}
      {showConfetti && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            recycle={false}
            numberOfPieces={500}
            tweenDuration={10000}
          />
        </div>
      )}
      
      <Header />
      <main className="flex-1 p-4 md:p-8 lg:p-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in-up animate-delay-100">
            <h1 className="text-3xl font-bold">
              {vocationRevealed ? (
                <>Welcome to {soldier.vocation}, {soldier.rank} {soldier.name}</>
              ) : (
                <>
                  Welcome to{' '}
                  <button
                    onClick={handleRevealVocation}
                    className="inline-block bg-muted px-4 py-1 rounded-md text-primary hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    aria-label="Reveal your military vocation"
                  >
                    [REDACTED]
                  </button>
                  , {soldier.rank} {soldier.name}
                </>
              )}
            </h1>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            <PackingList vocation={soldier.vocation} />
            <ResourceLinks vocation={soldier.vocation} />
          </div>
        </div>
      </main>
    </div>
  );
}