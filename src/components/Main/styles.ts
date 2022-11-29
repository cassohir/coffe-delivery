import styled from "styled-components";

const ICON_COLORS = {
  yellowDark: "yellow-dark",
  yellowBrand: "yellow-brand",
  purpleBrand: "purple-brand",
  baseText: "base-text",
} as const;

interface IconProps {
  color: keyof typeof ICON_COLORS;
}

export const TitlesContainer = styled.header`
  text-align: left;
  display: flex;
  flex-direction: column;

  h1 {
    color: ${(props) => props.theme["base-title"]};
    font-size: 3rem;
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    line-height: 1.3;
  }
  h4 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.25rem;
    margin-top: 1rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    line-height: 1.3;
  }
`;

export const BoxFeatures = styled.div`
  margin-top: 3.125rem;

  ul {
    list-style-type: none;
    display: inline-flex;
    gap: 2.5rem;
  }
  li {
    display: flex;
    margin-top: 1rem;
    align-items: center;
    font-size: 1rem;
    gap: 0.5rem;
  }
  .coffee {
    transform: translateX(-10px);
  }
`;

export const MainContainer = styled.main`
  margin-top: 6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

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
