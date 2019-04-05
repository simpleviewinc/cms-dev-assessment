import React, { Component } from "react";

import styled from "styled-components";

/*
TODO:
* Improve spacing between each image by implementing Grid instead of Flexbox. (could use gutter spacing)
* Be able to map through each Card rather than hard-coding each one, b/c it feels
  contrived to have to hardcode the index of each listings
* Page2 has some uneven distrubution at the bottom 🤷‍
* Images flicker everytime a Page loads. Add a css-transistion-group to help fade the image in. Maybe even cache the image in the browser.
 */

const Page = styled.div`
  display: flex;
  min-width: 1200px;
  max-width: 1200px;
  height: 700px;
  margin: 3em auto;
  text-align: center;
`;
const Col = styled.div`
  display: flex;
  flex: 0 1 50%;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;
const Row = styled.div`
  width: 100%;
  flex: 0 1;
  position: relative;
`;
const Row50 = styled(Row)`
  height: 50%;
`;
const Row33 = styled(Row)`
  height: 33.34%;
`;
const Row100 = styled(Row)`
  height: 100%;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: brightness(90%);
  &:after {
    position: absolute;
    z-index: 1;
    background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0) 100%,
      rgba(255, 255, 255, 1) 100%
    );
  }
`;
const Title = styled.div`
  content: "asdfasdf";
  position: absolute;
  bottom: 0px;
  padding: 20px;
  z-index: 99;
  color: white;
  font-weigth: 900;
  font-size: 2em;
  filter: drop-shadow(2px 3px 4px black);
`;

export function Page1({ listings }) {
  return (
    <Page>
      <Col>
        <Row50>
          <Image
            src={listings[0].mediaurl}
            onError={e => {
              e.target.onerror = null;
              e.target.src =
                "https://res.cloudinary.com/simpleview/image/upload/v1463070008/listings_default_tppucp.jpg";
            }}
          />
          <Title>{listings[0].title}</Title>
        </Row50>
        <Row50>
          <Image
            src={listings[1].mediaurl}
            onError={e => {
              e.target.onerror = null;
              e.target.src =
                "https://res.cloudinary.com/simpleview/image/upload/v1463070008/listings_default_tppucp.jpg";
            }}
          />
          <Title>{listings[1].title}</Title>
        </Row50>
      </Col>
      <Col>
        <Row33>
          <Image
            src={listings[2].mediaurl}
            onError={e => {
              e.target.onerror = null;
              e.target.src =
                "https://res.cloudinary.com/simpleview/image/upload/v1463070008/listings_default_tppucp.jpg";
            }}
          />
          <Title>{listings[2].title}</Title>
        </Row33>
        <Row33>
          <Image
            src={listings[3].mediaurl}
            onError={e => {
              e.target.onerror = null;
              e.target.src =
                "https://res.cloudinary.com/simpleview/image/upload/v1463070008/listings_default_tppucp.jpg";
            }}
          />
          <Title>{listings[3].title}</Title>
        </Row33>
        <Row33>
          <Image
            src={listings[4].mediaurl}
            onError={e => {
              e.target.onerror = null;
              e.target.src =
                "https://res.cloudinary.com/simpleview/image/upload/v1463070008/listings_default_tppucp.jpg";
            }}
          />
          <Title>{listings[4].title}</Title>
        </Row33>
      </Col>
    </Page>
  );
}

export function Page2({ listings }) {
  return (
    <Page>
      <Col>
        <Row50>
          <Image
            src={listings[0].mediaurl}
            onError={e => {
              e.target.onerror = null;
              e.target.src =
                "https://res.cloudinary.com/simpleview/image/upload/v1463070008/listings_default_tppucp.jpg";
            }}
          />
          <Title>{listings[0].title}</Title>
        </Row50>
        <Row50>
          <Image
            src={listings[1].mediaurl}
            onError={e => {
              e.target.onerror = null;
              e.target.src =
                "https://res.cloudinary.com/simpleview/image/upload/v1463070008/listings_default_tppucp.jpg";
            }}
          />
          <Title>{listings[1].title}</Title>
        </Row50>
      </Col>
      <Col>
        <Row50>
          <Image
            src={listings[2].mediaurl}
            onError={e => {
              e.target.onerror = null;
              e.target.src =
                "https://res.cloudinary.com/simpleview/image/upload/v1463070008/listings_default_tppucp.jpg";
            }}
          />
          <Title>{listings[2].title}</Title>
        </Row50>
        <Row50>
          <Image
            src={listings[3].mediaurl}
            onError={e => {
              e.target.onerror = null;
              e.target.src =
                "https://res.cloudinary.com/simpleview/image/upload/v1463070008/listings_default_tppucp.jpg";
            }}
          />
          <Title>{listings[3].title}</Title>
        </Row50>
      </Col>
      <Col>
        <Image
          src={listings[4].mediaurl}
          onError={e => {
            e.target.onerror = null;
            e.target.src =
              "https://res.cloudinary.com/simpleview/image/upload/v1463070008/listings_default_tppucp.jpg";
          }}
        />
        <Title>{listings[4].title}</Title>
      </Col>
    </Page>
  );
}

export function Page3({ listings }) {
  return (
    <Page>
      <Col>
        <Row50>
          <Image
            src={listings[0].mediaurl}
            onError={e => {
              e.target.onerror = null;
              e.target.src =
                "https://res.cloudinary.com/simpleview/image/upload/v1463070008/listings_default_tppucp.jpg";
            }}
          />
          <Title>{listings[0].title}</Title>
        </Row50>
        <Row50>
          <Image
            src={listings[1].mediaurl}
            onError={e => {
              e.target.onerror = null;
              e.target.src =
                "https://res.cloudinary.com/simpleview/image/upload/v1463070008/listings_default_tppucp.jpg";
            }}
          />
          <Title>{listings[1].title}</Title>
        </Row50>
      </Col>
      <Col>
        <Image
          src={listings[2].mediaurl}
          onError={e => {
            e.target.onerror = null;
            e.target.src =
              "https://res.cloudinary.com/simpleview/image/upload/v1463070008/listings_default_tppucp.jpg";
          }}
        />
        <Title>{listings[2].title}</Title>
      </Col>
    </Page>
  );
}

export function Page4({ listings }) {
  return (
    <Page>
      <Col>
        <Image
          src={listings[0].mediaurl}
          onError={e => {
            e.target.onerror = null;
            e.target.src =
              "https://res.cloudinary.com/simpleview/image/upload/v1463070008/listings_default_tppucp.jpg";
          }}
        />
        <Title>{listings[0].title}</Title>
      </Col>
      <Col>
        <Image
          src={listings[1].mediaurl}
          onError={e => {
            e.target.onerror = null;
            e.target.src =
              "https://res.cloudinary.com/simpleview/image/upload/v1463070008/listings_default_tppucp.jpg";
          }}
        />
        <Title>{listings[1].title}</Title>
      </Col>
    </Page>
  );
}
