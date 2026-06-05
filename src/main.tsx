import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './index.css';
import App from './App.tsx';
import { ThemeProvider } from '@/context/ThemeProvider.tsx';
import { Toaster } from 'sonner';

// TODO: Configure QueryClient with appropriate default options
// Reference: https://tanstack.com/query/latest/docs/framework/react/reference/QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Cache dianggap fresh selama 5 menit
      staleTime: 1000 * 60 * 5,

      // Simpan cache selama 10 menit
      gcTime: 1000 * 60 * 10,

      // Retry sekali jika request gagal
      retry: 1,

      // Tidak refetch saat user kembali ke tab
      refetchOnWindowFocus: false,

      // Tidak refetch saat reconnect internet
      refetchOnReconnect: true,

      // Refetch saat component mount jika data sudah stale
      refetchOnMount: true,
    },

    mutations: {
      retry: 1,
    },
  },
});
// TODO: Configure default query options
// Examples: refetchOnWindowFocus, retry, staleTime, etc.

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
      <Toaster position="top-center" offset="80px" />

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
