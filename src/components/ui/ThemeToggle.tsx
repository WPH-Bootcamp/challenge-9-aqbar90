import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="
        h-5
        w-5
        items-center
        justify-center
        transition-all
        duration-300
        hover:scale-110
        cursor-pointer
        
      "
    >
      {theme === 'dark' ? (
        <Sun size={22} fill="#FACC15" color="#FACC15" strokeWidth={2} />
      ) : (
        <Moon size={22} fill="#A78BFA" color="#A78BFA" strokeWidth={2} />
      )}
    </button>
  );
};

export default ThemeToggle;
