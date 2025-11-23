'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            iNeuroLab
          </Link>
          
          <div className="flex space-x-6">
            <Link href="/research" className="hover:text-blue-600">Research</Link>
            <Link href="/technology" className="hover:text-blue-600">Technology</Link>
            <Link href="/lab-members" className="hover:text-blue-600">Lab Members</Link>
            <Link href="/news" className="hover:text-blue-600">News</Link>
            <Link href="/contacts" className="hover:text-blue-600">Contacts</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}