"use client";

import { useState } from 'react';
import { vocations, type Vocation } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Map, Send, Link as LinkIcon, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import { Faq } from './faq';

export function ResourceLinks({ vocation }: { vocation: Vocation }) {
  const { resources, faq } = vocations[vocation];
  const { googleMapsUrl, telegramUrl } = resources;
  const [fullName, setFullName] = useState('');

  const handleTelegramAccess = () => {
    // In a real app, this name might be logged for accountability.
    console.log(`User '${fullName}' is accessing Telegram.`);
    window.open(telegramUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="shadow-lg animate-fade-in-up" style={{animationDelay: '200ms', opacity: 0}}>
      <CardHeader>
        <div className="flex items-center gap-4">
          <LinkIcon className="h-6 w-6 text-primary" />
          <CardTitle className="text-2xl">Resources</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Button asChild size="lg" className="justify-start h-16 text-base">
          <Link href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
            <Map className="mr-4 h-5 w-5" />
            <span>Area of Operations Map</span>
          </Link>
        </Button>
        
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button size="lg" className="justify-start h-16 text-base">
              <Send className="mr-4 h-5 w-5" />
              <span>Unit Telegram Channel</span>
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Confirm Your Identity</AlertDialogTitle>
              <AlertDialogDescription>
                Please enter your full name before proceeding to the Telegram channel. This is for accountability purposes.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <div className="py-4">
              <Label htmlFor="full-name" className="text-right">
                Full Name
              </Label>
              <Input
                id="full-name"
                placeholder="e.g. Tan Ah Kow"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mt-2"
              />
            </div>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleTelegramAccess} disabled={!fullName.trim()}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="lg" className="justify-start h-16 text-base">
              <HelpCircle className="mr-4 h-5 w-5" />
              <span>FAQ</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Frequently Asked Questions</SheetTitle>
            </SheetHeader>
            <div className="py-4">
              <Faq faqs={faq} />
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
}
