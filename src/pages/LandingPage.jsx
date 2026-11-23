import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import HowItWorks from '../components/HowItWorks';
import WasteTypes from '../components/WasteTypes';
import ScheduleLocation from '../components/ScheduleLocation';
import RegistrationForm from '../components/RegistrationForm';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <About />
        <HowItWorks />
        <WasteTypes />
        <ScheduleLocation />
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
}