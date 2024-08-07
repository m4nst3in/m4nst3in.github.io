import { Icon } from "@iconify/react";
import { useState, useEffect } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";
import SlideAnimation from "../components/slideInAnimation";
import skillsData from "../data/skills.json";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};
const isPortuguese = navigator.language.startsWith('pt');

export default function Skills() {
  const isMobile = useIsMobile();
  return (
    <section id="skills">
    <header className="mx-6 pt-6 md:mx-10">
      <h1 className="text-green-500 font-bold text-3xl md:text-5xl">
        {isPortuguese ? 'Habilidades' : 'Skills'}
      </h1>
      <div className="h-1 w-14 rounded-full bg-gradient-to-r from-white to-sky-500 md:w-20 md:h-2"></div>
      <p className="text-white font-[400] text-md mt-3">
        {isPortuguese ? 'Tecnologias e ferramentas que utilizo no meu dia a dia como dev' : 'Technologies and tools I use as a developer'}
      </p>
    </header>

    <div className="flex flex-wrap justify-start mx-6 md:mx-10 mt-5">
      {skillsData.map((skill, index) => (
        <SlideAnimation key={index}>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
              <div className={`flex flex-col items-center justify-center py-4 px-${isMobile ? '3' : '0'} rounded-xl mx-1.5 my-1.5 md:my-2 md:mx-2 text-white`}>
                  <Icon
                    className="h-10 w-10 md:h-16 md:w-16"
                    icon={skill.icon}
                  />
                  <div className="text-yellow-400 text-center mt-1 animate-pulse">{skill.proficiency}</div>
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-gray-800 border-none text-white">
                <p>{skill.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </SlideAnimation>
      ))}
    </div>
  </section>
  );
}
