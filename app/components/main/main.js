import { useState } from "react";
import Section1 from "../section1/section1";
import Section2 from "../section2/section2";
import Section3 from "../section3/section3";
import Section4 from "../section4/section4";
import "./main.css";
export default function main() {
    const [selectedOption, setSelectedOption] = useState("");
    const [isFirstLoad, setIsFirstLoad] = useState("checked");
    const handleChange = (event) => {
        setIsFirstLoad("")
        setSelectedOption(event.target.value);
    }
  
  return (
    <div>
      <input type="radio" name="item" onChange={handleChange} defaultChecked={isFirstLoad} value="checked" id="section1" />
      <input type="radio" name="item" onChange={handleChange} value="checked" id="section2" />
      <input type="radio" name="item" onChange={handleChange} value="checked" id="section3" />
      <input type="radio" name="item" onChange={handleChange} value="checked" id="section4" />
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      {/* <!-- Fix the white space when scrolling two sections at the time--> */}
      <div className="cover"></div>
    </div>
  );
}
