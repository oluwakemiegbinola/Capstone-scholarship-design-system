import Navbar from "../Components4/Navbar";
import Sidebar from "../Components4/Sidebar";
import Content from "../Components4/Content";
import SearchBar from "../Components4/SearchBar";
import { useState } from "react";

let ScholarshipSecondportal = () => {
  let [hello, isOpen] = useState(true);

  let toggle = () => {
    isOpen(!hello);
    console.log(hello);
  };

  return (
    <div>
      <Navbar />
      <SearchBar hello={hello} toggle={toggle} />
      <div className="flex">
        <Sidebar hello={hello} />
        <Content />
      </div>
    </div>
  );
};

export default ScholarshipSecondportal;
