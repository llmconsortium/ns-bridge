"use client";

import { soldiers, vocations, type Commander } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Edit, Link as LinkIcon } from 'lucide-react';

export function CommanderView({ commander }: { commander: Commander }) {

  const mySoldiers = soldiers.filter(s => s.commanderId === commander.id);
  const resourceLinks = vocations[commander.vocation].resources;

  return (
    <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
      <Card className="shadow-lg animate-fade-in-up" style={{ animationDelay: '100ms', opacity: 0 }}>
        <CardHeader>
          <CardTitle>Personnel Status</CardTitle>
          <CardDescription>Recruits under your command.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
              <Table>
              <TableHeader>
                  <TableRow>
                  <TableHead className="w-[80px]">Rank</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead className="text-right">Bridge Access</TableHead>
                  </TableRow>
              </TableHeader>
              <TableBody>
                  {mySoldiers.map((soldier) => (
                  <TableRow key={soldier.id}>
                      <TableCell>{soldier.rank}</TableCell>
                      <TableCell className="font-medium">{soldier.name}</TableCell>
                      <TableCell className="text-right">
                      {soldier.lastLogin ? 
                          <Badge variant="default">Accessed</Badge>
                          : 
                          <Badge variant="destructive">Not Accessed</Badge>
                      }
                      </TableCell>
                  </TableRow>
                  ))}
              </TableBody>
              </Table>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg animate-fade-in-up" style={{ animationDelay: '200ms', opacity: 0 }}>
        <CardHeader>
          <CardTitle>Mission Configuration</CardTitle>
          <CardDescription>Manage packing lists and resources for your unit.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h4 className="font-semibold">Packing List</h4>
            <p className="text-sm text-muted-foreground">
              Define the required items for the upcoming mission.
            </p>
            <Button variant="outline" className="w-full">
              <Edit className="mr-2 h-4 w-4" /> Edit Packing List
            </Button>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Resource Links</h4>
             <p className="text-sm text-muted-foreground">
              Update links for maps and communication channels.
            </p>
            <div className="flex items-center gap-2 text-sm">
                <LinkIcon className="h-4 w-4 text-muted-foreground" />
                <span className="font-mono text-muted-foreground break-all">{resourceLinks.telegramUrl}</span>
            </div>
            <Button variant="outline" className="w-full">
              <Edit className="mr-2 h-4 w-4" /> Edit Resource Links
            </Button>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">FAQ</h4>
            <p className="text-sm text-muted-foreground">
              Provide answers to common questions from recruits.
            </p>
            <Button variant="outline" className="w-full">
              <Edit className="mr-2 h-4 w-4" /> Edit FAQ
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
