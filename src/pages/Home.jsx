import QuickLinks from "../components/QuickLinks";
import WelcomeMessage from "../components/WelcomeMessage";
import Initiatives from "../components/Initiatives";
import Services from "../components/Services";
import Hero from "../components/Hero";
import Map from "../components/Map";
import NewsAndEvents from "../components/NewsAndEvents";
import NewsTicker from "../components/NewsTicker";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import ResourcesSection from "../components/ResourcesSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <NewsTicker></NewsTicker>
      <QuickLinks></QuickLinks>
      <WelcomeMessage></WelcomeMessage>
      <Initiatives></Initiatives>
      <Services/>
      <div className="container mx-auto py-12 px-4">
      {/* Other content */}
      <h2 className="text-3xl font-semibold text-red-600 mb-4">Our Offices & Initiatives</h2>
      <Map />
    </div>
    <div className="container mx-auto py-12 px-4">
      <NewsAndEvents />
      <AboutUs/>
      <ResourcesSection/>
      <Contact/>
    </div>
    </div>
  );
}

export default Home;
