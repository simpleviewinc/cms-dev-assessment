import React from "react";
import styled from "styled-components";

import fallback from "../fallback.jpg";

/*
TODO:
* fallback image is from local path and not URL
* ReadMore button doesn't flicker on hover (Chrome Issue, works on Firefox)
* ReadMore centering should be done by flexbox and not right
* Make Title height grow but Details fixed (push extra Details text into overflow, instead of growing Details height)
* 6th Card's Image needs to grow its height to fit CardContainer height
 */

const CardContainer = styled.div`
  min-height: 300px;
  max-height: 400px;
  padding: 0.2em;
  box-sizing: border-box;
  margin-bottom: 1em;

  // Large Screens
  @media screen and (min-width: 1025px) {
    width: 25%;
    :first-child {
      width: 50%;
    }
    :nth-child(6) {
      // flex: 1 0 50%;
      width: 50%;
    }
  }

  // Medium Screens
  @media screen and (max-width: 1024px) and (min-width: 641px) {
    width: 33%;
  }

  // Small Screens
  @media screen and (max-width: 640px) {
    min-width: 100%;
  }
`;
const ImageCardContainer = styled.div`
  max-height: 185px;
  display: flex;
  flex: 1 0;
  align-items: center;
  padding: 10px;
  overflow: hidden;
  :nth-child(6) {
    flex: 1 0;
    height: inherit;
  }
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const Title = styled.div`
  font-size: 23px;
  font-weight: 900;
  height: auto;
  text-align: left;
  padding: 5px 0px;
`;
const Details = styled.div`
  position: relative;
  flex-wrap: row;
  align-items: center;
  height: 80px;
  font-weight: 400;
  overflow: hidden;
  margin-bottom: 2rem;
  text-align: left;
  &:after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    width: 100%;
    height: 40px;
    z-index: 1;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(255, 255, 255, 1));
  }
`;
const ReadMore = styled.div`
  display: none;
  position: absolute;
  bottom: 10px;
  right: 40%;
  background: palevioletred;
  color: white;
  padding: 5px;
  border-radius: 4px;
  font-weight: 900;
  font-size: 1.2em;
  z-index: 2; // show above Details's linear gradient
  filter: drop-shadow(2px 3px 4px palevioletred);
`;
const TextContainer = styled.div`
  padding: 10px;
  max-height: 100px;
  position: relative;
  cursor: pointer;

  & ${Details}:hover + ${ReadMore} {
    display: flex;
  }
`;

const Card = ({ listing }) => {
  const { description, mediaurl, title } = listing;
  return (
    <CardContainer>
      <ImageCardContainer>
        <Image
          src={mediaurl}
          onError={e => {
            e.target.onerror = null;
            e.target.src =
              "https://res.cloudinary.com/simpleview/image/upload/v1463070008/listings_default_tppucp.jpg";
          }}
        />
      </ImageCardContainer>
      <TextContainer>
        <Title>{title}</Title>
        <Details>{description}</Details>
        <ReadMore>Read More</ReadMore>
      </TextContainer>
    </CardContainer>
  );
};

export default Card;
