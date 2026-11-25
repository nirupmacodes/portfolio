import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaRegCommentDots,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { Bio } from "../../data/constants";

const Backdrop = styled.div`
  position: fixed;
  z-index: 1000;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 28px;
  background: rgba(4, 9, 15, 0.74);
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(11px);
  animation: fade-in 180ms ease-out both;

  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @media (max-width: 600px) {
    align-items: start;
    padding: max(12px, env(safe-area-inset-top)) 12px max(12px, env(safe-area-inset-bottom));
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Dialog = styled.section`
  position: relative;
  isolation: isolate;
  display: grid;
  grid-template-columns: minmax(250px, 0.78fr) minmax(0, 1.22fr);
  width: min(1120px, 100%);
  max-height: min(790px, calc(100dvh - 56px));
  overflow: auto;
  border: 1px solid rgba(99, 237, 255, 0.82);
  border-radius: 30px;
  color: rgb(242, 253, 255);
  background:
    radial-gradient(ellipse at 3% 100%, rgba(40, 179, 197, 0.24), transparent 36%),
    radial-gradient(ellipse at 100% 4%, rgba(57, 165, 179, 0.18), transparent 42%),
    linear-gradient(135deg, rgba(19, 32, 45, 0.99), rgba(10, 19, 28, 0.99) 68%);
  box-shadow: 0 28px 100px rgba(0, 0, 0, 0.62), 0 0 44px rgba(54, 194, 212, 0.2), inset 0 1px rgba(255, 255, 255, 0.06);
  animation: rise-in 220ms cubic-bezier(0.2, 0.7, 0.25, 1) both;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    bottom: 0;
    width: 47%;
    height: 100px;
    pointer-events: none;
    opacity: 0.65;
    background: radial-gradient(ellipse at 50% 100%, rgba(56, 209, 229, 0.35), transparent 70%);
  }

  @keyframes rise-in {
    from { opacity: 0; transform: translateY(10px) scale(0.99); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    width: min(560px, 100%);
    max-height: calc(100dvh - 24px - env(safe-area-inset-top) - env(safe-area-inset-bottom));
    border-radius: 24px;
  }

  @media (max-width: 420px) {
    border-radius: 20px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  z-index: 2;
  top: 18px;
  right: 18px;
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border: 1px solid transparent;
  border-radius: 50%;
  color: rgba(230, 252, 255, 0.82);
  background: transparent;
  font-size: 19px;
  cursor: pointer;
  transition: color 160ms ease, background 160ms ease, border-color 160ms ease;

  &:hover {
    color: #fff;
    border-color: rgba(113, 238, 255, 0.38);
    background: rgba(90, 215, 232, 0.14);
  }

  &:focus-visible {
    outline: 2px solid rgb(169, 245, 255);
    outline-offset: 2px;
  }

  @media (max-width: 760px) {
    top: 10px;
    right: 10px;
  }
`;

const Intro = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  padding: 64px 38px 52px 52px;
  border-right: 1px solid rgba(137, 210, 220, 0.17);

  @media (max-width: 900px) {
    padding: 48px 28px 38px 32px;
  }

  @media (max-width: 760px) {
    padding: 26px 62px 20px 24px;
    border-right: 0;
    border-bottom: 1px solid rgba(137, 210, 220, 0.17);
  }

  @media (max-width: 420px) {
    padding: 24px 52px 18px 20px;
  }
`;

const IntroIcon = styled.div`
  display: grid;
  width: 68px;
  height: 68px;
  margin-bottom: 24px;
  place-items: center;
  border: 1px solid rgba(148, 243, 255, 0.54);
  border-radius: 21px;
  color: #fff;
  background: linear-gradient(145deg, rgba(65, 203, 221, 0.76), rgba(31, 120, 132, 0.75));
  box-shadow: 0 0 30px rgba(66, 210, 229, 0.35), inset 0 1px rgba(255, 255, 255, 0.22);
  font-size: 27px;

  @media (max-width: 760px) {
    width: 48px;
    height: 48px;
    margin-bottom: 12px;
    border-radius: 15px;
    font-size: 20px;
  }
`;

const Title = styled.h2`
  margin: 0 0 12px;
  color: rgb(248, 254, 255);
  font-size: clamp(28px, 3vw, 38px);
  line-height: 1.15;
  letter-spacing: -0.035em;
`;

const Description = styled.p`
  max-width: 340px;
  margin: 0;
  color: rgba(216, 237, 240, 0.86);
  font-size: 16px;
  line-height: 1.65;

  @media (max-width: 760px) {
    font-size: 14px;
    line-height: 1.5;
  }
`;

const ContactDetails = styled.div`
  display: grid;
  gap: 16px;
  margin-top: 34px;

  @media (max-width: 760px) {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 18px;
    margin-top: 16px;
  }
`;

const DetailLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
  color: rgb(232, 248, 250);
  font-size: 14px;
  text-decoration: none;
  overflow-wrap: anywhere;

  svg {
    flex: 0 0 auto;
    color: rgb(118, 239, 255);
    font-size: 18px;
  }

  &:hover { color: rgb(169, 245, 255); }

  @media (max-width: 760px) {
    gap: 8px;
    font-size: 12px;

    svg { font-size: 15px; }
  }
`;

const FormPanel = styled.div`
  min-width: 0;
  padding: 76px 42px 42px 40px;

  @media (max-width: 900px) {
    padding: 68px 28px 32px;
  }

  @media (max-width: 760px) {
    padding: 22px 24px 24px;
  }

  @media (max-width: 420px) {
    padding: 18px 18px 20px;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px 24px;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const Field = styled.label`
  display: grid;
  min-width: 0;
  gap: 8px;
  color: rgb(239, 253, 255);
  font-size: 14px;
  font-weight: 500;

  > span { line-height: 1.3; }
  em { color: #ff7b9f; font-style: normal; }
`;

const FullField = styled(Field)`
  grid-column: 1 / -1;
`;

const InputWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-width: 0;

  > svg {
    position: absolute;
    left: 16px;
    color: rgba(194, 224, 228, 0.8);
    font-size: 19px;
    pointer-events: none;
  }
`;

const controlStyles = `
  width: 100%;
  min-width: 0;
  border: 1px solid rgba(146, 197, 204, 0.29);
  border-radius: 15px;
  color: rgb(244, 254, 255);
  background: rgba(255, 255, 255, 0.035);
  font: inherit;
  font-size: 15px;
  outline: none;
  transition: border-color 160ms ease, background 160ms ease, box-shadow 160ms ease;

  &::placeholder { color: rgba(204, 225, 228, 0.68); }
  &:focus {
    border-color: rgba(111, 238, 255, 0.85);
    background: rgba(255, 255, 255, 0.055);
    box-shadow: 0 0 0 3px rgba(74, 214, 232, 0.15);
  }
`;

const Input = styled.input`
  ${controlStyles}
  height: 54px;
  padding: 0 16px 0 58px;

  @media (max-width: 520px) { height: 50px; }
`;

const Select = styled.select`
  ${controlStyles}
  height: 54px;
  padding: 0 42px 0 17px;
  appearance: none;
  cursor: pointer;

  option { color: rgb(244, 254, 255); background: rgb(20, 31, 42); }

  @media (max-width: 520px) { height: 50px; }
`;

const SelectWrap = styled.div`
  position: relative;
  min-width: 0;

  &::after {
    content: "";
    position: absolute;
    top: 21px;
    right: 19px;
    width: 9px;
    height: 9px;
    border-right: 2px solid rgba(234, 253, 255, 0.8);
    border-bottom: 2px solid rgba(234, 253, 255, 0.8);
    transform: rotate(45deg);
    pointer-events: none;
  }

  @media (max-width: 520px) {
    &::after { top: 19px; }
  }
`;

const Textarea = styled.textarea`
  ${controlStyles}
  min-height: 146px;
  padding: 15px 16px 15px 58px;
  resize: vertical;

  @media (max-width: 520px) { min-height: 120px; }
`;

const TextareaWrap = styled(InputWrap)`
  align-items: flex-start;
  > svg { top: 17px; }
`;

const FormFooter = styled.div`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 14px;
  margin-top: 4px;

  @media (max-width: 520px) {
    flex-direction: column-reverse;
    align-items: stretch;
    gap: 10px;
  }
`;

const Status = styled.p`
  flex: 1;
  margin: 0;
  color: ${({ $error }) => ($error ? "#ff9eaf" : "#22C55E")};
  font-size: 13px;
  line-height: 1.4;

  @media (max-width: 520px) { text-align: center; }
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 154px;
  min-height: 54px;
  padding: 0 23px;
  border: 1px solid ${({ $secondary }) => ($secondary ? "rgba(153, 205, 212, 0.35)" : "rgba(173, 245, 255, 0.65)")};
  border-radius: 16px;
  color: #fff;
  background: ${({ $secondary }) => ($secondary ? "rgba(255,255,255,.02)" : "linear-gradient(110deg, rgb(52, 203, 223), rgb(38, 172, 190))")};
  box-shadow: ${({ $secondary }) => ($secondary ? "none" : "0 0 28px rgba(52, 204, 224, 0.36), inset 0 1px rgba(255,255,255,.22)")};
  font: inherit;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 160ms ease, filter 160ms ease, border-color 160ms ease;

  &:hover:not(:disabled) { transform: translateY(-1px); filter: brightness(1.1); }
  &:focus-visible { outline: 2px solid rgb(169, 245, 255); outline-offset: 3px; }
  &:disabled { cursor: wait; opacity: 0.72; }

  @media (max-width: 520px) {
    width: 100%;
    min-height: 50px;
  }
`;

const Contact = ({ isOpen, onClose }) => {
  const dialogRef = useRef(null);
  const firstInputRef = useRef(null);
  const previousFocusRef = useRef(null);
  const [status, setStatus] = useState("");
  const [hasError, setHasError] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;
    setStatus("");
    setHasError(false);
    previousFocusRef.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => firstInputRef.current?.focus(), 0);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      } else if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll(
          'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href]'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus?.();
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("");
    setHasError(false);
    setIsSending(true);
    try {
      await emailjs.sendForm(
        "service_tox7kqs",
        "template_nv7k7mj",
        formRef.current,
        "SybVGsYS52j2TfLbi"
      );
      setStatus("Thanks, your message has been sent.");
      formRef.current?.reset();
    } catch {
      setHasError(true);
      setStatus("Your message could not be sent. Please try again or email me directly.");
    } finally {
      setIsSending(false);
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <Backdrop onMouseDown={(event) => event.target === event.currentTarget && onClose?.()}>
      <Dialog
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        aria-describedby="contact-modal-description"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <CloseButton type="button" onClick={onClose} aria-label="Close contact form">
          <FaTimes aria-hidden="true" />
        </CloseButton>

        <Intro>
          <IntroIcon><FaPaperPlane aria-hidden="true" /></IntroIcon>
          <Title id="contact-modal-title">Get in Touch</Title>
          <Description id="contact-modal-description">
            Have a project, opportunity, or just want to say hi? I’d love to hear from you.
          </Description>
          <ContactDetails>
            <DetailLink href={`mailto:${Bio.email}`}><FaEnvelope aria-hidden="true" />{Bio.email}</DetailLink>
            <DetailLink href={Bio.linkedin} target="_blank" rel="noreferrer"><FaLinkedin aria-hidden="true" />LinkedIn profile</DetailLink>
            {Bio.github && <DetailLink href={Bio.github} target="_blank" rel="noreferrer"><FaGithub aria-hidden="true" />GitHub profile</DetailLink>}
          </ContactDetails>
        </Intro>

        <FormPanel>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Field>
              <span>Your Name <em>*</em></span>
              <InputWrap>
                <FaUser aria-hidden="true" />
                <Input ref={firstInputRef} name="from_name" autoComplete="name" placeholder="Enter your name" required />
              </InputWrap>
            </Field>
            <Field>
              <span>Your Email <em>*</em></span>
              <InputWrap>
                <FaEnvelope aria-hidden="true" />
                <Input type="email" name="from_email" autoComplete="email" placeholder="Enter your email" required />
              </InputWrap>
            </Field>
            <FullField>
              <span>Subject <em>*</em></span>
              <SelectWrap>
                <Select name="subject" defaultValue="Opportunity" required>
                  <option>Opportunity</option>
                  <option>Project collaboration</option>
                  <option>General inquiry</option>
                  <option>Other</option>
                </Select>
              </SelectWrap>
            </FullField>
            <FullField>
              <span>Message <em>*</em></span>
              <TextareaWrap>
                <FaRegCommentDots aria-hidden="true" />
                <Textarea name="message" placeholder="Write your message..." required />
              </TextareaWrap>
            </FullField>
            <FormFooter>
              <Status role="status" aria-live="polite" $error={hasError}>{status}</Status>
              <Button type="button" $secondary onClick={onClose}>Cancel</Button>
              <Button type="submit" disabled={isSending}>
                <FaPaperPlane aria-hidden="true" /> {isSending ? "Sending…" : "Send Message"}
              </Button>
            </FormFooter>
          </Form>
        </FormPanel>
      </Dialog>
    </Backdrop>,
    document.body
  );
};

export default Contact;
