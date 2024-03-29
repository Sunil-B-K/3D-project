import React from 'react';
import Level from './Levels';






const Skill = () => {
    return (
        <div className="h-full page-shadow bg-white px-10">
          <div>
            {/* heading */}
            <div>
              <div className="relative ">
                <div className="text-center text-6xl xl:text-8xl font-bold text-black/5 ">
                  SKILLS
                </div>
                <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
                  Skills
                </h1>
              </div>
            </div>

            <div className="space-y-10">
              <Level skillName="HTML" percentage={"90%"} />
              <Level skillName="CSS" percentage="95%" />
              <Level skillName="Tailwind" percentage="80%" />
              <Level skillName="JAVASCRIPT" percentage="95%" />
              <Level skillName="REACTJS" percentage="80%" />
            </div>
          </div>
        </div>
      );
}

export default Skill
