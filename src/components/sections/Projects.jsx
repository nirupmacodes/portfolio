import React, { useRef } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight, FaCode } from "react-icons/fa";
import { projects } from "../../data/constants";
import ProjectCard from "../cards/ProjectCard";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  gap: 14px;
`;

const Eyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 8px 15px;
  border: 1px solid rgba(100, 237, 255, 0.68);
  border-radius: 999px;
  color: rgb(164, 244, 255);
  background: rgba(47, 131, 142, 0.13);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.045em;
  text-transform: uppercase;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  width: min(100%, 600px);

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(97, 229, 247, 0.72));
  }

  &::after {
    transform: rotate(180deg);
  }
`;

const Title = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.text_primary};
  font-size: 52px;
  line-height: 1.12;
  font-weight: 700;
  text-align: center;
  background: linear-gradient(180deg, #ffffff, rgb(194, 238, 244));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 38px;
  }
`;

const Desc = styled.p`
  margin: 0 0 22px;
  max-width: 820px;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 17px;
  line-height: 1.6;
  font-weight: 500;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 14px;
    font-size: 15px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  gap: 22px;
  width: 100%;
  overflow-x: auto;
  padding: 8px 3px 22px;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }

  > article {
    flex: 0 0 calc((100% - 44px) / 3);
    scroll-snap-align: start;
  }

  @media (max-width: 1000px) {
    > article {
      flex-basis: calc((100% - 22px) / 2);
    }
  }

  @media (max-width: 650px) {
    gap: 18px;

    > article {
      flex-basis: min(88%, 420px);
    }
  }
`;

const CarouselControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  width: 100%;
  margin-top: -4px;

  @media (max-width: 650px) {
    justify-content: center;
  }
`;

const CarouselButton = styled.button`
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(101, 217, 232, 0.45);
  border-radius: 13px;
  color: rgb(196, 248, 255);
  background: rgba(48, 116, 125, 0.28);
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(62, 159, 172, 0.5);
  }

  &:focus-visible {
    outline: 2px solid rgb(164, 244, 255);
    outline-offset: 3px;
  }
`;

const Projects = () => {
  const carouselRef = useRef(null);

  const moveCarousel = (direction) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const card = carousel.querySelector("article");
    const gap = Number.parseFloat(window.getComputedStyle(carousel).columnGap) || 0;
    carousel.scrollBy({
      left: direction * ((card?.getBoundingClientRect().width || carousel.clientWidth) + gap),
      behavior: "smooth",
    });
  };

  return (
    <Container id="Projects">
      <Wrapper>
        <Eyebrow><FaCode aria-hidden="true" /> Featured Projects</Eyebrow>
        <TitleRow><Title>Projects</Title></TitleRow>
        <Desc>
          Selected frontend work across business calling, web applications, and travel.
        </Desc>
        <CardContainer
          ref={carouselRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured projects"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </CardContainer>
        <CarouselControls aria-label="Carousel controls">
          <CarouselButton type="button" onClick={() => moveCarousel(-1)} aria-label="Previous projects">
            <FaChevronLeft aria-hidden="true" />
          </CarouselButton>
          <CarouselButton type="button" onClick={() => moveCarousel(1)} aria-label="Next projects">
            <FaChevronRight aria-hidden="true" />
          </CarouselButton>
        </CarouselControls>
      </Wrapper>
    </Container>
  );
};

export default Projects;
