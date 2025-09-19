"use client";
import { MdSunny, MdDarkMode } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

   useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="text-foreground"
      >
        {theme === 'dark' ? <MdSunny size={20} /> : <MdDarkMode size={20} />}
      </button>
       
    );
};

export default ThemeToggle;


