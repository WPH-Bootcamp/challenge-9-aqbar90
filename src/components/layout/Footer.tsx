import { Tv } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer
      className="
        border-t
        border-neutral-800
        bg-background
      "
    >
      <div
        className="
          px-xl
          py-3xl
          gap-md
          md:px-8
          lg:px-11xl
          lg:py-8
        "
      >
        <div
          className="
            mx-auto
            max-w-width
            flex
            flex-col
            gap-1.75
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          {/* Logo */}
          <Link
            to="/"
            className="
              flex
              items-center
              gap-xs
            "
          >
            <Tv size={22} fill="currentColor" className="text-white" />

            <span
              className="
                font-primary
                text-xl
                font-semibold
                leading-display-sm
                text-white
              "
            >
              Movie
            </span>
          </Link>

          {/* Copyright */}
          <p
            className="
              text-xs
              font-regular
              font-primary
              leading-xs
              text-neutral-500
              lg:text-xs
            "
          >
            Copyright ©2026 Movie Explorer
          </p>
        </div>
      </div>
    </footer>
  );
}
