import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
:focus{
  outline: 0;
}
 body{
  background-color: ${(props) => props.theme["color-background"]};
  /* background-color: #1e1e1e; */
  color: ${(props) => props.theme["base-text"]};
  -webkit-font-smoothing: antialiased;
 }
 body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
 }
 /* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px   ${(props) => props.theme["yellow-light"]}; 
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${(props) => props.theme["base-text"]};
  border-radius: 8px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${(props) => props.theme["yellow-dark"]};
}
`;
