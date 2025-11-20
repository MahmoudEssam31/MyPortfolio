import React from 'react'
import CustomContainerMain from '../../../componant/customContainter/customContainerMain/CustomContainerMain';
import SkillsCard from '../skillsCard/SkillsCard';
import { SkillsCardData } from '../../../componant/Data/Data';

export default function SkillPageComponent() {
        const skillCardData = SkillsCardData;

  return (
      <div className="bg-gray-300 lg:w-[72%] w-full dark:bg-amber-100">
          <CustomContainerMain>
              <div
                  className="skill-container grid gap-5 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 lg:pt-[4em] md:pt-[3em]
                py-[2em]  ">
                  {skillCardData.map((item) => (
                      <SkillsCard key={item.id} id={item.id} presentage={item.presentage} title={item.title} icon={item.icon} />
                  ))}
              </div>
          </CustomContainerMain>
      </div>
  );
}
