import { Menu, Search, Tv } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ThemeToggle from '../ui/ThemeToggle';
import SearchInput from '../ui/SearchInput';
import MobileMenu from './MobileMenu';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={cn(
          `
          fixed
          top-0
          left-0
          px-4
          py-2xl
          md:px-8xl
          md:py-6
          lg:px-11xl
          lg:py-8
          z-50
          w-full
          transition-all
          duration-300`,
          scrolled ? 'bg-[#0A0D1299]/40 backdrop-blur-xl' : 'bg-transparent'
        )}
      >
        <div
          className="
            flex
            w-full
            items-center
            justify-between
          "
        >
          <div
            className="
              flex
              items-center
              gap-20
            "
          >
            <div
              className="
                    flex
                    items-center
                    gap-xs
                    
                  "
            >
              {/* Logo */}

              <Tv size={20} className="text-neutral-25 lg:size-7" fill="currentColor" />

              <Link
                to="/"
                className="
                      text-xl
                      font-primary
                      font-bold
                      tracking-tighter
                      leading-3xl
                      text-neutral-25
                      lg:font-semibold
                      lg:text-display-sm
                    "
              >
                Movie
              </Link>
            </div>

            <div
              className="
                hidden
                lg:flex
                items-center
              "
            >
              {/* Desktop */}

              <nav
                className="
                hidden
                items-center
                md:hidden
                lg:flex
                lg:gap-6xl
              "
              >
                <Link
                  to="/"
                  className="
                text-neutral-25
                transition-colors
                duration-300
                hover:text-primary-200"
                >
                  Home
                </Link>

                <Link
                  to="/favorites"
                  className="
                  text-neutral-25
                  transition-colors
                  duration-300
                  hover:text-primary-200"
                >
                  Favorites
                </Link>
              </nav>
            </div>
          </div>
          <div
            className="
              hidden
              lg:flex
              items-center
              gap-3
                "
          >
            <SearchInput />
            <ThemeToggle />
          </div>

          {/* Mobile */}

          <div
            className="
              flex
              items-center
              gap-4
              lg:hidden
            "
          >
            <button
              className="
              cursor-pointer
              hover:scale-110
              transition-all
              duration-300      
            "
            >
              <Search size={18} className="text-neutral-25" />
            </button>

            <ThemeToggle />

            <button
              className="
              cursor-pointer
              hover:scale-110
              transition-all
              duration-300
            "
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={24} className="text-neutral-25" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar;
