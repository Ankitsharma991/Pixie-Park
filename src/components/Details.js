import React from "react";
import styled from "styled-components";

function Details() {
  return (
    <Container>
      <Background>
        <img
          src="https://compote.slate.com/images/47d9a013-4784-4cfa-962f-37a4ee13b2d3.jpeg?crop=1620%2C1080%2Cx0%2Cy0"
          alt=""
        />
      </Background>
    </Container>
  );
}

export default Details;

const Container = styled.div`
  min-height: calc(100vh-70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
