import { Toaster as Sonner } from 'sonner';
import type { ToasterProps } from 'sonner';

export function Toaster(props: ToasterProps) {
  return (
    <Sonner
      position="top-center"
      expand={false}
      richColors={false}
      closeButton={false}
      {...props}
    />
  );
}
