import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import { Bio } from "../data/constants";
import {
  FaCode,
  FaGraduationCap,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaLayerGroup,
  FaPaperPlane,
  FaBriefcase,
} from "react-icons/fa";

const navLinks = [
  { id: "About", label: "Home", icon: FaHome },
  { id: "Experience", label: "Experience", icon: FaBriefcase },
  { id: "Skills", label: "Skills", icon: FaLayerGroup },
  { id: "Projects", label: "Projects", icon: FaCode },
  { id: "Education", label: "Education", icon: FaGraduationCap },
];

const Nav = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  padding: 18px 32px;
  color: white;
  background: transparent;
  box-shadow: none;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    pointer-events: none;
    background:
      radial-gradient(ellipse 28% 150% at 48% 0%, rgba(48, 195, 214, 0.34), transparent 75%),
      radial-gradient(ellipse 23% 140% at 4% 30%, rgba(36, 172, 190, 0.13), transparent 72%),
      radial-gradient(ellipse 23% 140% at 96% 30%, rgba(31, 165, 183, 0.13), transparent 72%);
    mask-image: linear-gradient(to bottom, #000 0%, rgba(0, 0, 0, 0.65) 52%, transparent 100%);
    opacity: ${({ $scrolled }) => ($scrolled ? 0 : 1)};
    transition: opacity 0.28s ease;
  }

  @media (max-width: 600px) {
    padding: 12px;
  }

  @media (max-width: 1100px) {
    background: ${({ $scrolled, $open }) => ($open ? "rgba(5, 11, 18, 0.96)" : $scrolled ? "rgba(5, 11, 18, 0.88)" : "transparent")};
    backdrop-filter: ${({ $scrolled, $open }) => ($scrolled || $open ? "blur(14px)" : "none")};
  }
`;

const NavbarContainer = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  align-items: center;
  gap: 24px;
  width: 100%;
  max-width: 1500px;
  min-height: 72px;
  box-sizing: border-box;
  padding: 10px 16px;
  border: 1px solid transparent;
  border-radius: 999px;
  background: transparent;
  box-shadow: none;
  backdrop-filter: none;
  transition:
    max-width 0.4s cubic-bezier(0.2, 0.6, 0.35, 1),
    padding 0.4s cubic-bezier(0.2, 0.6, 0.35, 1),
    border-radius 0.4s cubic-bezier(0.2, 0.6, 0.35, 1),
    background 0.4s cubic-bezier(0.2, 0.6, 0.35, 1),
    backdrop-filter 0.4s cubic-bezier(0.2, 0.6, 0.35, 1);

  ${({ $scrolled }) => $scrolled && `
    max-width: 1290px;
    padding: 6px 8px 6px 24px;
    border-radius: 999px;
    background: rgba(8, 17, 27, 0.72);
    backdrop-filter: blur(12px) saturate(125%);
  `}

  @media (max-width: 1100px) {
    grid-template-columns: minmax(0, 1fr) auto;
    max-width: none;
    gap: 14px;
    border-radius: 20px;
    padding: 8px 12px;
    background: rgba(8, 17, 27, 0.84);
    backdrop-filter: blur(14px) saturate(125%);
  }

  @media (max-width: 960px) {
    min-height: 66px;
    padding: 8px 12px;
  }

  @media (max-width: 600px) {
    min-height: 62px;
    padding: 7px 9px;
    border-radius: 20px;
  }
`;

const Brand = styled(LinkR)`
  display: flex;
  align-items: center;
  gap: 13px;
  min-width: 0;
  overflow: hidden;
  color: inherit;
  text-decoration: none;

  @media (max-width: 600px) {
    gap: 9px;
  }
`;

const BrandMark = styled.img`
  width: ${({ $compact }) => ($compact ? "44px" : "54px")};
  height: ${({ $compact }) => ($compact ? "44px" : "54px")};
  flex: 0 0 ${({ $compact }) => ($compact ? "44px" : "54px")};
  display: block;
  box-sizing: border-box;
  object-fit: cover;
  object-position: center;
  border: 1px solid rgba(108, 238, 255, 0.78);
  border-radius: 50%;
  background: rgba(71, 195, 211, 0.55);
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.13), 0 0 22px rgba(70, 202, 219, 0.18);
  transition: width 0.16s ease-out, height 0.16s ease-out, flex-basis 0.16s ease-out;

  @media (max-width: 600px) {
    width: ${({ $compact }) => ($compact ? "42px" : "46px")};
    height: ${({ $compact }) => ($compact ? "42px" : "46px")};
    flex-basis: ${({ $compact }) => ($compact ? "42px" : "46px")};
    border-radius: 50%;
  }
`;

