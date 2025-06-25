"use client";

import { usePackingList } from '@/hooks/use-packing-list';
import { vocations, type Vocation } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { ListChecks, RefreshCw } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export function PackingList({ vocation }: { vocation: Vocation }) {
  const { checkedItems, toggleItem, resetList } = usePackingList(vocation);
  const packingListData = vocations[vocation].packingList;
  
  const progress = packingListData.length > 0 ? (checkedItems.size / packingListData.length) * 100 : 0;
  
  const categories = [...new Set(packingListData.map(item => item.category))];

  return (
    <Card className="shadow-lg animate-fade-in-up" style={{ animationDelay: '100ms', opacity: 0 }}>
      <CardHeader>
        <div className="flex items-center gap-4">
          <ListChecks className="h-6 w-6 text-primary" />
          <CardTitle className="text-2xl">Packing List</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Overall Progress</span>
            <span className="text-sm font-bold">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} aria-label={`${Math.round(progress)}% complete`} />
        </div>

        {categories.map(category => (
          <div key={category}>
            <h3 className="text-lg font-semibold mb-2 text-muted-foreground">{category}</h3>
            <div className="space-y-2">
            {packingListData
              .filter(item => item.category === category)
              .map((item, index) => (
              <div
                key={item.id}
                className="flex items-center space-x-3 p-3 rounded-md bg-background hover:bg-muted/50 transition-colors animate-fade-in-up"
                style={{ animationDelay: `${index * 150 + 200}ms`, opacity: 0 }}
              >
                <Checkbox
                  id={`item-${item.id}`}
                  checked={checkedItems.has(item.id)}
                  onCheckedChange={() => toggleItem(item.id)}
                  aria-labelledby={`item-label-${item.id}`}
                />
                <label
                  id={`item-label-${item.id}`}
                  htmlFor={`item-${item.id}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex-1 cursor-pointer"
                >
                  {item.name}
                </label>
              </div>
            ))}
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button variant="outline" onClick={resetList} className="w-full">
            <RefreshCw className="mr-2 h-4 w-4"/>
            Reset List
        </Button>
      </CardFooter>
    </Card>
  );
}
