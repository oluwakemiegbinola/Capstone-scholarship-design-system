import React from "react";
import Header from "../component3/Header";
import Banner from "../component3/Banner";
import NavigationBar from "../component3/NavigationBar"; 
import ScholarshipComponent from "../component3/ScholarshipComponent"; 
import ScholarshipSection from "../component3/ScholarshipSection"; 
import Eligibility from "../component3/Eligibility";
import ScholarshipRequirements from "../component3/ScholarshipRequirements";
import HowToApply from "../component3/HowToApply";
import Banner2 from "../component3/Banner2";
import FAQ from "../component3/FAQS";
import Foot from "../component3/Footer";

const Ghanapage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Banner />
      <NavigationBar /> 
      <ScholarshipComponent />
      <ScholarshipSection />
      <Eligibility />
      <ScholarshipRequirements />
      <HowToApply />
      <Banner2 />
      <FAQ />
      <Foot />
    </div>
  );
};

export default Ghanapage;