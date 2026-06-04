import { Button } from '@/components/ui/button';

interface Props {
  onClick: () => void;
}

export default function LoadMoreButton({ onClick }: Props) {
  return (
    <div
      className="
        mt-8
        flex
        justify-center
      "
    >
      <Button variant="movieOutline" size="heroOutline" onClick={onClick}>
        Load More
      </Button>
    </div>
  );
}
