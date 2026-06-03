import { Search } from 'lucide-react';

const SearchInput = () => {
  return (
    <div
      className="
        flex
        items-center
        rounded-2xl
        border
        border-neutral-800
        bg-[#0A0D1299]/40
        px-xl
        py-md
        backdrop-blur-md
        gap-md
        
      "
    >
      <Search size={18} className="text-neutral-400 lg:size-3xl" />
      <input
        type="text"
        placeholder="Search Movie"
        className="
          ml-2.75
          text-sm
          text-neutral-500
          outline-none
          placeholder:text-neutral-400
          lg:text-md
          lg:font-regular
          lg:font-primary
          lg:leading-md
        "
      />
    </div>
  );
};

export default SearchInput;