const BrandText = styled.span`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

const BrandName = styled.strong`
  color: rgb(243, 254, 255);
  font-size: 16px;
  line-height: 1.1;
  white-space: nowrap;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const BrandRole = styled.span`
  display: flex;
  align-items: center;
  gap: 7px;
  color: rgba(217, 237, 240, 0.72);
  font-size: 12px;
  white-space: nowrap;

  @media (max-width: 600px) {
    font-size: 11px;
  }
`;

const AvailabilityDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 10px rgba(34, 197, 94, 0.72);
`;

const Separator = styled.span`
  display: none;
`;

const NavItems = styled.nav`
  position: relative;
  isolation: isolate;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  min-width: 0;
  padding: ${({ $plain }) => ($plain ? "0" : "5px")};
  border: 0;
  border-radius: 999px;
  background: ${({ $plain }) => ($plain ? "transparent" : "rgba(0, 0, 0, 0.25)")};
  box-shadow: none;
  backdrop-filter: ${({ $plain }) => ($plain ? "none" : "blur(10px)")};
  transition: padding 0.4s cubic-bezier(0.2, 0.6, 0.35, 1), background 0.4s cubic-bezier(0.2, 0.6, 0.35, 1);

  @media (max-width: 1100px) {
    display: none;
  }
`;

const ActiveMarker = styled.span`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  display: block;
  border-radius: 999px;
  overflow: hidden;
  background: rgb(0, 8, 16);
  pointer-events: none;
  will-change: transform, width, height;
  transition:
    transform 0.4s cubic-bezier(0.2, 0.6, 0.35, 1),
    width 0.4s cubic-bezier(0.2, 0.6, 0.35, 1),
    height 0.4s cubic-bezier(0.2, 0.6, 0.35, 1);

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const ActiveGlow = styled.span`
  position: absolute;
  left: 50%;
  bottom: ${({ $home, $plain }) => ($home && $plain ? "calc(50% - 5.5px)" : $home ? "-7px" : "-8px")};
  width: ${({ $home, $plain }) => ($home && !$plain ? "63px" : "31px")};
  height: ${({ $home, $plain }) => ($home && !$plain ? "13px" : "11px")};
  border-radius: 99px;
  background: rgb(60, 232, 255);
  filter: blur(10px);
  transform: translateX(-50%);
`;

const NavLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: 11px 13px;
  position: relative;
  z-index: 1;
  border: 1px solid ${({ $active }) => ($active ? "rgba(255, 255, 255, .1)" : "transparent")};
  border-radius: 999px;
  color: ${({ $active }) => ($active ? "rgb(246, 254, 255)" : "rgba(226, 242, 244, .78)")};
  background: transparent;
  box-shadow: none;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  padding: ${({ $activeHome, $compact }) => (
    $activeHome ? "11px 17px" : $compact ? "9px 12px" : "11px 13px"
  )};
  transition: color 0.18s ease, background 0.18s ease, border-color 0.18s ease, padding 0.18s ease-out;

  & > svg {
    color: ${({ $active }) => ($active ? "rgb(247, 254, 255)" : "rgb(195, 229, 234)")};
    font-size: 14px;
  }

  &:hover {
    color: #fff;
    border-color: rgba(108, 238, 255, 0.2);
    background: rgba(74, 164, 176, 0.16);
  }

  &:focus-visible {
    outline: 2px solid rgb(162, 244, 255);
    outline-offset: 2px;
  }

`;

const Actions = styled.div`
  display: flex;
  justify-self: end;
  align-items: center;
  gap: 9px;
  transition: gap 0.16s ease-out;
  ${({ $compact }) => $compact && `gap: 7px;`}

  @media (max-width: 1100px) {
    display: none;
  }
`;

const SocialLink = styled.a`
  width: ${({ $compact }) => ($compact ? "38px" : "42px")};
  height: ${({ $compact }) => ($compact ? "38px" : "42px")};
  display: grid;
  place-items: center;
  border: 1px solid rgba(174, 213, 218, 0.17);
  border-radius: 14px;
  color: rgb(232, 246, 248);
  background: rgba(255, 255, 255, 0.025);
  font-size: 18px;
  text-decoration: none;
  transition: width 0.16s ease-out, height 0.16s ease-out, border-color 0.16s ease, background 0.16s ease, transform 0.16s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(108, 238, 255, 0.5);
    background: rgba(74, 164, 176, 0.22);
  }
