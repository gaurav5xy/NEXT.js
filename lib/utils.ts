import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getTimeStamp( createdAt : Date): string {
  const now = new Date();
  const createdTime = new Date(createdAt);
  const diffInSeconds = Math.floor((now.getTime() - createdTime.getTime()) / 1000);

  const years = Math.floor(diffInSeconds / (365 * 24 * 60 * 60));
  const months = Math.floor(diffInSeconds / (30 * 24 * 60 * 60));
  const days = Math.floor(diffInSeconds / (24 * 60 * 60));
  const hours = Math.floor(diffInSeconds / (60 * 60));
  const minutes = Math.floor(diffInSeconds / 60);
  const seconds = diffInSeconds;

  if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;
  if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;
  if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
  if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
}

export function formatNumber(numStr: string): string {
  const num = parseFloat(numStr);

  if (isNaN(num)) {
      throw new Error("Invalid number format");
  }

  if (num >= 1_000_000_000) {
      return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
  } else if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  } else if (num >= 1_000) {
      return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
  } else {
      return num.toString();
  }
}


