import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";
import { Tilt } from "react-tilt";
import {
  FaDesktop,
  FaRocket,
  FaServer,
  FaTools,
} from "react-icons/fa";

const categoryDetails = {
  Frontend: {
    icon: <FaDesktop aria-hidden="true" />,
    description: "Building interactive and reliable user interfaces.",
  },
  Backend: {
    icon: <FaServer aria-hidden="true" />,
    description: "Working with server-side tools and structured data.",
  },
  "Tools & Workflow": {
    icon: <FaTools aria-hidden="true" />,
    description: "Keeping everyday development work moving.",
  },
  Practices: {
    icon: <FaRocket aria-hidden="true" />,
    description: "Building fast, responsive and accessible interfaces.",
  },
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 20px;
  gap: 32px;
  align-items: stretch;

  @media (max-width: 960px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 24px;
  }

  @media (max-width: 600px) {
    padding: 0 14px;
    gap: 18px;
  }
`;

const Skill = styled.div`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: linear-gradient(135deg, rgba(17, 30, 43, 0.97), rgba(15, 27, 39, 0.96));
  border: 1px solid rgba(91, 236, 255, 0.4);
  box-shadow: 0 8px 32px rgba(5, 14, 24, 0.3), inset 0 1px rgba(255, 255, 255, 0.035);
  border-radius: 16px;
  padding: 20px 24px 24px;
  transition: border-color 0.45s ease, box-shadow 0.45s ease;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    width: 260px;
    height: 190px;
    right: -100px;
    bottom: -140px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(54, 232, 255, 0.32), transparent 68%);
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 260px;
    height: 150px;
    right: -115px;
    bottom: -113px;
    border: 1px solid rgba(83, 235, 255, 0.38);
    border-radius: 50%;
    pointer-events: none;
  }

  &:hover {
    border-color: rgba(107, 238, 255, 0.78);
    box-shadow: 0 12px 38px rgba(36, 163, 180, 0.2), inset 0 1px rgba(255, 255, 255, 0.06);
  }

  @media (max-width: 768px) {
    padding: 18px 20px 22px;
  }

  @media (max-width: 500px) {
    padding: 16px;
  }
`;

const SkillHeader = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 16px;
  min-height: 72px;

  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: 56px minmax(0, 1fr);
    align-items: center;
    column-gap: 12px;
    row-gap: 8px;
  }
`;

const CategoryIcon = styled.div`
  width: 72px;
  height: 72px;
  flex: 0 0 72px;
  display: grid;
  place-items: center;
  border-radius: 22px;
  color: rgb(148, 243, 255);
  font-size: 30px;
  background: linear-gradient(145deg, rgba(76, 210, 228, 0.27), rgba(53, 163, 177, 0.24));
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.08), 0 8px 24px rgba(42, 150, 164, 0.15);

  @media (max-width: 500px) {
    width: 56px;
    height: 56px;
    flex-basis: 56px;
    border-radius: 18px;
    font-size: 24px;
    grid-column: 1;
    grid-row: 1 / span 2;
  }
`;

const CategoryText = styled.div`
  min-width: 0;
  flex: 1;

  @media (max-width: 500px) {
    grid-column: 2;
    grid-row: 1;
  }
`;

const SkillTitle = styled.h3`
  margin: 0;
  font-size: 25px;
  font-weight: 600;
  line-height: 1.2;
  color: rgb(244, 254, 255);

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

const CategoryDescription = styled.p`
  margin: 7px 0 0;
  color: rgba(220, 239, 242, 0.72);
  font-size: 14px;
  line-height: 1.45;
`;

const SkillCount = styled.div`
  flex: 0 0 auto;
  border: 1px solid rgba(100, 237, 255, 0.65);
  border-radius: 999px;
  padding: 5px 11px;
  color: rgb(154, 243, 255);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  @media (max-width: 500px) {
    padding: 4px 8px;
    font-size: 11px;
    grid-column: 2;
    grid-row: 2;
    justify-self: start;
  }
`;

const SkillDivider = styled.div`
  position: relative;
  z-index: 1;
  height: 1px;
  margin: 16px 0;
  background: linear-gradient(90deg, rgba(136, 241, 255, 0.34), rgba(136, 241, 255, 0.1));
`;

const SkillList = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  min-width: 0;
`;
const SkillItem = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: rgb(239, 249, 250);
  background: rgba(33, 49, 61, 0.72);
  border: 1px solid rgba(161, 208, 214, 0.22);
  border-radius: 13px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  max-width: 100%;
  box-sizing: border-box;
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(119, 239, 255, 0.68);
    background: rgba(46, 105, 113, 0.62);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;
const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Skills = () => {
  return (
    <Container id="Skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          The tools and practices I use to build responsive web experiences.
        </Desc>

        <SkillsContainer>
          {skills.map((skill, index) => (
            <Tilt
              key={`skill-tilt-${index}`}
              style={{ height: "100%" }}
              options={{
                max: 6,
                scale: 1.01,
                speed: 600,
                perspective: 1000,
                transition: true,
                reset: true,
              }}
            >
              <Skill>
                <SkillHeader>
                  {categoryDetails[skill.title]?.icon && (
                    <CategoryIcon>{categoryDetails[skill.title].icon}</CategoryIcon>
                  )}
                  <CategoryText>
                    <SkillTitle>{skill.title}</SkillTitle>
                    <CategoryDescription>
                      {categoryDetails[skill.title]?.description}
                    </CategoryDescription>
                  </CategoryText>
                  <SkillCount>{skill.skills.length} skills</SkillCount>
                </SkillHeader>
                <SkillDivider />
                <SkillList>
                  {skill.skills.map((item, index_x) => (
                    <SkillItem key={`skill-x-${index_x}`}>
                      {item.image && (
                        <SkillImage src={item.image} alt="" />
                      )}
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            </Tilt>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
