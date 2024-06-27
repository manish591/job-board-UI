import Image from 'next/image';
import { Bell, ChevronDown } from 'lucide-react';
import Logo from "@/components/logo";
import NavlinksRenderer from "@/components/navlinksrenderer";

export default function Navbar() {
  return (
    <nav className='py-4 shadow-[0_4px_4px_#D9D9D91A]'>
      <div className="flex justify-between items-center w-11/12 mx-auto">
        <Logo>
          <div className="py-4 px-5 bg-[#e7e7e7] w-max inline-block">
            <h1 className="text-xl text-brand font-bold">Logo</h1>
          </div>
        </Logo>
        <div className='hidden lg:block'>
          <NavlinksRenderer />
        </div>
        <div className='flex items-center gap-4'>
          <div 
            className='relative after:absolute after:content-[""] after:rounded-full after:top-0 after:right-[20%] after:w-[6px] after:h-[6px] after:bg-brand'>
            <Bell width={32} height={32} strokeWidth={1} />
          </div>
          <div className='flex items-center gap-1.5'>
            <Image src="atlassian.svg" width={40} height={40} alt="atlassian" />
            <ChevronDown width={20} height={20} />
          </div>
        </div>
      </div>
    </nav>
  )
};
