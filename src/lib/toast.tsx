import { Check } from 'lucide-react';
import { toast } from 'sonner';

export function showFavoriteToast(message: string) {
  toast.custom(() => (
    <div
      className="
        flex
        items-center
        justify-center
        gap-2
        h-13
        w-132.75
        max-w-[calc(100vw-24px)]
        rounded-2xl
        border
        border-white/10
        bg-white/10
        backdrop-blur-2xl
        shadow-lg
      "
    >
      <div
        className="
          flex
          h-5
          w-5
          items-center
          justify-center
          rounded-full
          bg-white
        "
      >
        <Check
          className="
            h-3
            w-3
            text-black
          "
        />
      </div>

      <span
        className="
          text-sm
          font-medium
          text-white
        "
      >
        {message}
      </span>
    </div>
  ));
}
