import Navbar from "./Components/Navbar"
import Sidebar from "./Components/Sidebar"
import Content from "./Components/Content"
import SearchBar from "./Components/SearchBar"
import { useState } from "react"

let ScholarshipResults = () => {
    let [hello, isOpen] = useState(true)
   
    let toggle = () => {
        isOpen(!hello)
        console.log(hello);
    }

    return (
        <div>
        <Navbar />
        <SearchBar hello={hello} toggle={toggle} />
        <div className="flex">
          <Sidebar hello={hello} />
          <Content />
        </div>
      </div>
    )
}

export default ScholarshipResults