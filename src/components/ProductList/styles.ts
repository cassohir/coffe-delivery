import styled from "styled-components";

export const ProductsListContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0.5rem;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
