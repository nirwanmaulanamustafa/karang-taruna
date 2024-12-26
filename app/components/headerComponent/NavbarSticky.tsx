'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-gray-800 text-white font-nunito">
      <div className="grid items-center justify-items-center gap-[12px] px-[24px] py-[15px]">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div style={{ width: '64px', height: '64px', position: 'relative' }}>
            <Image
              src="/assets/static-images/logo64x64.png"
              alt="Logo Karang Taruna Jelambar"
              width={64}
              height={64}
              priority
            />
          </div>
          <div>
            <h5 className="xl font-bold">
              KARANG TARUNA RW 007 <br />
              Kelurahan Jelambar
            </h5>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-[48px]">
          <nav className="flex-grow">
            <ul className="flex justify-center gap-[32px]">
              {[
                { href: '/', label: 'Home' },
                { href: '/tentang', label: 'Tentang' },
                { href: '/kegiatan', label: 'Kegiatan' },
                { href: '/berita', label: 'Berita' },
                { href: '/kontak', label: 'Kontak' },
                { href: '/information', label: 'information' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
  href={item.href}
  className={`link-sticky ${isActive(item.href) ? 'active' : ''}`}
>
  {item.label}
</Link>

                </li>
              ))}
            </ul>
          </nav>

          {/* Button */}
          <div className="auth-buttons flex">
            <Link className="flex items-center gap-2 button-registrasi" href="/kontak">
              <Image
                src="/icon/door.svg"
                alt="Anggota Baru"
                width={28}
                height={28}
                priority
              />
              <span>Anggota Baru</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
