import { Toaster as SonnerToaster } from 'sonner';

declare global {
  interface Window {
    toast: typeof import('sonner').toast;
  }
}

export {};
