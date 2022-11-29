import styled from "styled-components";

export const ChartContainer = styled.div`
  display: flex;
  width: 29rem;
  justify-content: flex-start;
  margin-bottom: 1rem;
  align-items: flex-start;
  padding-left: 2.5rem;
  height: 7rem;
  /* background-color: black; */
  img {
    transform: translateY(20px);
    width: 64px;
    height: 64px;
  }

  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductInfoTitles = styled.div`
  display: flex;
  margin: 1rem;
  gap: 6.75rem;
`;
export const ProductButtons = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;

  width: 100%;
  gap: 0.5rem;
  display: flex;
  margin-left: 1rem;
`;

export const BaseButton = styled.div`
  height: 2.375rem;
  width: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;
export const AmountProductButton = styled(BaseButton)`
  background-color: ${(props) => props.theme["base-button"]};
  span {
    color: ${(props) => props.theme["base-title"]};
  }
  button {
    cursor: pointer;
    background-color: ${(props) => props.theme["base-button"]};
    width: 100%;
    text-align: center;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    color: ${(props) => props.theme["purple-brand"]};
    transform: translateY(1px);
  }
`;
export const ChartContainerButton = styled(BaseButton)`
  background-color: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["purple-brand"]};
  width: 8rem;
  gap: 0.5rem;
  cursor: pointer;
  :hover {
    opacity: 0.8;
    transition: 0.1s;
    color: red;
  }
`;
