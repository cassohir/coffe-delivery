import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    div {
      transform: translate(220px, -10px);
      display: flex;
      position: absolute;

      align-items: center;
      justify-content: center;
      height: 1.7rem;
      width: 1.7rem;
      border-radius: 100px;
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme["yellow-dark"]};
    }
    div:hover {
      cursor: grab;
    }

    p {
      gap: 0.25rem;
      color: ${(props) => props.theme["purple-brand"]};
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${(props) => props.theme["purple-light"]};
      border-radius: 8px;
      padding: 0.5rem;
    }
    .shoppingCart {
      color: ${(props) => props.theme["yellow-dark"]};
      background-color: ${(props) => props.theme["yellow-light"]};
      border-radius: 8px;
    }

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        cursor: grab;
      }

      &.active {
      }
    }
  }
`;
