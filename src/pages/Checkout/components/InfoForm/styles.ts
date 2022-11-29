import styled from "styled-components";

export const SeparatorContainer = styled.div``;

export const FormContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  margin: 1rem auto;
  padding: 2rem;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 8px;

  p {
    padding: 0.125rem 0rem 2rem 1.875rem;
  }
`;

export const FormFields = styled.div`
  display: flex;
  flex-wrap: wrap;

  input {
    height: 2.625rem;
    color: ${(props) => props.theme["base-text"]};
    background-color: ${(props) => props.theme["base-input"]};
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    border: none;
    margin: 1rem;
    padding: 1rem;
    border-radius: 8px;
  }
  input::placeholder {
    color: ${(props) => props.theme["base-label"]};
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

  button {
  }
`;

interface PaymentButtonProps {
  isSelected?: boolean;
}
export const PaymentButton = styled.button<PaymentButtonProps>`
  color: ${(props) => props.theme["purple-brand"]};
  display: flex;
  font-size: 0.75rem;
  width: 11.2rem;
  align-items: center;
  justify-content: center;

  height: 3.2rem;
  background-color: ${(props) => props.theme["base-button"]};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  border: none;
  p {
    transform: translate(-20px, 15px);
    color: ${(props) => props.theme["base-text"]};
  }
  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme["purple-brand"]};
    border-radius: 8px;
  }
  input[type="checkbox"] {
    display: none;
  }
`;
