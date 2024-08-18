'use client';

// Hooks & Libs
import { useEffect } from 'react';
// Components
import Link from 'next/link';
import Logo from '../logo';
import { Button } from '@goal-sprite/shadcn-ui';

export default function SiteHeader() {
  useEffect(() => {
    function detectHeaderHeight() {
      const header = document.getElementById('site-header');
      const headerHeight = header?.offsetHeight || 0;
      document.documentElement.style.setProperty(
        '--h-header',
        `${headerHeight}px`
      );
    }
    detectHeaderHeight();

    window.addEventListener('resize', detectHeaderHeight);

    return () => {
      window.removeEventListener('resize', detectHeaderHeight);
    };
  }, []);

  return (
    <header className="flex justify-between px-edge py-4" id="site-header">
      <Logo />
      <Button>
        <Link href="/auth">Login</Link>
      </Button>
    </header>
  );
}
