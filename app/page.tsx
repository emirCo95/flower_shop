import About from './components/About';
import Hero from './components/Hero';

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Hero />
      <About />
    </div>
  );
}