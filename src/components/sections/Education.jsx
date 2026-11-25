import React from "react";
import styled from "styled-components";
import { FaAward, FaGraduationCap } from "react-icons/fa";
import { certifications, education } from "../../data/constants";
import EducationCard from "../cards/EducationCard";

const Container = styled.section`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const TimelineNode = styled.div`
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border: 3px solid rgb(232, 252, 255);
  border-radius: 50%;
  color: white;
  background: linear-gradient(145deg, rgb(98, 226, 243), rgb(52, 174, 190));
  box-shadow: 0 0 0 4px rgba(67, 187, 203, 0.26), 0 0 22px rgba(93, 229, 247, 0.5);
  font-size: 17px;
  font-weight: 700;
`;

const Certifications = styled.div`
  width: 100%;
  margin-top: 22px;
`;

const CertificationsTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 14px;
  color: ${({ theme }) => theme.text_primary};
  font-size: 21px;

  svg { color: ${({ theme }) => theme.secondary}; }
`;

const CertificationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const CertificationCard = styled.article`
  min-width: 0;
  padding: 17px 19px;
  border: 1px solid rgba(0, 229, 255, 0.22);
  border-radius: 15px;
  background: linear-gradient(145deg, rgba(11, 27, 43, 0.96), rgba(16, 35, 52, 0.9));
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.035);

  h4 {
    margin: 0;
    color: ${({ theme }) => theme.text_primary};
    font-size: 15px;
    line-height: 1.5;
  }

  p {
    margin: 7px 0 0;
    color: ${({ theme }) => theme.text_secondary};
    font-size: 13px;
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

const Education = () => (
  <Container id="Education">
    <Wrapper>
      <SectionHeading>
        <HeadingIcon><FaGraduationCap aria-hidden="true" /></HeadingIcon>
        <HeadingText>
          <Title>Education</Title>
          <Desc>Where I studied and what I learned.</Desc>
        </HeadingText>
      </SectionHeading>
      <Timeline>
        {education.map((item, index) => {
          const side = index % 2 === 0 ? "left" : "right";
          return (
            <TimelineRow key={item.id ?? index}>
              <DateSlot $side={side}>{item.date}</DateSlot>
              <NodeSlot>
                <TimelineNode aria-hidden="true">
                  {item.school?.charAt(0) || "E"}
                </TimelineNode>
              </NodeSlot>
              <CardSlot $side={side}>
                <EducationCard education={item} />
              </CardSlot>
            </TimelineRow>
          );
        })}
      </Timeline>
      <Certifications>
        <CertificationsTitle><FaAward aria-hidden="true" /> Certifications</CertificationsTitle>
        <CertificationGrid>
          {certifications.map((item) => (
            <CertificationCard key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.issuer}</p>
            </CertificationCard>
          ))}
        </CertificationGrid>
      </Certifications>
    </Wrapper>
  </Container>
);

export default Education;
