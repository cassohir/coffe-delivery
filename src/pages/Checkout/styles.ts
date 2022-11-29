import styled from "styled-components";

export const CheckoutContainer = styled.div`
  margin-top: 4.5rem;
  display: flex;
  gap: 1rem;
  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.125rem;
    font-weight: 500;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;
export const InfoAndPaymentContainer = styled.div``;
export const ReviewAndSubmitContainer = styled.div``;

export const ShopButton = styled.p`
  margin-top: 1rem;
  margin-bottom: -2rem;
  align-items: center;
  /* color: ${(props) => props.theme["yellow-brand"]}; */
  color: ${(props) => props.theme["base-subtitle"]};

  text-decoration: none;
`;

export const BackToHome = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
