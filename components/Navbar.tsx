import Link from 'next/link';
import Image from 'next/image';

import CustomButton from './CustomButton';

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
            <Link href="/" className='flex justify-center items-center'>
                <Image 
                    src="/Drivefy-Logo.png"
                    alt="Drivefy Logo"
                    width={200}
                    height={20}
                    className="object-contain"
                />
            </Link>

            <CustomButton 
                title="Sign In"
                btnType="button"
                containerStyles="text-spotify-green rounded-full bg-white min-w-[130px] font-bold"
            />
        </nav>
    </header>
  )
}

export default Navbar