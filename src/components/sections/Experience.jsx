import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaCode,
  FaInfoCircle,
  FaLayerGroup,
  FaMapMarkerAlt,
  FaTimes,
} from "react-icons/fa";
import { experiences } from "../../data/constants";
import CompanyLogo from "../cards/CompanyLogo";
import ExperienceCard from "../cards/ExperienceCard";

const Container = styled.section`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  padding: 0 24px 24px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1120px;
  gap: 12px;
`;

const SectionHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
`;

const HeadingIcon = styled.div`
  width: 58px;
  height: 58px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(89, 222, 240, 0.58);
  border-radius: 17px;
  color: rgb(173, 245, 255);
  background: linear-gradient(145deg, rgba(67, 184, 200, 0.3), rgba(44, 116, 125, 0.25));
  box-shadow: 0 0 25px rgba(66, 198, 216, 0.13);
  font-size: 23px;
`;

const HeadingText = styled.div``;

const Title = styled.h2`
  margin: 0;
  color: rgb(241, 253, 255);
  font-size: 46px;
  line-height: 1.15;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 34px;
  }
`;

const Desc = styled.p`
  margin: 2px 0 24px;
  color: rgba(216, 236, 239, 0.8);
  font-size: 16px;
  line-height: 1.5;

  @media (max-width: 600px) {
    font-size: 14px;
    text-align: center;
  }
`;

const Timeline = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 26px;

  &::before {
    content: "";
    position: absolute;
    top: 24px;
    bottom: 24px;
    left: 50%;
    width: 2px;
    border-radius: 2px;
    background: linear-gradient(180deg, rgb(223, 251, 255), rgb(105, 228, 244) 48%, rgb(51, 159, 173));
    box-shadow: 0 0 12px rgba(125, 240, 255, 0.42);
    transform: translateX(-50%);
  }

  @media (max-width: 760px) {
    gap: 20px;

    &::before {
      left: 19px;
      transform: none;
    }
  }
`;

const TimelineRow = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 44px minmax(0, 1fr);
  align-items: center;
  width: 100%;
  min-height: 120px;

  @media (max-width: 760px) {
    grid-template-columns: 38px minmax(0, 1fr);
    column-gap: 12px;
    min-height: 0;
  }
`;

const CardSlot = styled.div`
  min-width: 0;
  grid-column: ${({ $side }) => ($side === "left" ? 1 : 3)};
  grid-row: 1;
  padding: ${({ $side }) => ($side === "left" ? "0 24px 0 0" : "0 0 0 24px")};

  @media (max-width: 760px) {
    grid-column: 2;
    padding: 0;
  }
`;

const NodeSlot = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  grid-column: 2;
  grid-row: 1;

  @media (max-width: 760px) {
    grid-column: 1;
  }
`;

