import { Footer } from '@/features/footer';
import { Header } from '@/features/header';
import { Main } from '@/features/main';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center bg-background">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
