import { SkillInfo } from "./User";
import SkillCard from "./SkillCard";
const Skills=()=>{
    return <div className="px-16 mx-20 md-mx:mx-0 xs-mx:px-5 xs-mx:mx-0 my-10 font-mono mt-20 md-mx:px-8" id="Skills">
            <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl mb-10 font-bold mt-20 text-center text-white"><span className="text-primaryColor">03.&nbsp;</span>Skills</h1>
            <div className="flex flex-wrap justify-around  md-mx:justify-between sm-mx:justify-center gap-4 md-mx:gap-2">
            {
                SkillInfo.map((skill:any, index:number)=><SkillCard key={index} title={skill.title} skills={skill.skills} />)
            }
            </div>
        </div>
}
export default Skills;