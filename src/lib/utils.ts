import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function daysUntil(date: Date): number {
  const now = new Date();
  const diff = date.getTime() - now.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export function getStatusColor(days: number | null): string {
  if (days === null) return 'bg-gray-100 text-gray-700';
  if (days < 0) return 'bg-red-100 text-red-700';
  if (days < 30) return 'bg-red-100 text-red-700';
  if (days < 90) return 'bg-yellow-100 text-yellow-700';
  return 'bg-green-100 text-green-700';
}

export function getStatusLabel(days: number | null): string {
  if (days === null) return 'No expiry date';
  if (days < 0) return `Expired ${Math.abs(days)} days ago`;
  if (days === 0) return 'Expires today';
  if (days === 1) return 'Expires tomorrow';
  return `${days} days remaining`;
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}
