"use client";

import { useState, useEffect, useCallback } from 'react';

  @param vocation The identifier for the packing list (e.g., 'missionary').

export const usePackingList = (vocation: string) => {
  const getStorageKey = useCallback(() => `bridge-packing-list-${vocation}`, [vocation]);

  const [checkedItems, setCheckedItems] = useState<Set<number>>(() => {
    try {
      if (typeof window !== 'undefined') {
        const item = window.localStorage.getItem(getStorageKey());
        return item ? new Set(JSON.parse(item)) : new Set();
      }
    } catch (error) {
      console.error("Failed to load packing list from storage on init", error);
    }
    return new Set();
  });

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
    try {
      window.localStorage.removeItem(getStorageKey());
    } catch(error) {
      console.error("Failed to reset packing list in storage", error);
    }
  };

  return { checkedItems, toggleItem, resetList };
};