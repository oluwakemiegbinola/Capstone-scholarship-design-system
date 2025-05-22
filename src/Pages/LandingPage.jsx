import { useState, useCallback } from "react";
import Header from "../Component/Header";
import Hero from "../Component/Hero";
import Sponsors from "../Component/Sponsors";
import SlideSection from "../Component/SlideSection";
import SectionB from "../Component/SectionB";
import SectionC from "../Component/SectionC";
import SectionD from "../Component/SectionD";
import SectionE from "../Component/SectionE";
import SectionF from "../Component/SectionF";
import SectionG from "../Component/SectionG";
import Footer from "../Component/Footer";

const LandingPage = () => {
  const [selectedCategories, setSelectedCategories] = useState([]); // Store multiple categories

  // Memoize the setSelectedCategories function to prevent unnecessary re-renders
  const handleSetSelectedCategories = useCallback((categories) => {
    setSelectedCategories(categories);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header
        setSelectedCategories={handleSetSelectedCategories}
        selectedCategories={selectedCategories}
      />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero selectedCategories={selectedCategories} />
        <Sponsors />
        <SlideSection />
        <SectionB />
        <SectionC />
        <SectionD />
        <SectionE />
        <SectionF />
        <SectionG />
        <Footer />
      </main>
    </div>
  );
};

export default LandingPage;