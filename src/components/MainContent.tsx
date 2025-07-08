import { ReactNode } from 'react';

interface MainContentProps {
  children: ReactNode;
}

export default function MainContent({ children }: MainContentProps) {
  return (
    <main className="flex-grow pt-16">
      {children}
    </main>
  );
} 