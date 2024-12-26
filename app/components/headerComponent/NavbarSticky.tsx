import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white font-nunito">

      <div className="items-center justify-items-center grid gap-[12px] px-[181px] py-[15px]">
        <div className="flex items-center gap-2">
          <div style={{ width: '64px', height: '64px', position: 'relative' }}>
            <Image
              src="/assets/static-images/logo64x64.png"
              alt="Logo Karang Taruna Jelambar"
              width={64}
              height={64}
              layout="intrinsic"
              objectFit="cover"
              sizes="64px" // untuk ukuran responsif
              priority
            />
          </div>
          <div>
            <h5 className='xl font-bold'>
            KARANG TARUNA RW 007 <br></br>
            Kelurahan Jelambar
            </h5>
          </div>
        </div>
        
      <div className='flex items-center gap-[48px]'>
        <nav className="flex-grow">
          <ul className="flex justify-center space-x-[32px]">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/tentang">Tentang</Link></li>
            <li><Link href="/kegiatan">Kegiatan</Link></li>
            <li><Link href="/berita">Berita</Link></li>
            <li><Link href="/kontak">Kontak</Link></li>
          </ul>
        </nav>

        <div className="auth-buttons flex">
        <Link className="flex button-registrasi" href="/kontak">
        <Image
              src="/icon/door.svg"
              alt="Logo Karang Taruna Jelambar"
              width={28}
              height={28}
              layout="intrinsic"
              objectFit="cover"
              sizes="28px" // untuk ukuran responsif
              priority
            />
          <p>Anggota Baru</p>
        </Link>
        </div>
      </div>

      </div>
    </header>
  );
};

export default Navbar;
