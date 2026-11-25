import React from "react";
import styled from "styled-components";

const Card = styled.article`
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

const SchoolLogo = styled.div`
  width: 50px;
  height: 50px;
  flex: 0 0 50px;
  display: grid;
  place-items: center;
  box-sizing: border-box;
  border: 1px solid rgba(142, 242, 255, 0.35);
  border-radius: 14px;
  color: #e8faff;
  background: linear-gradient(145deg, rgba(0, 229, 255, 0.18), rgba(0, 191, 166, 0.12));
  font-size: 16px;
  font-weight: 700;
`;

const HeadingText = styled.div`
  min-width: 0;
  flex: 1;
`;

const School = styled.h3`
  margin: 0;
  color: rgb(244, 254, 255);
  font-size: 17px;
  line-height: 1.35;
`;

const Degree = styled.div`
  margin-top: 4px;
  color: rgba(215, 238, 241, 0.8);
  font-size: 13px;
  line-height: 1.4;
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

const Grade = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: 14px;
  padding: 5px 10px;
  border: 1px solid rgba(105, 208, 222, 0.4);
  border-radius: 999px;
  color: rgb(204, 249, 255);
  background: rgba(60, 141, 152, 0.2);
  font-size: 12px;
  font-weight: 600;
`;

const Description = styled.p`
  margin: 14px 0 0;
  color: rgba(231, 245, 247, 0.87);
  font-size: 13px;
  line-height: 1.55;
`;

const EducationCard = ({ education }) => (
  <Card>
    <Heading>
      <SchoolLogo aria-hidden="true">{education.school.split(/\s+/).slice(0, 2).map((word) => word[0]).join("")}</SchoolLogo>
      <HeadingText>
        <School>{education.school}</School>
        <Degree>{education.degree}</Degree>
      </HeadingText>
    </Heading>
    <MobileDate>{education.date}</MobileDate>
    {education.grade && <Grade>{education.grade}</Grade>}
    <Description>{education.desc}</Description>
  </Card>
);

export default EducationCard;
