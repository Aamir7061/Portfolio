import "./EducationTree.css";
import { EducationData } from "./User";
import { FaUniversity } from 'react-icons/fa';

const Education= () => {
  return (
    <div className="tree" id="Education">
      <h1 className="text-4xl sm:text-3xl xs:text-2xl mb-10 font-bold text-center text-white">
        <span className="text-primaryColor">05.&nbsp;</span>Education
      </h1>
      <div className="flex items-center justify-center mb-2">
        <FaUniversity size={24} color="#64FFDA" />
      </div>
      <div className="tree-container md-mx:px-6 ">
        {EducationData.map((item, index) => (
          <div 
            key={index}
            className={`tree-node ${index % 2 === 0 ? "left" : "right"}`} data-aos="flip-up" data-aos-duration="1000"
          >
            <h2 className="stream font-bold text-xl xsm-mx:lg ">{item.stream}</h2>
            <div className={`flex gap-2 items-center bs-mx:py-0 bs-mx:px-1.5 bs-mx:gap-1 mb-1 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
              <img className="w-[48px] bs-mx:w-[36px] xsm-mx:hidden !p-1" src={item.logo} alt={`${item.institution} logo`} />
              <div className="institution"><h1>{item.institution}</h1></div>
            </div>
            <div className="content">
              <h3>{item.degree}</h3>
              <p className="year">{item.year}</p>
            </div>
          </div>
        ))}
        <div className="vertical-line"></div>
      </div>
      <div className="flex items-center justify-center">
        <FaUniversity size={24} color="#64FFDA" />
      </div>
    </div>
  );
};

export default Education;

