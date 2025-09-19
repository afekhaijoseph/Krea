"use client";
import { MdSunny, MdDarkMode } from 'react-icons/md';
import { useTheme } from "next-themes";
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Ensure component is mounted to avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button 
            onClick={() => {
                setTheme(theme === 'light' ? 'dark' : 'light');
            }}
            className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
        >
            <MdSunny 
                className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 absolute" 
            />
            <MdDarkMode 
                className="h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" 
            />
        </button>
    );
};

export default ThemeToggle;