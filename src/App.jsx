import './App.css';
import styles from './style';


import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer } from './components'

function App() {
  return (
    <div className="bg-primary w-full">
      <Navbar />
      <Hero />
      <Stats />
      <Business />
      <Billing />
      <CardDeal />
      <Testimonials />
      <Clients />
      <CTA />
      <Footer />



    </div>
  );
}

export default App;
