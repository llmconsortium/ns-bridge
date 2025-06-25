"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { User, ShieldCheck, Fingerprint } from 'lucide-react';

export function LoginForm() {
  const [role, setRole] = useState<'soldier' | 'commander'>('soldier');
  const [nric, setNric] = useState('');
  const router = useRouter();

  const handleRoleChange = (value: 'soldier' | 'commander') => {
    setRole(value);
  }

  const handleLogin = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('bridge-role', role);
      // Make login case-insensitive and remove spaces to match simplified IDs
      localStorage.setItem('bridge-nric', nric.toLowerCase().replace(/\s/g, ''));
      if (role === 'soldier') {
        router.push('/soldier/dashboard');
      } else {
        router.push('/commander/dashboard');
      }
    }
  };

  return (
    <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '300ms', opacity: 0 }}>
      <RadioGroup value={role} onValueChange={handleRoleChange} className="grid grid-cols-2 gap-4">
        <div>
          <RadioGroupItem value="soldier" id="soldier" className="peer sr-only" />
          <Label
            htmlFor="soldier"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-all"
          >
            <User className="mb-3 h-6 w-6" />
            Soldier
          </Label>
        </div>
        <div>
          <RadioGroupItem value="commander" id="commander" className="peer sr-only" />
          <Label
            htmlFor="commander"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-all"
          >
            <ShieldCheck className="mb-3 h-6 w-6" />
            Commander
          </Label>
        </div>
      </RadioGroup>
      
      <div className="space-y-2">
        <Label htmlFor="nric">NRIC</Label>
        <div className="relative">
          <Fingerprint className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input id="nric" value={nric} onChange={(e) => setNric(e.target.value)} className="pl-10" />
        </div>
      </div>

      <Button onClick={handleLogin} className="w-full text-lg font-semibold transition-transform duration-200 ease-in-out hover:scale-105 active:scale-100" style={{background: 'linear-gradient(to right, hsl(var(--primary)), hsl(var(--accent)))', color: 'hsl(var(--primary-foreground))'}}>
        Login
      </Button>
    </div>
  );
}
