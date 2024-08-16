import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Initiatives from "./pages/Initiatives";
import NewsUpdates from "./pages/NewsUpdates";
import Services from "./pages/Services";
import InitiativeDetail from "./pages/InitiativeDetail";
import SearchResults from "./pages/SearchResults";
import NewsDetail from "./pages/NewsDetail";
import EventDetail from "./pages/EventDetail";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="pt-16 pb-16 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/initiatives/:id" element={<InitiativeDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news" element={<NewsUpdates />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
