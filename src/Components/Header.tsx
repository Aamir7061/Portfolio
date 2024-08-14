import {IconHexagon} from "@tabler/icons-react";
import SideBar from './SideBar';
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { em } from "@mantine/core";
const links=["About","Projects","Skills","Experience","Education","Contact"];

const navLinks=(col:Boolean, clicked:any)=>{
    const handleClick=()=>{
        if(clicked)clicked();
    }
    return links.map((link, index)=>{
        return  <a key={index} onClick={handleClick} className={`${col?'flex flex-col items-center':''} text-textColor text-lg font-mono hover:text-primaryColor`} href={`#${link}`}><span className="text-primaryColor">0{index+1}. </span>{link}</a>
    })
}

const Header=()=>{
    const isMobile = useMediaQuery(`(max-width: ${em(476)})`);
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [shadow, setShadow] = useState(false);
    const controlNavbar = () => {
        if(window.scrollY>lastScrollY && window.scrollY>70)setShow(false);
        else setShow(true);
        if(window.scrollY>70)setShadow(true);
        else setShadow(false);
        setLastScrollY(window.scrollY);
    }
    useEffect(()=>{
        window.addEventListener('scroll', controlNavbar);
        return ()=>window.removeEventListener('scroll', controlNavbar);
    })
return (
    <nav className={`flex ${show?"translate-y-0":"-translate-y-28"} ${shadow?"shadow-[0px_10px_30px_-10px_#020c1b]":""} transition-transform duration-500 ease-in-out fixed w-full z-10 bg-bgColor h-28  px-10  justify-between items-center xs-mx:px-4 xs-mx:h-20 `}>
        <div className="relative flex h-full animate-[ping_1.5s_ease-in-out_1_3.8s] items-center">
        <IconHexagon className="absolute -z-10 " color="#64FFDA" size={isMobile?45:60} stroke={1.25}/>
        <div className="absolute text-primaryColor xs-mx:px-3 xs-mx:text-lg bs-mx:px- px-4 bs-mx:text-xl font-mont font-semibold text-2xl -z-10">A3</div>
        </div>
        <div className="bs:flex gap-8 hidden">
            {navLinks(false, null)}
        </div>
        <SideBar/>
    </nav>
);
}
export default Header;
export {navLinks};
