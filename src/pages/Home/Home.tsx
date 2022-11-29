import { Main } from "../../components/Main/Main";
import { ProductList } from "../../components/ProductList/ProductList";
import { HomeContainer, ProductsContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Main />
      <ProductsContainer>
        <h1>Nossos Cafés</h1>
        <ProductList />
      </ProductsContainer>
    </HomeContainer>
  );
}
