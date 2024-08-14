import { IconHexagon } from "@tabler/icons-react";
import IconCloud from "./magicui/icon-cloud";
import { slugs } from "./User";

export function Loader() {
  return (
    <div className="relative flex h-full w-full animate-[ping_1.5s_ease-in-out_1_3.8s] items-center justify-center px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
      <IconHexagon className="absolute -z-10 animate-[spin_5s_linear_infinite]" color="#64FFDA" size={120} stroke={1}/>
      <div className="absolute text-primaryColor items-center font-mont font-semibold text-5xl -z-10">A3</div>
    </div>
  );
}
