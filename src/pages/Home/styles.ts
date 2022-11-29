import styled from "styled-components";

export const HomeContainer = styled.div``;

export const ProductsContainer = styled.div`
  h1 {
    margin-top: 8rem;
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    font-size: 2rem;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
