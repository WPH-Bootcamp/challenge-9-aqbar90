import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

const SearchInput = () => {
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const keyword = search.trim();

    if (!keyword) return;

    navigate(`/search?q=${encodeURIComponent(keyword)}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="
          flex
          items-center
          gap-md
          rounded-2xl
          border
          border-neutral-800
          bg-[#0A0D1299]/40
          px-xl
          py-md
          backdrop-blur-md
        "
      >
        <button type="submit" className="shrink-0">
          <Search
            size={18}
            className="
              text-neutral-400
              lg:size-3xl
            "
          />
        </button>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Movie"
          className="
            w-full
            text-sm
            text-neutral-25
            outline-none
            placeholder:text-neutral-400
            bg-transparent
            lg:text-md
            lg:font-regular
            lg:font-primary
            lg:leading-md
          "
        />
      </div>
    </form>
  );
};

export default SearchInput;
