import About from './components/About';
import Collections from './components/Collections';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Hero from './components/Hero';

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Hero />
      <About />
      <Collections />
      <ContactForm />
      <Footer />
    </div>
  );
}
