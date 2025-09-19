"use client"
import { useState } from 'react';
import Logo from '@/app/components/ui/Logo'
import { 
    MdKeyboardArrowDown,
    MdHome, 
    MdOutlineImage, 
    MdVideocam, 
    MdAutoFixHigh, 
    MdOutlineBrush, 
    MdRocket, 
    MdFolder, 
    MdOutlineCollections, 
    MdOutlineHeadsetMic,
    MdNotifications,
    MdOutlineClose,
    MdOutlineMenu
} from "react-icons/md";
import Themetoggle from '../theme-toggle';


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex items-center justify-between text-sm'>
        <div className='flex items-center'>
            <Logo/>
            <div className='flex items-center gap-2'>
            <div className='size-8 bg-linear-140 from-pink-300 via-blue-300 to-blue-100 rounded-full'></div>
            <p>Afekhaithefather</p>
            <MdKeyboardArrowDown/>
        </div>
        </div>

        <button className='lg:hidden' onClick={()=> setIsOpen(prev => !prev)}>
            <MdOutlineMenu className='size-9'/>
        </button>
       
        <ul className='lg:flex items-center gap-5 bg-secbackground rounded-lg p-1.5 hidden'>
            <li className='bg-white rounded-lg px-2.5 py-1'> <MdHome className='size-7 '/> </li>
            <li> <MdOutlineImage className='size-7 text-foreground'/> </li>
            <li> <MdVideocam className='size-7 text-foreground'/> </li>
            <li> <MdAutoFixHigh className='size-7 text-foreground'/> </li>
            <li> <MdOutlineBrush className='size-7 text-foreground'/> </li>
            <li> <MdRocket className='size-7 text-foreground'/> </li>
            <li> <MdFolder className='size-7 text-foreground'/> </li>
        </ul>
        <div className='lg:flex items-center gap-3 hidden'>
            <div className='flex items-center gap-1 bg-secbackground text-foreground p-1.5 rounded-lg'>
                <MdOutlineCollections/>
                <p>Gallery</p>
            </div>
            <div className='flex items-center gap-1 bg-secbackground text-foreground p-1.5 rounded-lg'>
                <MdOutlineHeadsetMic/>
                <p>Support</p>
            </div>
            <MdNotifications className='text-foreground'/>
            <Themetoggle/>
            <div className='size-8 bg-linear-140 from-pink-300 via-blue-300 to-blue-100 rounded-full'></div>
        </div>

        {/* Mobile Navigation */} 
        <div
            className={`fixed top-0 left-0 h-screen w-full bg-background text-foreground z-50 lg:hidden text-base p-3 rounded-t-2xl transform transition-transform duration-500 ${
                isOpen ? "translate-y-0" : "translate-y-full"
            }`}
            >
        <div className='flex items-center justify-between'>
            <Logo/>
            <button onClick={() => setIsOpen((prev) => !prev)}>
                <MdOutlineClose className='size-12'/>
            </button>
            
        </div>
        <ul className="flex flex-col gap-4 mt-9">
            <li className="flex items-center gap-3">
            <MdHome className="size-9" /> <p>Home</p>
            </li>
            <li className="flex items-center gap-3">
            <MdOutlineImage className="size-9" /> <p>Picture</p>
            </li>
            <li className="flex items-center gap-3">
            <MdVideocam className="size-9" /> <p>Video</p>
            </li>
            <li className="flex items-center gap-3">
            <MdAutoFixHigh className="size-9" /> <p>Edit</p>
            </li>
            <li className="flex items-center gap-3">
            <MdOutlineBrush className="size-9" /> <p>Brush</p>
            </li>
            <li className="flex items-center gap-3">
            <MdRocket className="size-9" /> <p>Rocket</p>
            </li>
            <li className="flex items-center gap-3">
            <MdFolder className="size-9" /> <p>Folder</p>
            </li>
            <li className="flex items-center gap-3">
            <MdOutlineCollections className="size-9" /> <p>Gallery</p>
            </li>
            <li className="flex items-center gap-3">
            <MdOutlineHeadsetMic className="size-9"/> <p>Support</p>
            </li>
            <li className="flex items-center gap-3">
            <MdNotifications className="size-9" /> <p>Notifications</p>
            </li>
            <li className="flex self-center mt-6 gap-3">
            <Themetoggle/>
            </li>
        </ul>
        </div>
    </div>
    )}

    
export default NavBar