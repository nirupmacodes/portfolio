import React from "react";
import styled from "styled-components";
import {
  FaArrowRight,
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaGraduationCap,
  FaHome,
  FaLayerGroup,
  FaLinkedin,
  FaPaperPlane,
  FaGithub,
} from "react-icons/fa";
import { Bio } from "../../data/constants";

const footerLinks = [
  { label: "Home", href: "#About", icon: FaHome },
  { label: "Skills", href: "#Skills", icon: FaLayerGroup },
  { label: "Experience", href: "#Experience", icon: FaBriefcase },
  { label: "Projects", href: "#Projects", icon: FaCode },
  { label: "Education", href: "#Education", icon: FaGraduationCap },
];

const FooterContainer = styled.footer`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 80px;
  padding: 78px 24px 26px;
  color: ${({ theme }) => theme.text_primary};
  background:
    radial-gradient(ellipse at 8% 0%, rgba(25, 129, 143, 0.18), transparent 38%),
    radial-gradient(ellipse at 96% 8%, rgba(36, 151, 166, 0.19), transparent 34%),
    linear-gradient(180deg, rgba(10, 19, 28, 0.78), ${({ theme }) => theme.bg} 55%);

  &::before {
    content: "";
    position: absolute;
    top: -76px;
    left: -8%;
    width: 116%;
    height: 150px;
    border-bottom: 1px solid rgba(76, 223, 242, 0.62);
    border-radius: 0 0 50% 50%;
    background: radial-gradient(ellipse at 50% 100%, rgba(35, 149, 164, 0.16), transparent 72%);
    box-shadow: 0 14px 38px rgba(37, 170, 188, 0.11);
    pointer-events: none;
  }

  @media (max-width: 760px) {
    margin-top: 50px;
    padding: 62px 18px 22px;
  }
`;

const FooterWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1380px;
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1.15fr 0.8fr 1.25fr;
  column-gap: 56px;
  padding-bottom: 36px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 36px;
    row-gap: 34px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 28px;
    padding-bottom: 26px;
  }
`;

const BrandColumn = styled.div`
  padding: 4px 40px 4px 0;

  @media (max-width: 900px) {
    grid-column: 1 / -1;
    padding-right: 0;
  }
`;

const BrandRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Logo = styled.img`
  overflow: hidden;
  width: 64px;
  height: 64px;
  flex: 0 0 64px;
  display: block;
  border: 1px solid rgba(99, 237, 255, 0.72);
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  box-shadow: 0 0 28px rgba(65, 202, 220, 0.24), inset 0 1px rgba(255, 255, 255, 0.14);
`;

const BrandText = styled.div``;

const Name = styled.div`
  color: rgb(247, 254, 255);
  font-size: 23px;
  line-height: 1.25;
  font-weight: 700;
`;

const Role = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  margin-top: 5px;
  color: rgba(216, 236, 239, 0.82);
  font-size: 15px;
`;

const StatusDot = styled.span`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 13px rgba(34, 197, 94, 0.6);
`;

const Summary = styled.p`
  max-width: 510px;
  margin: 23px 0 0;
  color: rgba(218, 236, 238, 0.8);
  font-size: 15px;
  line-height: 1.75;
`;

const Column = styled.div`
  min-width: 0;
  padding: 2px 0;

  @media (max-width: 900px) {
    padding: 0;
  }

  @media (max-width: 600px) {
    padding: 0;
  }
`;

const ColumnTitle = styled.h3`
  margin: 0 0 17px;
  color: rgb(247, 254, 255);
  font-size: 19px;
  font-weight: 700;

  &::after {
    content: "";
    display: block;
    width: 42px;
    height: 3px;
    margin-top: 8px;
    border-radius: 2px;
    background: linear-gradient(90deg, rgb(100, 237, 255), rgb(56, 189, 207));
  }
`;

const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

const NavLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  width: fit-content;
  color: rgba(237, 248, 249, 0.88);
  font-size: 14px;
  text-decoration: none;
  transition: color 0.18s ease, transform 0.18s ease;

  svg {
    color: rgb(220, 247, 251);
    font-size: 15px;
  }

  &:hover {
    color: rgb(138, 241, 255);
    transform: translateX(3px);
  }
`;

const ConnectCopy = styled.p`
  margin: 0;
  max-width: 400px;
  color: rgba(218, 236, 238, 0.8);
  font-size: 15px;
  line-height: 1.65;
`;

const ConnectActions = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 22px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
`;

const SocialLink = styled.a`
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(174, 213, 218, 0.18);
  border-radius: 14px;
  color: rgb(234, 253, 255);
  background: rgba(255, 255, 255, 0.035);
  font-size: 19px;
  text-decoration: none;
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(106, 228, 244, 0.55);
    background: rgba(74, 164, 176, 0.23);
  }
`;

const ContactLink = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 48px;
  margin-left: auto;
  padding: 0 18px;
  border: 1px solid rgba(169, 245, 255, 0.45);
  border-radius: 999px;
  color: white;
  background: linear-gradient(110deg, rgb(56, 194, 212), rgb(53, 182, 199));
  box-shadow: 0 0 24px rgba(58, 193, 211, 0.28), inset 0 1px rgba(255, 255, 255, 0.2);
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  font-family: inherit;
  transition: transform 0.2s ease, filter 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.1);
    box-shadow: 0 0 32px rgba(68, 208, 226, 0.42);
  }

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 19px 4px 0;
  border-top: 1px solid rgba(116, 209, 221, 0.28);
  color: rgba(218, 237, 239, 0.78);
  font-size: 13px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    padding-top: 16px;
  }
`;

const Copyright = styled.p`
  margin: 0;
`;

const Availability = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 9px;
`;

const Footer = ({ onContactOpen }) => (
  <FooterContainer>
    <FooterWrapper>
      <MainGrid>
        <BrandColumn>
          <BrandRow>
            <Logo src="/nirupma-profile.jpg" alt={Bio.name} loading="lazy" decoding="async" />
            <BrandText>
              <Name>{Bio.name}</Name>
            <Role><StatusDot /> {Bio.roles[0]}</Role>
            </BrandText>
          </BrandRow>
          <Summary>
            {Bio.description}
          </Summary>
        </BrandColumn>

        <Column>
          <ColumnTitle>Quick Links</ColumnTitle>
          <NavList aria-label="Footer navigation">
            {footerLinks.map(({ label, href, icon: Icon }) => (
              <NavLink key={href} href={href}>
                <Icon aria-hidden="true" /> {label}
              </NavLink>
            ))}
          </NavList>
        </Column>

        <Column>
          <ColumnTitle>Let’s Connect</ColumnTitle>
          <ConnectCopy>Open to connecting about software, products, and interesting opportunities.</ConnectCopy>
          <ConnectActions>
            <SocialLinks>
              {Bio.github && (
                <SocialLink href={Bio.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
                  <FaGithub aria-hidden="true" />
                </SocialLink>
              )}
              <SocialLink href={Bio.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                <FaLinkedin aria-hidden="true" />
              </SocialLink>
              <SocialLink href={`mailto:${Bio.email}`} aria-label={`Email ${Bio.name}`}>
                <FaEnvelope aria-hidden="true" />
              </SocialLink>
            </SocialLinks>
            <ContactLink type="button" onClick={onContactOpen}>
              <FaPaperPlane aria-hidden="true" /> Get in Touch <FaArrowRight aria-hidden="true" />
            </ContactLink>
          </ConnectActions>
        </Column>
      </MainGrid>

      <BottomRow>
        <Copyright>© {new Date().getFullYear()} {Bio.name}. All rights reserved.</Copyright>
        <Availability><StatusDot /> Open to opportunities</Availability>
      </BottomRow>
    </FooterWrapper>
  </FooterContainer>
);

export default Footer;
