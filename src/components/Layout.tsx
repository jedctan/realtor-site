import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </div>
  );
} 