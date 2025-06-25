"use client";
import { useState, useEffect, useCallback } from 'react';

export const usePackingList = (vocation: string) => {
  const getStorageKey = useCallback(() => `bridge-packing-list-${vocation}`, [vocation]);
  
  const [checkedItems, setCheckedItems] = useState<Set<number>>(() => {
    // This part runs only on the client
    return new Set();
  });

  // Effect to load from localStorage on mount (client-side only)
  useEffect(() => {
    try {
      const item = window.localStorage.getItem(getStorageKey());
      if (item) {
        setCheckedItems(new Set(JSON.parse(item)));
      }
    } catch (error) {
      console.error("Failed to load packing list from storage", error);
    }
  }, [getStorageKey]);

  // Effect to save to localStorage when checkedItems changes (client-side only)
  useEffect(() => {
    try {
      window.localStorage.setItem(getStorageKey(), JSON.stringify(Array.from(checkedItems)));
    } catch (error) {
      console.error("Failed to save packing list to storage", error);
    }
  }, [checkedItems, getStorageKey]);

  const toggleItem = (id: number) => {
    setCheckedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const resetList = () => {
    setCheckedItems(new Set());
  };

  return { checkedItems, toggleItem, resetList };
};