const DateSlot = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ $side }) => ($side === "left" ? "flex-start" : "flex-end")};
  grid-column: ${({ $side }) => ($side === "left" ? 3 : 1)};
  grid-row: 1;
  padding: 0 18px;
  color: rgb(233, 246, 248);
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;

  @media (max-width: 760px) {
    display: none;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 3vw;
  background: rgba(4, 10, 16, 0.76);
  backdrop-filter: blur(10px);
  animation: fade-in 0.18s ease-out;

  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @media (max-width: 760px) {
    padding: 12px;
  }
`;

const DetailPanel = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: min(760px, calc(100vw - 48px));
  max-height: calc(100vh - 48px);
  overflow: auto;
  border: 1px solid rgba(105, 237, 255, 0.78);
  border-radius: 24px;
  color: rgb(239, 253, 255);
  background: linear-gradient(145deg, rgba(17, 28, 39, 0.99), rgba(13, 22, 31, 0.99));
  box-shadow: 0 28px 90px rgba(0, 0, 0, 0.5), 0 0 36px rgba(69, 201, 219, 0.19);
  animation: panel-in 0.22s ease-out;

  @keyframes panel-in {
    from { opacity: 0; transform: translateX(14px); }
    to { opacity: 1; transform: translateX(0); }
  }

  @media (max-width: 760px) {
    width: 100%;
    max-height: 100%;
    border-radius: 19px;
  }
`;

const PanelHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 18px;
  min-height: 150px;
  padding: 30px 64px 26px 30px;
  overflow: hidden;
  border-bottom: 1px solid rgba(163, 228, 237, 0.12);
  background:
    radial-gradient(ellipse at 90% 110%, rgba(62, 202, 220, 0.28), transparent 50%),
    linear-gradient(135deg, rgba(31, 57, 76, 0.6), rgba(17, 28, 39, 0.4));

  &::after {
    content: "";
    position: absolute;
    right: -50px;
    bottom: -70px;
    width: 230px;
    height: 115px;
    border: 1px solid rgba(91, 236, 255, 0.36);
    border-radius: 50%;
    pointer-events: none;
  }

  @media (max-width: 520px) {
    min-height: 120px;
    padding: 24px 52px 20px 20px;
    gap: 12px;
  }
`;

const PanelHeadingText = styled.div`
  z-index: 1;
  min-width: 0;
`;

const CurrentRoleBadge = styled.span`
  display: inline-flex;
  margin-bottom: 8px;
  padding: 4px 10px;
  border: 1px solid rgba(34, 197, 94, 0.53);
  border-radius: 999px;
  color: #22c55e;
  background: rgba(34, 197, 94, 0.13);
  font-size: 11px;
  font-weight: 600;
`;

const PanelTitle = styled.h3`
  margin: 0;
  color: #fff;
  font-size: 25px;
  line-height: 1.25;

  @media (max-width: 520px) {
    font-size: 19px;
  }
`;

const PanelCompany = styled.div`
  margin-top: 4px;
  color: rgb(183, 232, 239);
  font-size: 15px;
`;

const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 18px;
  margin-top: 12px;
  color: rgba(232, 248, 250, 0.84);
  font-size: 13px;

  span {
    display: inline-flex;
    align-items: center;
    gap: 7px;
  }

  svg {
    color: rgb(166, 245, 255);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  z-index: 2;
  top: 19px;
  right: 19px;
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border: 0;
  border-radius: 11px;
  color: rgb(234, 253, 255);
  background: rgba(255, 255, 255, 0.04);
  font-size: 19px;
  cursor: pointer;

  &:hover {
    background: rgba(99, 218, 234, 0.24);
  }

  &:focus-visible {
    outline: 2px solid rgb(165, 244, 255);
    outline-offset: 2px;
  }
`;

const PanelBody = styled.div`
  padding: 24px 30px 26px;

  @media (max-width: 520px) {
    padding: 20px;
  }
`;

const DetailSection = styled.section`
  & + & {
    margin-top: 18px;
    padding-top: 18px;
    border-top: 1px solid rgba(145, 210, 219, 0.18);
  }
`;

const DetailHeading = styled.h4`
  display: flex;
  align-items: center;
  gap: 11px;
  margin: 0 0 12px;
  color: rgb(237, 253, 255);
  font-size: 17px;

  svg {
    color: rgb(121, 239, 255);
    font-size: 17px;
  }
`;

const Overview = styled.p`
  margin: 0;
  color: rgba(232, 246, 248, 0.88);
  font-size: 14px;
  line-height: 1.65;
`;

const Contributions = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin: 0;
  padding: 0 0 0 19px;
  color: rgba(232, 246, 248, 0.88);
  font-size: 14px;
  line-height: 1.55;

  li::marker {
    color: rgb(119, 228, 242);
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tech = styled.span`
  padding: 6px 10px;
  border: 1px solid rgba(103, 213, 228, 0.4);
  border-radius: 999px;
  color: rgb(215, 250, 255);
  background: rgba(61, 142, 153, 0.19);
  font-size: 12px;
`;

const ExperienceDetails = ({ experience, onClose }) => {
  const isCurrent = /present/i.test(experience.date || "");
  const [overview, ...contributions] = experience.desc || [];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <Backdrop onClick={(event) => event.target === event.currentTarget && onClose()}>
      <DetailPanel role="dialog" aria-modal="true" aria-labelledby="experience-detail-title">
        <CloseButton type="button" onClick={onClose} aria-label="Close experience details">
          <FaTimes aria-hidden="true" />
        </CloseButton>
        <PanelHeader>
          <CompanyLogo experience={experience} size={66} />
          <PanelHeadingText>
            {isCurrent && <CurrentRoleBadge>Current Role</CurrentRoleBadge>}
            <PanelTitle id="experience-detail-title">{experience.role}</PanelTitle>
            <PanelCompany>{experience.company}</PanelCompany>
            <MetaRow>
              <span><FaCalendarAlt aria-hidden="true" /> {experience.date}</span>
              <span><FaMapMarkerAlt aria-hidden="true" /> {experience.location || "Noida, India"}</span>
            </MetaRow>
          </PanelHeadingText>
        </PanelHeader>
        <PanelBody>
          {overview && (
            <DetailSection>
              <DetailHeading><FaInfoCircle aria-hidden="true" /> Overview</DetailHeading>
              <Overview>{overview}</Overview>
            </DetailSection>
          )}
          {contributions.length > 0 && (
            <DetailSection>
              <DetailHeading><FaLayerGroup aria-hidden="true" /> Key Contributions</DetailHeading>
              <Contributions>
                {contributions.map((item, index) => <li key={index}>{item}</li>)}
              </Contributions>
            </DetailSection>
          )}
          {experience.skills?.length > 0 && (
            <DetailSection>
              <DetailHeading><FaCode aria-hidden="true" /> Technology Stack</DetailHeading>
              <TechStack>
                {experience.skills.map((skill) => <Tech key={skill}>{skill}</Tech>)}
              </TechStack>
            </DetailSection>
          )}
        </PanelBody>
      </DetailPanel>
    </Backdrop>,
    document.body
  );
};

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  return (
    <Container id="Experience">
      <Wrapper>
        <SectionHeading>
          <HeadingIcon><FaBriefcase aria-hidden="true" /></HeadingIcon>
          <HeadingText>
            <Title>Experience</Title>
            <Desc>Where I’ve worked, and what I’ve built.</Desc>
          </HeadingText>
        </SectionHeading>
        <Timeline>
          {experiences.map((experience, index) => {
            const side = index % 2 === 0 ? "left" : "right";
            return (
              <TimelineRow key={experience.id ?? index}>
                <DateSlot $side={side}>{experience.date}</DateSlot>
                <NodeSlot><CompanyLogo experience={experience} size={42} round /></NodeSlot>
                <CardSlot $side={side}>
                  <ExperienceCard experience={experience} onView={setSelectedExperience} />
                </CardSlot>
              </TimelineRow>
            );
          })}
        </Timeline>
      </Wrapper>
      {selectedExperience && (
        <ExperienceDetails
          experience={selectedExperience}
          onClose={() => setSelectedExperience(null)}
        />
      )}
    </Container>
  );
};

export default Experience;
