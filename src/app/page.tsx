import NavBar from '@/app/components/layout/NavBar';
import Carousel from './components/carousel';
import Generate from './components/generate';
import Footer from './components/ui/Footer';
import { Inter } from 'next/font/google';
import { MdOutlineArticle, MdOutlinePayment } from 'react-icons/md';

const inter = Inter({
  subsets: ['latin'],
  weight: ["400", "600", "700"],
});

export default function Home() {
  return (
    <div className={`${inter.className} min-h-screen transition-colors duration-200`} lang='en'>
      {/* Background and text colors are now handled by Tailwind's dark mode classes */}
      <div className='mt-3 bg-white dark:bg-gray-900 text-black dark:text-white'>
        <div className='mx-6'>
          <NavBar/>
          <Carousel/>
          <Generate/>
          <div className='flex items-center justify-between pb-3'>
            <div>
              <h2 className="font-bold pb-2">Gallery</h2>
            </div>
            
            <div className='flex gap-2 items-center'>
              <div className='flex items-center bg-gray-100 dark:bg-gray-800 px-1 rounded-lg text-sm'>
                <MdOutlineArticle/>
                <p className='pl-1'>Legal</p>
              </div>
              <div className='flex items-center bg-gray-100 dark:bg-gray-800 px-1 rounded-lg text-sm'>
                <MdOutlinePayment/>
                <p className='pl-1'>Pricing</p>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
}