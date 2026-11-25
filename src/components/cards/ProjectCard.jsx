import React from "react";
import styled from "styled-components";
import {
  FaCalendarAlt,
  FaComments,
  FaDesktop,
  FaExternalLinkAlt,
  FaPhoneAlt,
  FaServer,
  FaVideo,
} from "react-icons/fa";

const Card = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
  border: 1px solid rgba(86, 214, 231, 0.25);
  border-radius: 20px;
  background: linear-gradient(155deg, rgba(18, 30, 42, 0.98), rgba(13, 22, 32, 0.98));
  box-shadow: 0 12px 36px rgba(4, 10, 16, 0.28);
  transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;

  &:hover {
    transform: translateY(-7px);
    border-color: rgba(91, 236, 255, 0.8);
    box-shadow: 0 18px 44px rgba(40, 158, 174, 0.22);
  }

  &:focus-within {
    border-color: rgba(125, 240, 255, 0.85);
  }
`;

const Preview = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 220px;
  padding: 18px 20px;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 70% 0%, rgba(70, 189, 205, 0.27), transparent 54%),
    linear-gradient(145deg, rgb(21, 33, 45), rgb(17, 27, 38) 70%);

  &::after {
    content: "";
    position: absolute;
    inset: auto 0 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(93, 227, 245, 0.45), transparent);
  }

  @media (max-width: 600px) {
    min-height: 190px;
  }
`;

const Window = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 390px;
  height: 174px;
  overflow: hidden;
  border: 1px solid rgba(158, 212, 219, 0.2);
  border-radius: 14px;
  background: rgba(12, 21, 30, 0.82);
  box-shadow: 0 14px 34px rgba(3, 7, 12, 0.4);
  transform: perspective(800px) rotateY(-3deg);
  transition: transform 0.45s ease;

  ${Card}:hover & {
    transform: perspective(800px) rotateY(0deg) translateY(-2px);
  }
`;

const WindowSide = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 58px;
  padding: 18px 10px;
  border-right: 1px solid rgba(158, 212, 219, 0.12);
  background: rgba(255, 255, 255, 0.025);
`;

const SideMark = styled.span`
  width: 25px;
  height: 25px;
  display: grid;
  place-items: center;
  border-radius: 8px;
  color: ${({ $active }) => ($active ? "rgb(181, 246, 255)" : "rgb(136, 166, 170)")};
  background: ${({ $active }) => ($active ? "rgba(73, 194, 210, 0.55)" : "rgba(255,255,255,0.06)")};
  font-size: 11px;
`;

const WindowMain = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;
  min-width: 0;
  padding: 18px;
`;

const WindowTitle = styled.div`
  width: 40%;
  height: 8px;
  border-radius: 99px;
  background: rgba(220, 246, 250, 0.58);
`;

const WindowSubTitle = styled.div`
  width: 24%;
  height: 5px;
  border-radius: 99px;
  background: rgba(165, 204, 209, 0.26);
`;

const StatRow = styled.div`
  display: flex;
  gap: 9px;
`;

const Stat = styled.div`
  flex: 1;
  min-width: 0;
  height: 37px;
  padding: 8px;
  border: 1px solid rgba(156, 220, 229, 0.14);
  border-radius: 8px;
  background: rgba(89, 168, 178, 0.1);

  &::before,
  &::after {
    content: "";
    display: block;
    height: 4px;
    border-radius: 4px;
    background: rgba(203, 240, 245, 0.35);
  }

  &::after {
    width: 55%;
    margin-top: 6px;
    background: rgba(111, 238, 255, 0.62);
  }
`;

const MockPanel = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 14px;
  min-height: 48px;
  border: 1px solid rgba(156, 220, 229, 0.15);
  border-radius: 10px;
  background: linear-gradient(120deg, rgba(60, 137, 147, 0.22), rgba(27, 44, 56, 0.65));
`;

const MockAvatar = styled.div`
  width: 35px;
  height: 35px;
  flex: 0 0 35px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: rgb(224, 251, 255);
  background: linear-gradient(145deg, rgb(103, 209, 223), rgb(69, 128, 165));
  font-size: 15px;
`;

const Waveform = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  height: 35px;

  span {
    width: 3px;
    height: ${({ $index }) => `${10 + (($index * 13) % 22)}px`};
    border-radius: 4px;
    background: linear-gradient(rgb(165, 244, 255), rgb(73, 198, 214));
  }
`;

const ControlRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const Control = styled.span`
  width: 24px;
  height: 24px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: rgb(215, 250, 255);
  background: rgba(92, 158, 167, 0.42);
  font-size: 10px;

  &:last-child {
    background: rgba(205, 68, 93, 0.78);
  }
`;

const TableRows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TableRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 20px;
  padding: 0 8px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.035);

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    flex: 0 0 8px;
    border-radius: 50%;
    background: ${({ $active }) => ($active ? "rgb(105, 237, 255)" : "rgb(102, 133, 137)")};
  }

  &::after {
    content: "";
    width: ${({ $width }) => $width || "52%"};
    height: 4px;
    border-radius: 4px;
    background: rgba(201, 228, 232, 0.33);
  }
`;

