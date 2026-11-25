import React from "react";
import styled from "styled-components";

const Frame = styled.div`
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
  flex: 0 0 ${({ $size }) => `${$size}px`};
  display: grid;
  place-items: center;
  overflow: hidden;
  box-sizing: border-box;
  border: 1px solid ${({ $rirabh }) => ($rirabh ? "rgba(255,255,255,.9)" : "rgba(142, 242, 255, 0.42)")};
  border-radius: ${({ $round }) => ($round ? "50%" : "14px")};
  color: ${({ $rirabh }) => ($rirabh ? "#f58220" : "rgb(196, 248, 255)")};
  background: ${({ $rirabh }) => ($rirabh ? "#ffffff" : "linear-gradient(145deg, rgba(77, 200, 216, 0.5), rgba(48, 116, 125, 0.48))")};
  box-shadow: 0 0 18px rgba(66, 198, 216, 0.15);
  font-size: ${({ $size }) => `${Math.round($size * 0.44)}px`};
  font-weight: 800;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: #ffffff;
  }
`;

const CompanyLogo = ({ experience, size = 48, round = false }) => {
  const company = experience?.company || "";
  const isRirabh = company.toLowerCase().includes("rirabh");

  return (
    <Frame $size={size} $round={round} $rirabh={isRirabh} aria-hidden="true">
      {experience?.img ? (
        <img src={experience.img} alt="" />
      ) : (
        isRirabh ? "R" : company.charAt(0) || "E"
      )}
    </Frame>
  );
};

export default CompanyLogo;
