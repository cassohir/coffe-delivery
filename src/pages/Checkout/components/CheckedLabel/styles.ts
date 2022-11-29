import styled from "styled-components";

export const FormContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  margin: 1rem auto;
  padding: 2rem;
  background-color: ${(props) => props.theme["base-card"]};
  border-top-left-radius: 8px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 8px;

  p {
    padding: 0.125rem 0rem 2rem 1.875rem;
  }
`;

export const TitlesForm = styled.div`
  display: flex;
  color: ${(props) => props.theme["yellow-dark"]};

  h3 {
    font-family: "Roboto", sans-serif;
    font-size: 1.25rem;
    font-weight: 500;
    margin-left: 0.5rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const PaymentMethods = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

export const SubmitContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SendReqButton = styled.button`
  width: 20rem;
  height: 2.5rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  color: white;
  background-color: ${(props) => props.theme["yellow-brand"]};

  :hover {
    opacity: 0.8;
    transition: 0.2s;
  }
`;

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const OrderPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
`;

export const OrderPrice = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
  align-items: center;

  h2 {
    font-family: "Baloo 2", cursive;
    font-weight: bold;
    font-size: 2rem;
  }
  h4 {
    color: ${(props) => props.theme["base-text"]};
  }
`;