const Details = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px 22px 18px;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const ProjectIcon = styled.div`
  width: 48px;
  height: 48px;
  flex: 0 0 48px;
  display: grid;
  place-items: center;
  border-radius: 15px;
  color: rgb(176, 246, 255);
  background: linear-gradient(145deg, rgba(77, 203, 220, 0.36), rgba(57, 136, 147, 0.4));
  font-size: 20px;
`;

const TextBlock = styled.div`
  min-width: 0;
  flex: 1;
`;

const Title = styled.h3`
  margin: 1px 0 8px;
  color: rgb(241, 253, 255);
  font-size: 18px;
  line-height: 1.35;
  font-weight: 700;
`;

const Date = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  color: rgba(214, 234, 237, 0.72);
  font-size: 13px;
`;

const Description = styled.p`
  margin: 18px 0 16px;
  color: rgba(221, 237, 239, 0.82);
  font-size: 14px;
  line-height: 1.55;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: auto;
  padding-top: 2px;
`;

const Tag = styled.span`
  padding: 4px 10px;
  border: 1px solid rgba(106, 226, 242, 0.44);
  border-radius: 999px;
  color: rgb(164, 244, 255);
  background: rgba(54, 133, 143, 0.15);
  font-size: 11px;
  line-height: 1.2;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 18px;
  padding-top: 13px;
  border-top: 1px solid rgba(173, 217, 223, 0.13);
`;

const Category = styled.span`
  color: rgba(192, 220, 224, 0.67);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const ProjectLink = styled.a`
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(86, 214, 231, 0.35);
  border-radius: 11px;
  color: rgb(198, 248, 255);
  background: rgba(62, 152, 164, 0.2);
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    transform: translate(2px, -2px);
    background: rgba(73, 180, 194, 0.45);
  }
`;

const previewIcons = {
  support: FaDesktop,
  softphone: FaPhoneAlt,
  voip: FaServer,
  dashboard: FaComments,
};

const PreviewArt = ({ variant }) => {
  const Icon = previewIcons[variant] || FaDesktop;

  return (
    <Preview aria-label="Illustrative project interface preview">
      <Window>
        <WindowSide>
          {[0, 1, 2, 3].map((item) => (
            <SideMark key={item} $active={item === 1}>
              {item === 1 ? <Icon /> : null}
            </SideMark>
          ))}
        </WindowSide>
        <WindowMain>
          <div>
            <WindowTitle />
            <div style={{ height: 6 }} />
            <WindowSubTitle />
          </div>
          {variant === "softphone" ? (
            <MockPanel>
              <MockAvatar><FaPhoneAlt /></MockAvatar>
              <div>
                <WindowTitle />
                <Waveform aria-hidden="true">
                  {Array.from({ length: 25 }, (_, index) => <span key={index} />)}
                </Waveform>
                <ControlRow>
                  <Control><FaPhoneAlt /></Control>
                  <Control><FaVideo /></Control>
                  <Control><FaPhoneAlt /></Control>
                </ControlRow>
              </div>
            </MockPanel>
          ) : variant === "support" ? (
            <MockPanel>
              <div style={{ width: "82%" }}>
                <div style={{ height: 66, borderRadius: 7, background: "linear-gradient(145deg, rgb(87, 177, 189), rgb(36, 73, 100) 70%)" }} />
                <div style={{ width: "18%", height: 4, margin: "6px auto 0", borderRadius: 4, background: "rgba(205, 244, 249, .35)" }} />
              </div>
            </MockPanel>
          ) : variant === "dashboard" ? (
            <TableRows>
              {[0, 1, 2, 3].map((item) => (
                <TableRow key={item} $active={item === 1} $width={`${40 + item * 8}%`} />
              ))}
            </TableRows>
          ) : (
            <>
              <StatRow><Stat /><Stat /><Stat /></StatRow>
              <TableRows>
                {[0, 1, 2].map((item) => (
                  <TableRow key={item} $active={item === 0} $width={`${44 + item * 10}%`} />
                ))}
              </TableRows>
            </>
          )}
        </WindowMain>
      </Window>
    </Preview>
  );
};

const projectIcons = {
  support: FaDesktop,
  softphone: FaPhoneAlt,
  voip: FaServer,
  dashboard: FaComments,
};

const ProjectCard = ({ project }) => {
  const Icon = projectIcons[project.visual] || FaDesktop;
  const projectLink = project.webapp || project.github;

  return (
    <Card>
      <PreviewArt variant={project.visual} />
      <Details>
        <TitleRow>
          <ProjectIcon><Icon aria-hidden="true" /></ProjectIcon>
          <TextBlock>
            <Title>{project.title}</Title>
            {project.date && <Date><FaCalendarAlt aria-hidden="true" /> {project.date}</Date>}
          </TextBlock>
        </TitleRow>
        <Description>{project.description}</Description>
        <Tags>
          {project.tags?.map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </Tags>
        <Footer>
          <Category>{project.category || "Project"}</Category>
          {projectLink && (
            <ProjectLink href={projectLink} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
              <FaExternalLinkAlt aria-hidden="true" />
            </ProjectLink>
          )}
        </Footer>
      </Details>
    </Card>
  );
};

export default ProjectCard;