`;

const ContactLink = styled.button`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  min-height: 54px;
  padding: 4px 18px 4px 5px;
  border: 1px solid rgba(179, 226, 232, 0.2);
  border-radius: 999px;
  color: white;
  background: rgba(15, 27, 39, 0.88);
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.06);
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  font-family: inherit;
  transition: transform 0.18s ease-out, filter 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: -2px;
    border-radius: inherit;
    opacity: 0;
    background: radial-gradient(
      circle at var(--pointer-x, 50%) var(--pointer-y, 50%),
      rgba(255, 255, 255, 0.4),
      rgba(135, 241, 255, 0.2) 25%,
      transparent 65%
    );
    transition: opacity 0.2s ease;
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  & > svg {
    width: 44px;
    height: 44px;
    padding: 13px;
    box-sizing: border-box;
    border: 1px solid rgba(222, 251, 255, 0.58);
    border-radius: 50%;
    background: radial-gradient(circle at 32% 25%, rgb(144, 242, 255), rgb(65, 201, 219) 72%);
    box-shadow: 0 0 18px rgba(94, 236, 255, 0.7), inset 0 1px rgba(255, 255, 255, 0.55);
  }

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(174, 246, 255, 0.48);
    box-shadow: 0 0 30px rgba(65, 223, 244, 0.2), inset 0 1px rgba(255, 255, 255, 0.08);
    filter: brightness(1.08);

    &::before {
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  @media (max-width: 600px) {
    min-height: 48px;
    padding: 3px 13px 3px 4px;
    font-size: 13px;

    & > svg {
      width: 38px;
      height: 38px;
      padding: 11px;
    }
  }
`;

const MobileToggle = styled.button`
  position: relative;
  display: none;
  width: 44px;
  height: 44px;
  margin-left: auto;
  place-items: center;
  border: 1px solid rgba(174, 213, 218, 0.2);
  border-radius: 14px;
  color: rgb(235, 253, 255);
  background: rgba(255, 255, 255, 0.04);
  cursor: pointer;
  flex: 0 0 44px;
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: rgba(93, 210, 226, 0.13);
    border-color: rgba(108, 238, 255, 0.35);
  }

  &:focus-visible {
    outline: 2px solid rgb(162, 244, 255);
    outline-offset: 2px;
  }

  @media (max-width: 1100px) {
    display: grid;
  }
`;

const ToggleLine = styled.span`
  position: absolute;
  top: ${({ $open, $line }) => ($open ? "21px" : $line === 1 ? "13px" : $line === 2 ? "21px" : "29px")};
  left: ${({ $open, $line }) => ($open ? "9px" : $line === 2 ? "9px" : "12px")};
  width: ${({ $open, $line }) => ($open || $line === 2 ? "26px" : "20px")};
  height: 2px;
  border-radius: 99px;
  background: currentColor;
  transform: ${({ $open, $line }) => (
    $open && $line === 1 ? "rotate(-45deg)" : $open && $line === 3 ? "rotate(45deg)" : "none"
  )};
  opacity: ${({ $open, $line }) => ($open && $line === 2 ? 0 : 1)};
  transition:
    top 0.4s cubic-bezier(0.2, 0.6, 0.35, 1),
    left 0.4s cubic-bezier(0.2, 0.6, 0.35, 1),
    width 0.4s cubic-bezier(0.2, 0.6, 0.35, 1),
    transform 0.4s cubic-bezier(0.2, 0.6, 0.35, 1),
    opacity 0.16s ease;
`;

const MobileMenu = styled.div`
  position: absolute;
  top: calc(100% - 1px);
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: ${({ $open }) => ($open ? "460px" : "0")};
  padding: ${({ $open }) => ($open ? "12px 14px 16px" : "0 14px")};
  border: 0;
  border-radius: 0 0 20px 20px;
  background:
    radial-gradient(ellipse 70% 120% at 50% 0%, rgba(50, 173, 189, 0.18), transparent 72%),
    rgba(8, 17, 27, 0.97);
  box-shadow: 0 18px 40px rgba(4, 10, 16, 0.45);
  backdrop-filter: blur(18px);
  overflow: hidden;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  transition:
    max-height 0.4s cubic-bezier(0.2, 0.6, 0.35, 1),
    padding 0.4s cubic-bezier(0.2, 0.6, 0.35, 1),
    opacity 0.2s ease,
    visibility 0s linear ${({ $open }) => ($open ? "0s" : "0.4s")};

  ${NavLink} {
    justify-content: flex-start;
    width: 100%;
    box-sizing: border-box;
  }

  ${Actions} {
    display: flex;
    justify-content: flex-start;
    padding-top: 8px;
  }

  @media (min-width: 1101px) {
    display: none;
  }
