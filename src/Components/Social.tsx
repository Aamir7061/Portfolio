import { socialLinks } from "./User"
const Social=()=>{
    
    const socialIcons=socialLinks.map((socialLink,index)=>{
        return <a key={index} href={`${socialLink.link}`} target="_blank" className="font-mono text-lg hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out">
            <div data-aos="fade-down-left" data-aos-duration="1000">
                <socialLink.icon className="-rotate-90" size={30}/>
            </div>
        </a>
    })
    return <div className="flex text-textColor md-mx:hidden items-center gap-10 fixed bottom-32 -left-40 rotate-90">
        {socialIcons}
    <hr className="border-[3px] w-40 rounded-full bg-textXolor border-textColor "/>
</div>
}
export default Social;
