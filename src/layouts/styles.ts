import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 90rem;
  margin: 2rem auto;
  padding: 0 7rem;
  /* background-color: black; */

  border-radius: 8px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;