`;

const Navbar = ({ onContactOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("About");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPill, setIsPill] = useState(false);
  const navItemsRef = useRef(null);
  const [activeMarker, setActiveMarker] = useState({ x: 0, y: 0, width: 0, height: 0 });

  useLayoutEffect(() => {
    const container = navItemsRef.current;
    if (!container) return undefined;

    const updateMarker = () => {
      const link = container.querySelector('[aria-current="location"]');
      if (!link) return;
      const containerRect = container.getBoundingClientRect();
      const linkRect = link.getBoundingClientRect();
      setActiveMarker({
        x: linkRect.left - containerRect.left - container.clientLeft,
        y: linkRect.top - containerRect.top - container.clientTop,
        width: linkRect.width,
        height: linkRect.height,
      });
    };

    updateMarker();
    const resizeObserver = new ResizeObserver(updateMarker);
    resizeObserver.observe(container);
    window.addEventListener("resize", updateMarker);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateMarker);
    };
  }, [activeSection]);

  useEffect(() => {
    const updateActiveSection = () => {
      const about = document.getElementById("About");
      const pillThreshold = about
        ? about.getBoundingClientRect().top + window.scrollY - 1
        : 64;
      setIsScrolled(window.scrollY > 24);
      setIsPill(window.innerWidth > 1100 && window.scrollY >= pillThreshold);
      let current = "About";
      navLinks.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= 170) current = id;
      });
      setActiveSection(current);
    };

    updateActiveSection();
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        ticking = false;
        updateActiveSection();
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  const handleContactPointerMove = (event) => {
    const button = event.currentTarget;
    const bounds = button.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    button.style.setProperty("--pointer-x", `${(x / bounds.width) * 100}%`);
    button.style.setProperty("--pointer-y", `${(y / bounds.height) * 100}%`);
  };

  const resetContactPointer = (event) => {
    const button = event.currentTarget;
    button.style.setProperty("--pointer-x", "50%");
    button.style.setProperty("--pointer-y", "50%");
  };

const renderLinks = (compact = false) => navLinks.map(({ id, label, icon: Icon }) => (
    <NavLink
      key={id}
      href={`#${id}`}
      $compact={compact}
      $active={activeSection === id}
      $activeHome={id === "About" && activeSection === "About"}
      aria-current={activeSection === id ? "location" : undefined}
      onClick={closeMenu}
    >
      <Icon aria-hidden="true" />
      {label}
    </NavLink>
  ));

  const renderActions = () => (
    <Actions $compact={isScrolled}>
      {Bio.github && (
        <SocialLink $compact={isScrolled} href={Bio.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
          <FaGithub aria-hidden="true" />
        </SocialLink>
      )}
      <SocialLink $compact={isScrolled} href={Bio.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
        <FaLinkedin aria-hidden="true" />
      </SocialLink>
      <ContactLink
        type="button"
        $compact={isScrolled}
        onClick={() => {
          closeMenu();
          onContactOpen?.();
        }}
        onPointerMove={handleContactPointerMove}
        onPointerLeave={resetContactPointer}
        onBlur={resetContactPointer}
      >
        <FaPaperPlane aria-hidden="true" /> Get In Touch
      </ContactLink>
    </Actions>
  );

  return (
    <Nav $scrolled={isScrolled} $open={isOpen}>
      <NavbarContainer $scrolled={isPill}>
        <Brand to="/" onClick={closeMenu} aria-label={`${Bio.name}, home`}>
          <BrandMark $compact={isScrolled} src="/nirupma-profile.jpg" alt="" />
          <BrandText>
            <BrandName>{Bio.name}</BrandName>
            <BrandRole><AvailabilityDot /> {Bio.roles[0]}</BrandRole>
          </BrandText>
        </Brand>
        <Separator />
      <NavItems ref={navItemsRef} $plain={isPill} aria-label="Main navigation">
          <ActiveMarker
            aria-hidden="true"
            style={{
              transform: `translate3d(${activeMarker.x}px, ${activeMarker.y}px, 0)`,
              width: `${activeMarker.width}px`,
              height: `${activeMarker.height}px`,
            }}
          >
            <ActiveGlow $home={activeSection === "About"} $plain={isPill} />
          </ActiveMarker>
          {renderLinks(isScrolled)}
        </NavItems>
        {renderActions()}
        <MobileToggle
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <ToggleLine $open={isOpen} $line={1} />
          <ToggleLine $open={isOpen} $line={2} />
          <ToggleLine $open={isOpen} $line={3} />
        </MobileToggle>
        <MobileMenu id="mobile-navigation" $open={isOpen} aria-hidden={!isOpen} inert={isOpen ? undefined : ""}>
          {renderLinks(isScrolled)}
          {renderActions()}
        </MobileMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
