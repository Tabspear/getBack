import styled from "styled-components";
export interface HeroSlideStyleProps {
  primary?: Boolean;
  backgroundColor?: string;
  color?: string;
  flexBasis?: string;
}

interface FlexBasisProps {
  flexBasis?: string;
}
const breakPoint = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "536px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(min-width: ${breakPoint.mobileS})`,
  mobileM: `(min-width: ${breakPoint.mobileM})`,
  mobileL: `(min-width: ${breakPoint.mobileL})`,
  tablet: `(min-width: ${breakPoint.tablet})`,
  laptop: `(min-width: ${breakPoint.laptop})`,
  laptopL: `(min-width: ${breakPoint.laptopL})`,
  desktop: `(min-width: ${breakPoint.desktop})`,
  desktopL: `(min-width: ${breakPoint.desktop})`,
};
export const HeroSlideStyle = styled.section<HeroSlideStyleProps>`
  display: flex;
  flex-direction: column;
  padding: 10px;
  color:props.color? "e29f51" : "red"
  justify-content: center;
  align-items:center;
  @media ${device.tablet} {
    flex-direction: row;
  }
  flex-basis: ${(props) => props.flexBasis};
  @media ${device.mobileL}{
    flex-direction: row;
  }
`;

export const HeroSlideStyleDiv = styled.div<FlexBasisProps>`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  align-items:center;
  flex-basis: ${(props) => props.flexBasis || "auto"}
`;
