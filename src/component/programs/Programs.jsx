import "./Programs.css";
import {
  program_1,
  program_2,
  program_3,
  program_icon_1,
  program_icon_2,
  program_icon_3,
} from "../../assets";
// adding assets from index.js
const programData = [
  { image: program_1, icon: program_icon_1, title: "Graduation Degree" },
  { image: program_2, icon: program_icon_2, title: "Master Degree" },
  { image: program_3, icon: program_icon_3, title: "Post Graduation" },
];
const Programs = () => {
  return (
    <div className="programs">
      {/* add map and get data from Json */}
      {programData.map((program, index) => (
        <div className="program" key={index}>
          <img src={program.image} alt="" />
          <div className="caption">
            <img src={program.icon} alt="" />
            <p>{program.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Programs;
