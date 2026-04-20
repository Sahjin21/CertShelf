import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { Shield } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-brand-700 text-lg">
          <Shield className="w-6 h-6" />
          CertShelf
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <Link href="/dashboard" className="hover:text-brand-600 transition-colors">Dashboard</Link>
          <Link href="/licenses" className="hover:text-brand-600 transition-colors">Licenses</Link>
          <Link href="/ce" className="hover:text-brand-600 transition-colors">CE Credits</Link>
          <Link href="/discover" className="hover:text-brand-600 transition-colors">Discover</Link>
        </nav>
        <div className="flex items-center gap-3">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </header>
  );
}
