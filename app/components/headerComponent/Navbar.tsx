import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="flex items-center justify-between px-[181px] py-[15px]">
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
            <h5 className='nunito xl'>
            KARANG TARUNA RW 007 <br></br>
            Kelurahan Jelambar
            </h5>
          </div>
        </div>
        
        <nav className="flex-grow">
          <ul className="flex justify-center space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/information">Information</Link></li>
          </ul>
        </nav>

        <div className="auth-buttons">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
