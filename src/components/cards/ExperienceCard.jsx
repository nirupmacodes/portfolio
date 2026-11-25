import React from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import CompanyLogo from "./CompanyLogo";

const Card = styled.article`
  position: relative;
  padding: 20px;
  border: 1px solid rgba(91, 219, 236, 0.4);
  border-radius: 17px;
  background: linear-gradient(145deg, rgba(23, 45, 61, 0.93), rgba(16, 27, 38, 0.94));
  box-shadow: 0 10px 28px rgba(4, 10, 17, 0.24), inset 0 1px rgba(255, 255, 255, 0.04);
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(112, 238, 255, 0.72);
    box-shadow: 0 14px 34px rgba(43, 150, 164, 0.2);
  }
`;

const Heading = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const HeadingText = styled.div`
  flex: 1;
  min-width: 0;
`;

const Role = styled.h3`
  margin: 0;
  color: rgb(244, 254, 255);
  font-size: 18px;
  line-height: 1.35;
`;

const Company = styled.div`
  margin-top: 3px;
  color: rgba(215, 238, 241, 0.79);
  font-size: 14px;
`;

const CurrentBadge = styled.span`
  display: inline-flex;
  align-items: center;
  margin-top: 8px;
  padding: 3px 9px;
  border: 1px solid rgba(34, 197, 94, 0.55);
  border-radius: 999px;
  color: #22c55e;
  background: rgba(34, 197, 94, 0.12);
  font-size: 11px;
  font-weight: 600;
`;

const MobileDate = styled.div`
  display: none;
  margin-top: 12px;
  color: rgba(218, 243, 246, 0.83);
  font-size: 12px;

  @media (max-width: 760px) {
    display: block;
  }
`;

const Highlights = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 15px 0 14px;
  padding: 0;
  list-style: none;
`;

const Highlight = styled.li`
  position: relative;
  padding-left: 17px;
  color: rgba(231, 245, 247, 0.87);
  font-size: 13px;
  line-height: 1.45;

  &::before {
    content: "";
    position: absolute;
    top: 7px;
    left: 0;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: rgb(114, 229, 244);
    box-shadow: 0 0 10px rgba(114, 229, 244, 0.36);
  }
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`;

const Skill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 9px;
  border: 1px solid rgba(109, 204, 217, 0.42);
  border-radius: 999px;
  color: rgb(213, 241, 245);
  background: rgba(67, 146, 156, 0.2);
  font-size: 11px;
  white-space: nowrap;
`;

const MoreSkills = styled(Skill)`
  color: rgb(183, 247, 255);
`;

const ViewButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 14px;
  padding: 13px 0 0;
  border: 0;
  border-top: 1px solid rgba(124, 219, 232, 0.24);
  color: rgb(122, 239, 255);
  background: transparent;
  font: inherit;
  font-size: 13px;
  font-weight: 700;
  text-align: left;
  cursor: pointer;

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }

  &:focus-visible {
    outline: 2px solid rgb(165, 244, 255);
    outline-offset: 4px;
    border-radius: 4px;
  }
`;

const ExperienceCard = ({ experience, onView }) => {
  const isCurrent = /present/i.test(experience.date || "");
  const skills = experience.skills || [];
  const visibleSkills = skills.slice(0, 2);
  const highlights = (experience.desc || []).slice(0, 2);

  return (
    <Card>
      <Heading>
        <CompanyLogo experience={experience} size={48} />
        <HeadingText>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          {isCurrent && <CurrentBadge>Current Role</CurrentBadge>}
        </HeadingText>
      </Heading>
      <MobileDate>{experience.date}</MobileDate>
      <Highlights>
        {highlights.map((point, index) => <Highlight key={index}>{point}</Highlight>)}
      </Highlights>
      <Skills>
        {visibleSkills.map((skill) => <Skill key={skill}>{skill}</Skill>)}
        {skills.length > visibleSkills.length && (
          <MoreSkills>+{skills.length - visibleSkills.length}</MoreSkills>
        )}
      </Skills>
      <ViewButton type="button" onClick={() => onView(experience)}>
        View full experience <FaArrowRight aria-hidden="true" />
      </ViewButton>
    </Card>
  );
};

export default ExperienceCard;
