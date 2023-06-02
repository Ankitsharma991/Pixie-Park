import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Get premier access to "Raya and the Last Dragon" for an unforgettable
          and immersive cinematic experience. Dive into a world of breathtaking
          animation, captivating storytelling, and heroic adventures.{" "}
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;
const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: "";
    background-image: url("/images/login-background.jpg");
    background-position: top;
    opacity: 0.7;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-top: 100px; */
`;
const CTALogoOne = styled.img``;

const SignUp = styled.a`
  padding: 17px 0;
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background: #0483ee;
  }
`;
const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;

const CTALogoTwo = styled.img`
  width: 90%;
`;
