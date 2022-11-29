import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 5rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;
const ICON_COLORS = {
  yellowDark: "yellow-dark",
  yellowBrand: "yellow-brand",
  purpleBrand: "purple-brand",
  baseText: "base-text",
} as const;

interface IconProps {
  color: keyof typeof ICON_COLORS;
}

export const IconFeature = styled.div<IconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  width: 2rem;
  height: 2rem;
  color: ${(props) => props.theme.white};
  border: none;
  border-radius: 100px;
  background-color: ${(props) => props.theme[ICON_COLORS[props.color]]};
`;

export const InfoCard = styled.div`
  margin-top: 2rem;
  display: flex;
  width: 80%;
  /* background-color: black; */

  /* border: 1px solid linear-gradient(45deg, #dbac2c, #8047f8); */
  border: 1px solid;

  border-top-color: ${(props) => props.theme["yellow-dark"]};
  border-left-color: ${(props) => props.theme["yellow-dark"]};
  border-right-color: ${(props) => props.theme["purple-brand"]};
  border-bottom-color: ${(props) => props.theme["purple-brand"]};
  border-top-left-radius: 8px;
  border-top-right-radius: 35px;

  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 8px;
  ul {
    padding: 2rem;
    list-style-type: none;

    gap: 2.5rem;
  }
  li {
    display: flex;
    margin-top: 1rem;
    align-items: center;
    font-size: 1rem;
    gap: 0.5rem;
    margin: 1.5rem 0;
  }
`;

export const ImgContainer = styled.div`
  margin-top: 5.5rem;
`;
