import { ArrowLeft, Search } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchMobile() {
  const [query, setQuery] = useState('');

  const navigate = useNavigate();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!query.trim()) return;

    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div
      className="
        min-h-screen
        bg-background
        px-4
        pt-4
      "
    >
      <form
        onSubmit={handleSubmit}
        className="
          flex
          items-center
          gap-3
        "
      >
        <button type="button" onClick={() => navigate(-1)}>
          <ArrowLeft
            className="
              h-5
              w-5
              text-neutral-25
              cursor-pointer
            "
          />
        </button>

        <div
          className="
            flex-1
            flex
            items-center
            gap-2
            rounded-2xl
            border
            border-neutral-800
            bg-[#0A0D1299]/40
            px-4
            py-3
          "
        >
          <Search
            className="
              h-4
              w-4
              text-neutral-400
            "
          />

          <input
            ref={inputRef}
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Movie"
            className="
              flex-1
              bg-transparent
              outline-none
              text-neutral-25
            "
          />
        </div>
      </form>
    </div>
  );
}
