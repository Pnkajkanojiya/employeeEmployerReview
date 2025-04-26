// components/Header.tsx
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Companies', href: '/companies' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const router = useRouter();

  return (
    <header className="bg-[#007DFC] text-white py-3 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div>
          <Image src="/assets/png/emp_logo.png" alt="Logo" width={180} height={50} />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = router.pathname === link.href;
            return (
              <Link key={link.label} href={link.href} className="relative hover:opacity-90">
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-white rounded-full"></span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
